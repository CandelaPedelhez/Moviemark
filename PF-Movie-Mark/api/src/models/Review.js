const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("review", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    useReview: {
      type: DataTypes.TEXT,
    },
    score: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: false
    },
    isCreatedReview: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
};
