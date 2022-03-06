const {Router} = require("express");
const router =  Router();
const {Movie} = require("../db");

const {getTopRated} = require('../controllers/top_rated');


// -- All pelis
router.get('/', async (req, res) => {
    try {
    let allMovies = await getTopRated();
    console.log(allMovies);
    return res.status(200).send(allMovies)
} catch (error) {
    console.log(error.message);
}
});

module.exports = router;