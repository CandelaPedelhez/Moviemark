const axios = require('axios');
const { Movie } = require('../db');

const getMovies = async () => {
    let arrayMovies = [];
    try {
        for(let i=1000; i<= 10000; i++){
             arrayMovies.push( await axios.get(`https://api.themoviedb.org/3/movie/${i}?api_key=ac87aff06f218cb641cd64d92635da66`))
            // arrayMovies.push(movies.data)
        }
        



    } catch (e) {
        console.log(e);
    }
}

module.exports = { getMovies }