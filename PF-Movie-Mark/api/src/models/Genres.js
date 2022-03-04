const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("genre", {
<<<<<<< HEAD
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
=======

>>>>>>> 93ed76cdd9305e109f0ccf81bc34299ea5cf23c9
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
},{
    timestamps: false
  });
};
