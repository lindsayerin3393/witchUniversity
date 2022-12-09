const Sequelize = require("sequelize");
const db = require("./database");

const Students = db.define("students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://media.istockphoto.com/id/1096067210/vector/vector-cute-cartoon-cat-in-witch-hat.jpg?s=170667a&w=0&k=20&c=OM0GYJbHOQfT8WUEhA3G8Luvk54RaAVpvJqBKcx-pcw=",
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Students;
