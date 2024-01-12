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

  async readStationItinerance(idStationItinerance) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id_station_itinerance = ? `,
      [idStationItinerance]
    );
    return rows;
  }

  /* ******************************* Create ****************************** */

  async createStation(
    nomStation,
    localisation,
    conditionAcces,
    horaires,
    idStationItinerance
  ) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nom_station, localisation, condition_acces, horaires, id_station_itinerance)
    VALUES (?, ?, ?, ?)`,
      [nomStation, localisation, conditionAcces, horaires, idStationItinerance]
    );
    return result.insertId;
  }

  /* ******************************* Update ****************************** */

  async updateName(nameStation, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET nom_station = ? WHERE id = ?`,
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

  async updateStationItinerance(idStationItinerance, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET id_station_itinerance = ? WHERE id = ?`,
      [idStationItinerance, id]
    );
    return result;
  }
}
module.exports = StationManager;
