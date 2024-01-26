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
      s.nom_station, s.localisation, s.condition_acces, s.horaires, s.id_station_itinerance, s.consolidated_code_postal, 
      s.consolidated_commune, p.prise_type_ef, p.prise_type_2, p.prise_type_combo_ccs, p.prise_type_chademo, p.prise_type_autre 
      FROM ${this.table} AS t
               INNER JOIN station AS s ON t.station_id = s.id
               INNER JOIN plug AS p ON t.plug_id = p.id`
    );
    return rows;
  }

  /* ******************************* Create ****************************** */

  async createStation(
    nomOperator,
    power,
    longitude,
    latitude,
    codePostal,
    ville
  ) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nom_operateur, puissance_nominale, longitude, latitude, consolidated_code_postal, consolidated_ville )
    VALUES (?, ?, ?,?)`,
      [nomOperator, power, longitude, latitude, codePostal, ville]
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
}
module.exports = TerminalManager;
