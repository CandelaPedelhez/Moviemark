const {Cart} = require("../../db.js");

const putProduct = async (req, res) => {
  const {productId} = req.params;
  const { query } = req.query;
  const body = req.body;
  // console.log("AAAAAAAAAAAAAAAA",body)

  /* Buscamos el producto en el carrito */
  const productBuscado = await Cart.findOne({where: {'id': productId}});
  // console.log("HOLA", productBuscado)

  /* Si no hay query 'add' o 'del' */
  if (!query) {
    res.status(404).json({ mensaje: "Debes enviar una query" });

    /* Si esta el producto en el carrito y quiero agregar */
  } if (productBuscado && query === "add") {
    body.amount = body.amount + 1;
    
    Cart.update({
      amount: body.amount
    },{where: {id: productId}})
    .then((product) => {
          res.json({
            mensaje: `El producto: ${productId} fue actualizado`,
            product,
          });
        })

    /* Si esta el producto en el carrito y quiero sacar */
  // } else if (productBuscado && query === "dec" && body.amount>=2) {
  //   body.amount = body.amount - 1;

  } else if (productBuscado && query === "dec") {
    if(body.amount === 1){
      body.amount = body.amount
    } else {
    body.amount = body.amount -1;
      }

    Cart.update({
      amount: body.amount,
    },{where: {id :productId}})
      .then((product) => {
          res.json({
            mensaje: `El producto: ${productId} fue eliminado`,
            product,
          });
        })
      }
    }

module.exports = putProduct;