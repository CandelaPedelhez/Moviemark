const {Cart} = require("../../db.js");

const putTicket = async (req, res) => {
  const {ticketId} = req.params;
  const { query } = req.query;
  const body = req.body;
  // console.log("AAAAAAAAAAAAAAAA",body)

  /* Buscamos el producto en el carrito */
  const ticketBuscado = await Cart.findOne({where: {'id': ticketId}});
  // console.log("HOLA", productBuscado)

  /* Si no hay query 'add' o 'del' */
  if (!query) {
    res.status(404).json({ mensaje: "Debes enviar una query" });

    /* Si esta el producto en el carrito y quiero agregar */
  } if (ticketBuscado && query === "add") {
    body.amount = body.amount + 1;
    
    Cart.update({
      amount: body.amount
    },{where: {id: ticketId}})
    .then((ticket) => {
          res.json({
            mensaje: `El producto: ${ticketId} fue actualizado`,
            ticket,
          });
        })

    /* Si esta el producto en el carrito y quiero sacar */
  // } else if (productBuscado && query === "dec" && body.amount>=2) {
  //   body.amount = body.amount - 1;

  } else if (ticketBuscado && query === "dec") {
    if(body.amount === 1){
      body.amount = body.amount
    } else {
    body.amount = body.amount -1;
      }

    Cart.update({
      amount: body.amount,
    },{where: {id :ticketId}})
      .then((ticket) => {
          res.json({
            mensaje: `El producto: ${ticketId} fue eliminado`,
            ticket,
          });
        })
      }
    }

module.exports = putTicket;