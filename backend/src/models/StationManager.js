const AbstractManager = require("./AbstractManager");

class StationManager extends AbstractManager {
  constructor() {
    super({ table: "station" });
  }

  /* ******************************* Read ****************************** */

  async readAll() {
    const [rows] = await this.database.query(`
    SELECT * FROM ${this.table} 
    `);
    return rows;
  }

  async readLocation(localisation) {
    const [rows] = await this.database.query(
      `
SELECT * FROM ${this.table} WHERE localisation LIKE ? 
    `,
      [`%${localisation}%`]
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

  async readGeoPoint(longitude, latitude) {
    const [rows] = await this.database.query(
      `
SELECT * FROM ${this.table} WHERE longitude = ? AND latitude = ? `,
      [longitude, latitude]
    );
    return rows;
  }

  /* ******************************* Create ****************************** */

  async createStation(
    nomStation,
    localisation,
    conditionAcces,
    horaires,
    longitude,
    latitude
  ) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nom_station, localisation, condition_acces, horaires, longitude, latitude)
    VALUES (?, ?, ?, ?, ?, ?)`,
      [nomStation, localisation, conditionAcces, horaires, longitude, latitude]
    );
    return result.insertId;
  }

  /* ******************************* Update ****************************** */

  async updateName(nameStation, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET nom_station = ? WHERE id = ?`,
      [nameStation, id]
    );
    return result;
  }

  async updateLocation(location, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET localisation = ? WHERE id = ?`,
      [location, id]
    );
    return result;
  }

  async updateAccess(conditionAcces, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET condition_acces = ? WHERE id = ?`,
      [conditionAcces, id]
    );
    return result;
  }

  async updateHours(hours, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET horaires = ? WHERE id = ?`,
      [hours, id]
    );
    return result;
  }

  async updateGeoPoint(longitude, latitude, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET longitude = ?, latitude = ? WHERE id = ?`,
      [longitude, latitude, id]
    );
    return result;
  }
}
module.exports = StationManager;
