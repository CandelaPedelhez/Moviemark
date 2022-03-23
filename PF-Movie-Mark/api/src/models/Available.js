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
    price: {
      type: DataTypes.DECIMAL,
    },
    img: {
      type: DataTypes.STRING,
    },
    hall: {
      type: DataTypes.STRING,
    },
    hallTickets: {
      type: DataTypes.INTEGER,
    },
  });
};
