const user = require("./user");

module.exports = (sequelize) => ({
  User: user({ sequelize }),
});
