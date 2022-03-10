const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("grocerie", {
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
    typeGrocerie: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.TEXT,
    },
  });
};
