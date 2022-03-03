const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("seat", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    /*letter: {
      type: DataTypes.STRING,
    },*/
  });
};
