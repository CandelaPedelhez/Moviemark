const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("seat", {
    id: {
      type: DataTypes.INTEGER,
    },
    /*letter: {
      type: DataTypes.STRING,
    },*/
  });
};
