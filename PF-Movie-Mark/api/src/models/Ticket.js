const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ticket", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    /* movie_title: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    }, */
    //posibilidad de generar un QR
    price: {
      type: DataTypes.FLOAT,
    },
  });
};
