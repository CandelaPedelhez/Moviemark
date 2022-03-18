const {Cart} = require("../../db.js");

const getProductsCart = async (req, res) => {
  const productsCart = await Cart.findAll();

  if (productsCart) {
    res.json({ productsCart });
  } else {
    res.json({ mensaje: "No hay productos en el carrito" });
  }
};

module.exports = getProductsCart;
