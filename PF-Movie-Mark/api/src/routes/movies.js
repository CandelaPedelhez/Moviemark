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