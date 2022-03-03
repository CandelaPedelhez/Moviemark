const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("groceries", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
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
