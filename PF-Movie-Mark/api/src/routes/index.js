const { Router } = require("express");
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const genresRoute = require("./genres.js");
const groceriesRoute = require("./groceries.js");
const grocerieRoute = require("./grocerie.js");
const moviesRoute = require("./movies.js");
const movieRoute = require("./movie.js");
const upcomingRoute = require("./upcoming.js");
const topRatedRoute = require("./top_rated.js");
const authRoute = require("./auth.js");
const orderRoute = require("./order.js");
const productRoute = require("./product.js");
const userRoute = require("./user");
const mercadopagoRoute = require("./mercadopago.js");
const availablesRoute = require("./availables.js");
const availableRoute = require("./available.js")
const routeReview = require("./review.js");


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ------ Ejemplo de req: http://localhost:3001/api/movies ------- //

router.use("/user", authRoute);
router.use("/genres", genresRoute);
router.use("/groceries", groceriesRoute);
router.use("/grocerie", grocerieRoute);
router.use("/movies", moviesRoute);
router.use("/movie", movieRoute);
router.use("/upcoming", upcomingRoute);
router.use("/top_rated", topRatedRoute);
router.use("/order", orderRoute);
router.use("/product", productRoute);
router.use("/userTicket", userRoute);
router.use("/mercadopago", mercadopagoRoute);
router.use("/availables", availablesRoute);
router.use("/available", availableRoute)
router.use('/addReview', routeReview);

module.exports = router;
