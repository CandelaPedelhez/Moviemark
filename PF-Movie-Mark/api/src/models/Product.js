const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('product', {
      name: { 
        type: DataTypes.STRING, 
        allowNull: false,
      },
      img: { 
        type: DataTypes.TEXT, 
        allowNull: false,
      },
      inCart: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: false
      },
      price: { 
        type: DataTypes.DECIMAL, 
        allowNull: false, 
      },
      typeGrocerie: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
});
  }

