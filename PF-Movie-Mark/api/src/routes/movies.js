const { Router } = require('express');
const router = Router();
const { getMovies } = require('../controllers/movies');

router.get('/', getMovies);


module.exports = router