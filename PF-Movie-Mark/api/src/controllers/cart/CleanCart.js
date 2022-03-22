const {Cart, Product} = require("../../db.js");

const cleanCart = async (req, res) => {
    const {id} = req.body;
    console.log(id)

    Cart.destroy({
        truncate: true
      })

      Product.update(
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