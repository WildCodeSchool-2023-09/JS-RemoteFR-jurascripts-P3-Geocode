require("dotenv").config();

const database = require("./database/client");
const userData = require("./data/userData");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ******************************* Truncates ****************************** */

    await database.query(
      "SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0"
    );
    await database.query("truncate user");

    await database.query(
      "SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1)"
    );

    /* ******************************* User ****************************** */

    const userPromises = userData.map((data) => {
      return database.query(
        "INSERT INTO user (firstname, lastname, nickname, email, password, city, register_date, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          data.firstname,
          data.lastname,
          data.nickname,
          data.email,
          data.password,
          data.city,
          data.register_date,
          data.is_admin,
        ]
      );
    });
    await Promise.all(userPromises);
    console.info("All rows inserted into user table");

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
