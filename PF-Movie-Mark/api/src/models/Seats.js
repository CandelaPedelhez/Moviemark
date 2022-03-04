const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("seat", {
    id: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      primaryKey: true,
      allowNull: false,
=======
      allowNull: false,
      primaryKey: true, 
>>>>>>> 93ed76cdd9305e109f0ccf81bc34299ea5cf23c9
    },
    /*letter: {
      type: DataTypes.STRING,
    },*/
  },{
    timestamps: false
  });
};
