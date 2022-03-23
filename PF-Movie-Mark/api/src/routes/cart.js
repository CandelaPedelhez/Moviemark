const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/cart");
const cleanCart = require('../controllers/cart/CleanCart');

router.get("/products", controllers.getProducts);
router.get("/products-cart", controllers.getProductsCart);

/* POST */
router.post("/products-cart/:id", controllers.addProductCart);
router.post("/products-cart", controllers.addMovieCart);

/* PUT */
router.put("/products-cart/:productId", controllers.putProduct);

/* DELETE */
router.delete("/products-cart/:productId", controllers.deleteProduct);
router.delete("/cart-delete/", cleanCart);

module.exports = router;
