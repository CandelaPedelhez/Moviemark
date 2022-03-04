const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "seat",
    {
      id: {
        type: DataTypes.INTEGER,

        primaryKey: true,
        allowNull: false,

        allowNull: false,
        primaryKey: true,
      },
      /*letter: {
      type: DataTypes.STRING,
    },*/
    },
    {
      timestamps: false,
    }
  );
};
