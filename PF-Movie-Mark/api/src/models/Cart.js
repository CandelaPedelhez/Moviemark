const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('cart', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      img: { 
        type: DataTypes.STRING, 
        // allowNull: false, 
      },
      amount: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
      },
      price: { 
        type: DataTypes.DECIMAL, 
        // allowNull: false, 
      },
    });
  }