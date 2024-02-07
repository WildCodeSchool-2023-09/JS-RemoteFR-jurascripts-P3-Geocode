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

  /* ******************************* Create ****************************** */

  async createStation(
    idStationItinerance,
    nomStation,
    localisation,
    conditionAcces,
    horaires,
    codePostal,
    ville
  ) {
    await this.database.query(
      "SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0"
    );
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (
        id,
    nom_station,
    localisation,
    condition_acces,
    horaires,
    consolidated_code_postal,
    consolidated_commune)
    VALUES (?, ?, ?, ?, ? , ?, ?)`,
      [
        idStationItinerance,
        nomStation,
        localisation,
        conditionAcces,
        horaires,
        codePostal,
        ville,
      ]
    );

    await this.database.query(
      "SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1)"
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
}
module.exports = StationManager;
