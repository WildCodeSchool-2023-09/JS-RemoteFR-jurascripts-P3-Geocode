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

  // async readLatitude(latitude) {
  //   const [rows] = await this.database.query(
  //     `SELECT * FROM ${this.table} WHERE latitude = ? `,
  //     [latitude]
  //   );
  //   return rows;
  // }

  /* ******************************* Create ****************************** */

  async createStation(nomOperator, power, longitude, latitude) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nom_operateur, puissance_nominale, longitude, latitude)
    VALUES (?, ?, ?,?)`,
      [nomOperator, power, longitude, latitude]
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

  async updateLongitude(longitude, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET longitude = ? WHERE id = ?`,
      [longitude, id]
    );
    return result;
  }

  async updateLatitude(latitude, id) {
    const [result] = await this.database.query(
      `
  UPDATE ${this.table} SET latitude = ? WHERE id = ?`,
      [latitude, id]
    );
    return result;
  }
}
module.exports = TerminalManager;
