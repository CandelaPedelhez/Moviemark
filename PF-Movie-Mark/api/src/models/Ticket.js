const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ticket", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    //posibilidad de generar un QR
    price: {
      type: DataTypes.FLOAT,
    },

    userGroceries: {
      type: DataTypes.STRING,
    },
  });
};
