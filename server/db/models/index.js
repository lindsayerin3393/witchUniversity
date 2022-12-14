"use strict";

const db = require("./database");
const CampusesModel = require("./Campuses");
const Students = require("./Students");

Students.belongsTo(CampusesModel);
CampusesModel.hasMany(Students);

module.exports = {
  db,
  CampusesModel,
  Students,
};
