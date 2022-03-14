require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const BASE_URL = "https://api.themoviedb.org/3";
const { Genre } = require("../db");

const getGenres = async () => {
    try{
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
        });

        const allGenresFound = await Genre.findAll();
        // console.log("All genres found: ", allGenresFound);

        return allGenresFound;   
    }
    catch(e){
        return e;
    }
}

module.exports = { getGenres };