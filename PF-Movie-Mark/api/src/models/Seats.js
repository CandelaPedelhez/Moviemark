const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "seat",
    {
      id: {
        type: DataTypes.INTEGER,
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
