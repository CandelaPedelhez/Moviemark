const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("ticket", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    popularity: {
      type: DataTypes.FLOAT,
    },
    release_date: {
      type: DataTypes.STRING,
    },
    //spoken_languages
    languages: {
      type: DataTypes.STRING,
    },
    vote_average: {
      type: DataTypes.FLOAT,
    },
    inCart: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    trailer: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    movie_genre: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  });
};
