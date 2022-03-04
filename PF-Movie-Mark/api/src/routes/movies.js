<<<<<<< HEAD
const { Router } = require('express');
const router = Router();
const { getMovies } = require('../controllers/movies');

router.get('/', getMovies);


module.exports = router
=======
const {Router} = require("express");
const router =  Router();
const {Movie} = require("../db");

const {getMovies} = require('../controllers/movies');


// -- All pelis
router.get('/', async (req, res) => {
    try {
    let allMovies = await getMovies();
    return res.status(200).send(allMovies)
} catch (error) {
    console.log(error.message);
}
});

module.exports = router;
>>>>>>> 93ed76cdd9305e109f0ccf81bc34299ea5cf23c9
