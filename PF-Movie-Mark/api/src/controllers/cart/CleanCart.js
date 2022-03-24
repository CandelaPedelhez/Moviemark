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
                console.log("done")
              })
              .catch((error) => console.error(error));
}

module.exports = cleanCart;