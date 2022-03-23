const {Cart,Ticket, Order} = require("../../db.js");


const addTicketCart = async (req, res) => {
  const { name, img, price, id } = req.body;

  /* Nos fijamos si tenemos el producto */
  const estaEnTickets = await Ticket.findOne({where:{ name: name }});
  

  /* Nos fijamos si todos los campos vienen con info */
  const noEstaVacio = name !== "" && img !== "" && price !== "" && id !== null;

  /* Nos fijamos si el producto ya esta en el carrito */
  const estaEnElCarrito = await Cart.findOne({where:{ name: name }});

  /* Si no tenemos el producto */
  if (!estaEnTickets) {
    res.status(400).json({
      mensaje: "Este ticket no se encuentra en nuestra base de datos",
    });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
  } if (noEstaVacio && !estaEnElCarrito) {
    // const newProductInCart = new Cart({ name, img, price, amount: 1 });

    /* Y actualizamos la prop inCart: true en nuestros productos */
    const {userId} = req.params;
    console.log("ADDDDDDD",estaEnTickets)
    console.log("ID",userId)
    let orden = await Order.findOrCreate({where: {status: 'carrito'}, defaults: {userId: userId},})
    console.log("orden", orden[0].dataValues.id)


Ticket.update(
  { inCart: true},
  { where: { id: estaEnTickets.dataValues.id} }
)
.then((ticket) => {
  // const {userId} = req.body;
  // console.log(userId)

  Cart.create({ name, img, price, amount: 1, orderId: orden[0].dataValues.id});
  // console.log("El producto fue agregado al carrito"),
      res.json({
        ticket,
      });
    })
    .catch((error) => console.error(error));
  
      /* Y si esta en el carrito avisamos */
  } if (estaEnElCarrito) {
    // console.log("El producto ya esta en el carrito")
  res.status(400).json({
    mensaje: "El ticket ya esta en el carrito",
  });
}
  }
  
module.exports = addTicketCart;