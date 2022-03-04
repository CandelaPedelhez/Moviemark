const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("groceries", {
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
