require("dotenv").config();
const { API_KEY } = process.env;
const axios = require('axios');
const BASE_URL = "https://api.themoviedb.org/3";

const getUpcoming = async () => {
    
    try {
    
        let movies = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
                let auxMovies = movies.data.results.map(movie => {
                    return {
                        id: movie.id,
                        title: movie.title,
                        description: movie.overview,
                        popularity: movie.popularity,
                        release_date: movie.release_date,
                        genres: movie.genre_ids,
                        languages: movie.original_language,
                        vote_average: movie.vote_average,
                        img: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                        price: 1000,
                    }
                    })
               
                
                return auxMovies;
     
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getUpcoming }