const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("movie", {
    id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      //preguntar por el unique
    },
    /*adult: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },*/
    //backdrop_path
    img: {
      type: DataTypes.STRING,
    },
    //Overview
    description: {
      type: DataTypes.STRING,
    },
    popularity: {
      type: DataTypes.FLOAT,
    },
    release_date: {
      type: DataTypes.STRING,
    },
    //spoken_languages
    languages: {
      type: DataTypes.ARRAY,
    },
    vote_average: {
      type: DataTypes.FLOAT,
    },
  });
};
