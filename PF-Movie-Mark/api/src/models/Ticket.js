const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ticket", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    movie_title: {
      type: DataTypes.STRING, /* ACÁ TAMBIÉN ARRAY DE OBJETOS CON LAS FUNCIONES */
    },
    //posibilidad de generar un QR
    price: {
      type: DataTypes.FLOAT, /* ACÁ TENEMOS QUE GUARDAR EL TOTAL */
    },
    date: {
      type: DataTypes.DATE,
    },
    adminGroceries: {
      type: DataTypes.STRING, /* ACÁ TENDRÍA QUE GUARDARME UN ARRAY DE OBJETOS CON CADA GOLOSINA */
    },
    hall: {
      type: DataTypes.STRING,
    },
  });
};
