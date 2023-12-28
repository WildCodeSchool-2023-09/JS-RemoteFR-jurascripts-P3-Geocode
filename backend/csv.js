require("dotenv").config();

const filePath = "./data/born_data.csv";
const Papa = require("papaparse");
const fs = require("fs");
const database = require("./database/client");
const plugData = require("./data/plugData");

const csv = async () => {
  try {
    const csvFile = fs.readFileSync(filePath, "utf8");
    const queries = [];

    const parsePromise = new Promise((resolve, reject) => {
      Papa.parse(csvFile, {
        header: true,
        complete: (result) => {
          resolve(result.data);
        },
        error: (error) => {
          reject(error.message);
        },
      });
    });

    const dataBorn = await parsePromise;

    /* ******************************* Normalize Boolean ****************************** */
    const normalizeBoolean = (value) => {
      if (typeof value === "boolean") {
        return value;
      }
      if (typeof value === "string") {
        const lowerCaseValue = value.toLowerCase();
        return lowerCaseValue === "true" || lowerCaseValue === "1";
      }
      return Boolean(value);
    };

    /* ******************************* Plug Condition ****************************** */

    const conditionPlug = (data) => {
      const ef = normalizeBoolean(data.prise_type_ef);
      const type2 = normalizeBoolean(data.prise_type_2);
      const comboCCS = normalizeBoolean(data.prise_type_combo_ccs);
      const chademo = normalizeBoolean(data.prise_type_chademo);
      const autre = normalizeBoolean(data.prise_type_autre);

      if (ef && !type2 && !comboCCS && !chademo && autre) {
        return 1;
      }
      if (ef && type2 && !comboCCS && !chademo && autre) {
        return 2;
      }
      if (ef && !type2 && !comboCCS && !chademo && !autre) {
        return 3;
      }
      if (ef && type2 && !comboCCS && !chademo && !autre) {
        return 4;
      }
      if (ef && type2 && comboCCS && chademo && !autre) {
        return 5;
      }
      if (!ef && !type2 && !comboCCS && !chademo && autre) {
        return 6;
      }
      if (!ef && !type2 && !comboCCS && chademo && autre) {
        return 7;
      }
      if (!ef && type2 && !comboCCS && !chademo && autre) {
        return 8;
      }
      if (!ef && !type2 && !comboCCS && !chademo && !autre) {
        return 9;
      }
      if (!ef && !type2 && !comboCCS && chademo && !autre) {
        return 10;
      }
      if (!ef && !type2 && comboCCS && !chademo && !autre) {
        return 11;
      }
      if (!ef && !type2 && comboCCS && chademo && !autre) {
        return 12;
      }
      if (!ef && type2 && !comboCCS && !chademo && !autre) {
        return 13;
      }
      if (!ef && type2 && !comboCCS && chademo && !autre) {
        return 14;
      }
      if (!ef && type2 && comboCCS && !chademo && !autre) {
        return 15;
      }
      if (!ef && type2 && comboCCS && chademo && !autre) {
        return 16;
      }
      if (ef && type2 && comboCCS && chademo && autre) {
        return 17;
      }
      if (!ef && type2 && comboCCS && chademo && autre) {
        return 18;
      }
      if (ef && type2 && !comboCCS && chademo && !autre) {
        return 19;
      }
      if (ef && !type2 && comboCCS && !chademo && !autre) {
        return 20;
      }
      if (ef && type2 && comboCCS && !chademo && !autre) {
        return 21;
      }
      if (ef && !type2 && comboCCS && !chademo && autre) {
        return 22;
      }
      if (ef && !type2 && !comboCCS && chademo && !autre) {
        return 23;
      }
      return 0;
    };

    /* ******************************* TerminalData ****************************** */

    const terminalData = dataBorn.map((rowData) => {
      return {
        id_station_itinerance: rowData.id_station_itinerance,
        nom_operateur: rowData.nom_operateur,
        puissance_nominale: rowData.puissance_nominale,
        prise_type_ef: rowData.prise_type_ef,
        prise_type_2: rowData.prise_type_2,
        prise_type_combo_ccs: rowData.prise_type_combo_ccs,
        prise_type_chademo: rowData.prise_type_chademo,
        prise_type_autre: rowData.prise_type_autre,
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
      return queries.push(
        database.query(
          "INSERT INTO plug ( id ,prise_type_ef, prise_type_2, prise_type_combo_ccs, prise_type_chademo, prise_type_autre) VALUES (?,?, ?, ?, ?, ?)",
          [
            data.id,
            data.prise_type_ef,
            data.prise_type_2,
            data.prise_type_combo_ccs,
            data.prise_type_chademo,
            data.prise_type_autre,
          ]
        )
      );
    });
    await Promise.all(plugPromises);
    console.info("All rows inserted into plug table");

    /* ******************************* Terminal ****************************** */

    const terminalPromises = terminalData.map((data) => {
      return database.query(
        "INSERT INTO terminal (nom_operateur, station_itinerance, puissance_nominale, plug_id) VALUES (?,?, ?, ?)",
        [
          data.nom_operateur,
          data.id_station_itinerance,
          data.puissance_nominale,
          conditionPlug(data),
        ]
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
