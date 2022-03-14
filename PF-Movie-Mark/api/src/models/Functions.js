const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("functions", {
    movie_title: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    hour: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    hall: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    hall_tickets: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  });
};
