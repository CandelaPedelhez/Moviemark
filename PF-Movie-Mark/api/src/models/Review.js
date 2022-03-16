const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("review", {
    useReview: {
      type: DataTypes.TEXT,
    },
    score: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    },
  },{timestamps: false});
};
