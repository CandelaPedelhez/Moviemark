const {Cart, Product, Ticket} = require("../../db.js");

const cleanCart = async (req, res) => {

    Cart.destroy({
        truncate: true
      })

      Product.update(
        {
          inCart: false
      },
        {where:{ inCart: true}})

        Ticket.update(
          {
            inCart: false
        },
          {where:{ inCart: true}})

        .then(() => {
                res.json({
                  mensaje: 'El carrito fue vaciado',
                });
              })
              .catch((error) => console.error(error));
}

module.exports = cleanCart;