const {Product} = require("../../db.js");

const getProducts = async (req, res) => {
  const products = await Product.findAll();

  if (products) {
    res.json({ products });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getProducts;
