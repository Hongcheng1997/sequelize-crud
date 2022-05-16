const { DataTypes } = require("sequelize");

module.exports = ({ sequelize }) => {
  return sequelize.define("user", {
    // 在这里定义模型属性
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull 默认为 true
    },
  });
};
