const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("movie", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      //preguntar por el unique
    },
    //backdrop_path
    img: {
      type: DataTypes.STRING,
    },
    //Overview
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
    trailer: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.DECIMAL,
    },
    movie_genre: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  });
};
