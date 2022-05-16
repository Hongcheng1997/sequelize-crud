const user = require("./user");

module.exports = ({ router, models }) => {
  user({ router, models });
};
