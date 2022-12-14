"use strict";

const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_schools_db",
  {
    logging: false,
  }
);

module.exports = db;
