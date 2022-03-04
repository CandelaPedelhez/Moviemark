require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require("express");

const router = Router();
const axios = require("axios");
const BASE_URL = "https://api.themoviedb.org/3";
const { Genre } = require("../db");

// -- Géneros de pelis

router.get('/', async (req, res, next) => {
    try {
        const response = await  axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
        .then((response) => {
            let allGenresApi = response.data.genres.map(genres => 
                ({
                    id:   genres.id,
                    name: genres.name
                }));
            allGenresApi.forEach(gen => {
                Genre.findOrCreate({
                    where: {
                        id:   gen.id,
                        name: gen.name
                    }
                });
            });

router.get("/", async (req, res, next) => {
  try {
    const response = await axios
      .get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
      .then((response) => {
        let allGenresApi = response.data.genres.map((genres) => ({
          name: genres.name,
        }));
        allGenresApi.forEach((gen) => {
          Genre.findOrCreate({
            where: {
              name: gen.name,
            },
          });
        });
        true;
      });

    const allGenresFound = await Genre.findAll();
    // console.log("All genres found: ", allGenresFound);

    return res.status(200).send(allGenresFound);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
