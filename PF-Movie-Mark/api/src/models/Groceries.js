const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("groceries", {
    id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.STRING,
    },
  });
};
