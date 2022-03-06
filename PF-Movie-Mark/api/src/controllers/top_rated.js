require("dotenv").config();
const { API_KEY } = process.env;
const axios = require('axios');
const BASE_URL = "https://api.themoviedb.org/3";

const getTopRated = async () => {
    
    try {
    
        let movies = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
                let auxMovies = movies.data.results.map(movie => {
                    return {
                        name: movie.title,
                        img: 'https://image.tmdb.org/t/p/w500' + movie.poster_path                     
                    }
                    })
               
                
                return auxMovies;
     
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getTopRated }