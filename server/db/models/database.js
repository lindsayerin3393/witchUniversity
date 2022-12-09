"use strict";

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.

const Sequelize = require("sequelize");
// const pkg = require("../../../package.json");

// // console.log(chalk.yellow("Opening database connection"));

// // create the database instance that can be used in other database files
// const db = new Sequelize(`postgres://localhost:3000/${pkg.name}`, {
//   logging: false, // so we don't see all the SQL queries getting made
// });

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_schools_db",
  {
    logging: false,
  }
);

module.exports = db;
