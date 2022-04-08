const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("available", {
    name: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    hour: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    hall: {
      type: DataTypes.STRING,
    },
    hallTickets: {
      type: DataTypes.INTEGER,
    },
  });
};
