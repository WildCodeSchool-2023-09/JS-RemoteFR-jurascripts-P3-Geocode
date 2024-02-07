const AbstractManager = require("./AbstractManager");

class TerminalManager extends AbstractManager {
  constructor() {
    super({ table: "terminal" });
  }

  /* ******************************* Read ****************************** */

  async readAll() {
    const [rows] = await this.database.query(`
    SELECT * FROM ${this.table} 
    `);
    return rows;
  }

  async readOperator(nomOperateur) {
    const [rows] = await this.database.query(
      `
SELECT * FROM ${this.table} WHERE nom_operateur LIKE ? 
    `,
      [`%${nomOperateur}%`]
    );
    return rows;
  }

  async readId(id) {
    const [rows] = await this.database.query(
      `
SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows;
  }

  async readPower(power) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE puissance_nominale = ? `,
      [power]
    );
    return rows;
  }

  async readStatus(status) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE status = ? `,
      [status]
    );
    return rows;
  }

  async readGeo(longitude, latitude) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE (longitude, latitude) VALUES (?, ?)`,
      [longitude, latitude]
    );
    return rows;
  }

  async findTerminalByRead() {
    const [rows] = await this.database.query(
      `SELECT t.id, t.nom_operateur, t.puissance_nominale, t.plug_id, t.station_id, t.status, t.longitude, t.latitude, 
      s.nom_station, s.localisation, s.condition_acces, s.horaires, s.consolidated_code_postal, 
      s.consolidated_commune, p.prise_type_ef, p.prise_type_2, p.prise_type_combo_ccs, p.prise_type_chademo, p.prise_type_autre 
      FROM ${this.table} AS t
               INNER JOIN station AS s ON t.station_id = s.id
               INNER JOIN plug AS p ON t.plug_id = p.id`
    );
    return rows;
  }

  async stationGeoRead() {
    const [rows] = await this.database.query(
      `SELECT MAX(t.id) AS id, s.id AS station_id, MAX(t.longitude) AS longitude, MAX(t.latitude) AS latitude
FROM station AS s
LEFT JOIN terminal AS t ON t.station_id = s.id
GROUP BY s.id`
    );
    return rows;
  }

  /* ******************************* Create ****************************** */

  async createTerminal(
    nomOperateur,
    stationId,
    plugId,
    puissanceNominale,
    longitude,
    latitude
  ) {
    await this.database.query(
      "SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0"
    );
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nom_operateur, station_id, plug_id, puissance_nominale, longitude, latitude)
    VALUES (?, ?, ?,?, ?, ?)`,
      [nomOperateur, stationId, plugId, puissanceNominale, longitude, latitude]
    );
    await this.database.query(
      "SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0"
    );
    return result.insertId;
  }

  /* ******************************* Update ****************************** */

  async updateOperator(nameOperator, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET nom_operateur = ? WHERE id = ?`,
      [nameOperator, id]
    );
    return result;
  }

  async updatePower(power, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET puissance_nominale = ? WHERE id = ?`,
      [power, id]
    );
    return result;
  }

  async updateStatus(status, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET status = ? WHERE id = ?`,
      [status, id]
    );
    return result;
  }

  async updateGeo(longitude, latitude, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET longitude = ? latitude = ? WHERE id = ?`,
      [longitude, latitude, id]
    );
    return result;
  }

  async updateTerminalById(terminalId, updatedData) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} AS t
    INNER JOIN station AS s ON t.station_id = s.id
    INNER JOIN plug AS p ON t.plug_id = p.id
    SET 
      t.nom_operateur = ?,
      t.puissance_nominale = ?,
      t.plug_id = ?,
      t.station_id = ?,
      t.status = ?,
      t.longitude = ?,
      t.latitude = ?,
      s.nom_station = ?,
      s.localisation = ?,
      s.condition_acces = ?,
      s.horaires = ?,
      s.consolidated_code_postal = ?,
      s.consolidated_commune = ?,
      p.prise_type_ef = ?,
      p.prise_type_2 = ?,
      p.prise_type_combo_ccs = ?,
      p.prise_type_chademo = ?,
      p.prise_type_autre = ?
    WHERE t.id = ?
  `,
      [
        updatedData.nom_operateur,
        updatedData.puissance_nominale,
        updatedData.plug_id,
        updatedData.station_id,
        updatedData.status,
        updatedData.longitude,
        updatedData.latitude,
        updatedData.nom_station,
        updatedData.localisation,
        updatedData.condition_acces,
        updatedData.horaires,
        updatedData.consolidated_code_postal,
        updatedData.consolidated_commune,
        updatedData.prise_type_ef,
        updatedData.prise_type_2,
        updatedData.prise_type_combo_ccs,
        updatedData.prise_type_chademo,
        updatedData.prise_type_autre,
        terminalId,
      ]
    );
    return result;
  }
}
module.exports = TerminalManager;
