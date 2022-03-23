const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/cart");
const cleanCart = require('../controllers/cart/CleanCart');
const getTickets = require('../controllers/cart/GetTickets')

router.get("/products", controllers.getProducts);
router.get("/products-cart", controllers.getProductsCart);
router.get("/getTickets", getTickets);


/* POST */
router.post("/products-cart/:userId", controllers.addProductCart);
router.post("/products-cart", controllers.addProductCart);
router.post("/tickets-cart/:userId", controllers.addTicketCart);
router.post("/tickets-cart", controllers.addTicketCart);
// router.post("/products-cart", controllers.addMovieCart);

/* PUT */
router.put("/products-cart/:productId", controllers.putProduct);
router.put("/tickets-cart/:ticketId", controllers.putTicket);

/* DELETE */
router.delete("/products-cart/:productId", controllers.deleteProduct);
router.delete("/tickets-cart/:ticketId", controllers.deleteTicket);
router.delete("/cart-delete/", cleanCart);

module.exports = router;
