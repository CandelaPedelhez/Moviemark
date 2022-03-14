const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("available", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    hour: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    hall: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    hall_tickets: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  });
};
