const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
<<<<<<< HEAD
const movies = require('./movies');
=======
const genresRoute = require('./genres.js');
const groceriesRoute = require('./groceries.js');
const moviesRoute = require('./movies.js');
>>>>>>> 93ed76cdd9305e109f0ccf81bc34299ea5cf23c9

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

<<<<<<< HEAD
router.use('/movies', movies);
=======
// ------ Ejemplo de req: http://localhost:3001/api/movies ------- //
router.use('/genres', genresRoute);
router.use('/groceries', groceriesRoute);
router.use('/movies', moviesRoute);
>>>>>>> 93ed76cdd9305e109f0ccf81bc34299ea5cf23c9

module.exports = router;
