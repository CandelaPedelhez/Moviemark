const {Cart,Product} = require("../../db.js");


const addProductCart = async (req, res) => {
  const { name, img, price, id } = req.body;

  /* Nos fijamos si tenemos el producto */
  const estaEnProducts = await Product.findOne({where:{ name: name }});
  console.log(estaEnProducts)

  /* Nos fijamos si todos los campos vienen con info */
  const noEstaVacio = name !== "" && img !== "" && price !== "" && id !== null;

  /* Nos fijamos si el producto ya esta en el carrito */
  const estaEnElCarrito = await Cart.findOne({where:{ name: name }});

  /* Si no tenemos el producto */
  if (!estaEnProducts) {
    res.status(400).json({
      mensaje: "Este producto no se encuentra en nuestra base de datos",
    });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
  } if (noEstaVacio && !estaEnElCarrito) {
    // const newProductInCart = new Cart({ name, img, price, amount: 1 });

    /* Y actualizamos la prop inCart: true en nuestros productos */

Product.update(
  { inCart: true},
  { where: { id: estaEnProducts.dataValues.id} }
)
.then((product) => {
  // const {userId} = req.body;
  // console.log(userId)
  Cart.create({ name, img, price, amount: 1});
  // console.log("El producto fue agregado al carrito"),
      res.json({
        product,
      });
    })
    .catch((error) => console.error(error));
  
      /* Y si esta en el carrito avisamos */
  } if (estaEnElCarrito) {
    // console.log("El producto ya esta en el carrito")
  res.status(400).json({
    mensaje: "El producto ya esta en el carrito",
  });
}
  }
module.exports = addProductCart;