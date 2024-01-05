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
SELECT * FROM ${this.table} WHERE longitude = ?, latitude = ?`,
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
      `
    INSERT INTO ${this.table} (nom_station,localisation,condition_acces,horaires,longitude)
        VALUE (?,?,?,?,?,?)
    `,
      [nomStation, localisation, conditionAcces, horaires, longitude, latitude]
    );
    return result.insertId;
  }

  /* ******************************* Update ****************************** */

  async updateName(nomStation, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET nom_station = ? WHERE id = ?`,
      [nomStation, id]
    );
    return result;
  }

  async updateLocation(localisation, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET localisation = ? WHERE id = ?`,
      [localisation, id]
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

  async updateHours(horaires, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET horaires = ? WHERE id = ?`,
      [horaires, id]
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
