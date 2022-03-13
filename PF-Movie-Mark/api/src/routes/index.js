const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const genresRoute = require("./genres.js");
const groceriesRoute = require("./groceries.js");
const moviesRoute = require("./movies.js");
const upcomingRoute = require("./upcoming.js");
const topRatedRoute = require("./top_rated.js");
const authRoute = require("./auth.js");
const orderRoute = require("./order");
const productRoute = require("./product");
// const userRoute = require('./user');
const mercadopagoRoute = require("./mercadopago");
const availablesRoute = require("./availables.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ------ Ejemplo de req: http://localhost:3001/api/movies ------- //
router.use("/user", authRoute);
router.use("/genres", genresRoute);
router.use("/groceries", groceriesRoute);
router.use("/movies", moviesRoute);
router.use("/upcoming", upcomingRoute);
router.use("/top_rated", topRatedRoute);
router.use("/order", orderRoute);
router.use("/product", productRoute);
// router.use('/user', userRoute);
router.use("/mercadopago", mercadopagoRoute);
router.use("/availables", availablesRoute);

module.exports = router;
