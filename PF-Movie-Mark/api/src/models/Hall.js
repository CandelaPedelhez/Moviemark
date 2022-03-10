const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("hall", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    seats: {
      type: DataTypes.INTEGER,
    },
  });
};
