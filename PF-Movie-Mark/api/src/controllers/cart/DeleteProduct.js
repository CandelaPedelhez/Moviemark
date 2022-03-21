const {Cart,Product} = require("../../db.js");

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  // console.log(productId)

  /* Buscamos el producto en el carrito */
  const productInCart = await Cart.findOne({where: {'id': productId}});
  // console.log(productInCart)

  /* Buscamos el producto en nuestra DB por el nombre del que esta en el carrito */
  const { id, name, img, price } = await Product.findOne({where: {
    'name': productInCart.dataValues.name,
  }});
  // console.log(id)

  /* Buscamos y eliminamos el producto con la id */
  await Cart.destroy({where: {'id': productId}});
  
  /* Buscamos y editamos la prop inCart: false */
  /* Le pasamos la id del producto en la DB */
  /* La prop a cambiar y las demas */
  /* Y el new para devolver el producto editado */

    Product.update(
      {
        inCart: false, name, img, price
    },
      {where: {'id': id}}) //try id
    
    .then((product) => {
      console.log(`El product ${name} fue eliminado`)
          res.json({
            mensaje: `El producto ${name} fue eliminado del carrito`,
            product,
          });
        })
        .catch((error) => console.error(error));
};

module.exports = deleteProduct;