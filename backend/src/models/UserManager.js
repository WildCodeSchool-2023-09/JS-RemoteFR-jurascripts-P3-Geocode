const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  /* ******************************* Create ****************************** */

  async create(nickname, email, password, registerDate) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (nickname, email, password, register_date) VALUES (?,?,?,?)`[
        (nickname, email, password, registerDate)
      ]
    );
    return result.insertId;
  }

  /* ******************************* Read ****************************** */

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id, nickname, email, register_date, is_admin FROM ${this.table}`
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT id, nickname, email, register_date, is_admin FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readUser(nickname) {
    const [rows] = await this.database.query(
      `SELECT id, nickname, email, register_date, is_admin FROM ${this.table} WHERE nickname LIKE ?`,
      [`%${nickname}%`]
    );
    return rows;
  }

  async readDate(registerDate) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE register_date LIKE ?`,
      [`%${registerDate}%`]
    );
    return rows;
  }

  async readAllUsers() {
    const [rows] = await this.database.query(`SELECT id FROM ${this.table}`);
    return rows[-1];
  }

  async readEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return rows[0];
  }

  /* ******************************* Update ****************************** */

  async update(nickname, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET nickname = ?
        WHERE id = ?`,
      [nickname, id]
    );
    return result;
  }

  async updateName(firstname, lastname, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?
        WHERE id = ?`,
      [firstname, lastname, id]
    );
    return result;
  }

  async updateEmail(email, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET email = ?
          WHERE id = ?`,
      [email, id]
    );
    return result;
  }

  async updatePassword(password, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET password = ?
            WHERE id = ?`,
      [password, id]
    );
    return result;
  }

  async updateCity(city, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET city = ?
              WHERE id = ?`,
      [city, id]
    );
    return result;
  }
}

module.exports = UserManager;
