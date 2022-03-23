const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("grocerie", {
    //id innecesary
    name: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    inCart: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: false
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
