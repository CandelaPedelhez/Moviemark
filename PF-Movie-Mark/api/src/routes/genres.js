require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require("axios");
const BASE_URL = "https://api.themoviedb.org/3";
const { Genre } = require("../db");
const { getGenres } = require("../controllers/genres");

// -- Géneros de pelis
router.get('/', async (req, res, next) => {
    try {
        let aux = await getGenres()
        return res.status(200).send(aux); 
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }

});

module.exports = router;