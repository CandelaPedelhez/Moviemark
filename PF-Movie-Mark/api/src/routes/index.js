const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genresRoute = require('./genres.js');
const groceriesRoute = require('./groceries.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/genres', genresRoute);
router.use('/groceries', groceriesRoute);

module.exports = router;
