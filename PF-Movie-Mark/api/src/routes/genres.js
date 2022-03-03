require("dotenv").config();
const { API_KEY } = process.env;
// const { API } = process.env;

const { Router } = require('express');
const router = Router();
const axios = require("axios");
const BASE_URL = "https://api.themoviedb.org/3";
const { Genre } = require("../db");

//Obtengo géneros de pelis:

router.get('/', async (req, res, next) => {
    try {
        const response = await  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        // const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=55a8fa4c6d88b26c1c9e150c83aa784e")
        .then((response) => {
            let allGenresApi = response.data.genres.map(genres => ({
            id: genres.id,
            name: genres.name
            }));
        allGenresApi.forEach(gen => {
            Genre.findOrCreate({
                where: {
                    id: gen.id,
                    name: gen.name
                }
            });
        });true
        });

        const allGenresFound = await Genre.findAll();
        console.log("allGenresFound: ", allGenresFound);

        return res.status(200).send(allGenresFound); 
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }

});

module.exports = router;