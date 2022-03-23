const {Cart,Ticket} = require("../../db.js");

const deleteTicket = async (req, res) => {
  const { ticketId } = req.params;
  // console.log(productId)

  /* Buscamos el producto en el carrito */
  const ticketInCart = await Cart.findOne({where: {'id': ticketId}});
  // console.log(productInCart)

  /* Buscamos el producto en nuestra DB por el nombre del que esta en el carrito */
  const { id, name, img, price } = await Ticket.findOne({where: {
    'name': ticketInCart.dataValues.name,
  }});
  // console.log(id)

  /* Buscamos y eliminamos el producto con la id */
  await Cart.destroy({where: {'id': ticketId}});
  
  /* Buscamos y editamos la prop inCart: false */
  /* Le pasamos la id del producto en la DB */
  /* La prop a cambiar y las demas */
  /* Y el new para devolver el producto editado */

    Ticket.update(
      {
        inCart: false, name, img, price
    },
      {where: {'id': id}}) //try id
    
    .then((ticket) => {
      console.log(`El ticket ${name} fue eliminado`)
          res.json({
            mensaje: `El producto ${name} fue eliminado del carrito`,
            ticket,
          });
        })
        .catch((error) => console.error(error));
};

module.exports = deleteTicket;