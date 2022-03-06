const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const genresRoute = require('./genres.js');
const groceriesRoute = require('./groceries.js');
const moviesRoute = require('./movies.js');
const upcomingRoute = require('./upcoming.js');
const topRatedRoute = require('./top_rated.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ------ Ejemplo de req: http://localhost:3001/api/movies ------- //

router.use('/genres', genresRoute);
router.use('/groceries', groceriesRoute);
router.use('/movies', moviesRoute);
router.use('/upcoming', upcomingRoute);
router.use('/top_rated', topRatedRoute);


module.exports = router;
