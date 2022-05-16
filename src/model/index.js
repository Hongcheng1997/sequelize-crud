const { Sequelize } = require("sequelize");
const user = require("./user");

const sequelize = new Sequelize("database_development", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  User: user({ sequelize }),
};
