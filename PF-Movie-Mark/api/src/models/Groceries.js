const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("groceries", {
<<<<<<< HEAD
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
=======
>>>>>>> 93ed76cdd9305e109f0ccf81bc34299ea5cf23c9
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
