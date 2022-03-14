const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("available", {
    name: {
      type: DataTypes.STRING,
    },
  });
};