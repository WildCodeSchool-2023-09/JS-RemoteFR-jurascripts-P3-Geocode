require("dotenv").config();

const filePath = "./data/born_data.csv";
const Papa = require("papaparse");
const fs = require("fs");
const database = require("./database/client");

const csv = async () => {
  try {
    const csvFile = fs.readFileSync(filePath, "utf8");
    const queries = [];

    const parsePromise = new Promise((resolve, reject) => {
      Papa.parse(csvFile, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          resolve(result.data);
        },
        error: (error) => {
          reject(error.message);
        },
      });
    });

    const dataBorn = await parsePromise;

    /* ******************************* PlugData ****************************** */

    const plugData = dataBorn.map((rowData) => {
      return {
        serial: rowData.num_pdl,
        prise_type_ef: rowData.prise_type_ef,
        prise_type_2: rowData.prise_type_2,
        prise_type_combo_ccs: rowData.prise_type_combo_ccs,
        prise_type_chademo: rowData.prise_type_chademo,
        prise_type_autre: rowData.prise_type_autre,
      };
    });

    /* ******************************* TerminalData ****************************** */

    const terminalData = dataBorn.map((rowData) => {
      return {
        nom_operateur: rowData.nom_operateur,
        puissance_nominale: rowData.puissance_nominale,
      };
    });

    /* ******************************* StationData ****************************** */

    const stationData = dataBorn.map((rowData) => {
      return {
        nom_station: rowData.nom_station,
        localisation: rowData.adresse_station,
        condition_acces: rowData.condition_acces,
        horaires: rowData.horaires,
        longitude: rowData.consolidated_longitude,
        latitude: rowData.consolidated_latitude,
      };
    });

    /* ******************************* Truncates ****************************** */

    await database.query(
      "SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0"
    );
    await database.query("truncate station");
    await database.query("truncate plug");
    await database.query("truncate terminal");

    await database.query(
      "SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1)"
    );

    /* ******************************* Station ****************************** */

    const stationPromises = stationData.map((data) => {
      return database.query(
        "INSERT INTO station (nom_station, localisation, condition_acces, horaires, longitude, latitude) VALUES (?, ?, ?, ?, ?, ?)",
        [
          data.nom_station,
          data.localisation,
          data.condition_acces,
          data.horaires,
          data.longitude,
          data.latitude,
        ]
      );
    });
    await Promise.all(stationPromises);
    console.info("All rows inserted into station table");

    /* ******************************* Plug ****************************** */

    const plugPromises = plugData.map((data) => {
      return database.query(
        "INSERT INTO plug (serial, prise_type_ef, prise_type_2, prise_type_combo_ccs, prise_type_chademo, prise_type_autre) VALUES (?, ?, ?, ?, ?, ?)",
        [
          data.serial,
          data.prise_type_ef === "True" ? 1 : 0,
          data.prise_type_2 === "True" ? 1 : 0,
          data.prise_type_combo_ccs === "True" ? 1 : 0,
          data.prise_type_chademo === "True" ? 1 : 0,
          data.prise_type_autre === "True" ? 1 : 0,
        ]
      );
    });
    await Promise.all(plugPromises);
    console.info("All rows inserted into plug table");

    /* ******************************* Terminal ****************************** */

    const terminalPromises = terminalData.map((data) => {
      return database.query(
        "INSERT INTO terminal (nom_operateur, puissance_nominale) VALUES (?, ?)",
        [data.nom_operateur, data.puissance_nominale]
      );
    });
    await Promise.all(terminalPromises);
    console.info("All rows inserted into terminal table");

    /* ******************************* End Database ****************************** */

    await Promise.all(queries);

    database.end();
    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};
csv();
