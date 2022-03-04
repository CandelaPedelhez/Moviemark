const {Router} = require("express");
const router =  Router();
const {Movie} = require("../db");

const {getUpcoming} = require('../controllers/upcoming');


// -- All pelis
router.get('/', async (req, res) => {
    try {
    let allMovies = await getUpcoming();
    return res.status(200).send(allMovies)
} catch (error) {
    console.log(error.message);
}
});

module.exports = router;