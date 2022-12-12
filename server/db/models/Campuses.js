const Sequelize = require("sequelize");
const db = require("./database");
const Students = require("./Students");

const CampusesModel = db.define("campuses", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://i.etsystatic.com/27844344/r/il/1c4fc4/3410057599/il_fullxfull.3410057599_fhzn.jpg",
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});

CampusesModel.findStudents = async function (id) {
  const students = await CampusesModel.findByPk(id, {
    include: { model: Students },
  });
  return students;
};

module.exports = CampusesModel;
