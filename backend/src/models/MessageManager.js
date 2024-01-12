const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  constructor() {
    super({ table: "message" });
  }

  /* ******************************* Create ****************************** */

  async create(userId, content, received) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, content, received)
        VALUES ( ?, ?, ?)`,
      [userId, content, received]
    );
    return result.insertId;
  }

  /* ******************************* Read ****************************** */

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }
}

module.exports = MessageManager;
