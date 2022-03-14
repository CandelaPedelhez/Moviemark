const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("funcion", {
    date: {
      type: DataTypes.STRING,
    },
    hour: {
      type: DataTypes.STRING,
    },
    hall: {
      type: DataTypes.STRING,
    },
    hallTickets: {
      type: DataTypes.STRING,
    },
  });
};
