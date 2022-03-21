const { Router } = require("express");
const router = Router();
const { Movie, Genre } = require("../db");
const { getGenres } = require("../controllers/genres");
//const { moviesdb } = require("../controllers/moviesdb");

// -- All pelis

router.get("/", async (req, res) => {
  const { title } = req.query;

  let allMovies = await getMovies();
  if(allMovies.length<1) allMovies = await getMovies();

  try {
    if (title) {
      let movieByName = await allMoviesdb.filter(
        (nameMovie) => nameMovie.title.toLowerCase() === title.toLowerCase()
      );

      movieByName.length
        ? res.status(200).send(movieByName)
        : res.status(404).send("Sorry, Movie not found :(");
    } else {
      const result = await Movie.findAll();
      //console.log("el resultado del findAll:", result);
      res.status(200).send(result);
    }
  } catch (error) {
    console.log(error.message);
  }
});

/*router.get("/filter/:genre", async (req, res) => {
  try {
    const { genre } = req.params;
    //esto es lo de fran
    //let allgenres = await getGenres();
    /*let id = -1;
    for (let h = 0; h < allgenres.length; ++h) {
      if (genre === allgenres[h].name.toLowerCase()) {
        id = allgenres[h].id;
      }
    }
    if (id !== -1) {
      let filtered = [];
      for (let i = 0; i < allMovies.length; ++i) {
        for (let j = 0; j < allMovies[i].movGenres.length; ++j) {
          if (parseInt(allMovies[i].movGenres[j]) === id) {
            filtered.push(allMovies[i]);
          }
        }
      }
      res.status(200).send(filtered);*/

/*let result = await Movie.findAll();
    console.log("el de result mamita:", result);

    let asd = result.forEach((e) => {
      e.movie_genre.filter((g) => g.toLowerCase() === g.toLowerCase());
    })*/

//console.log("al del filter mamasita:", asd);
//res.status(200).send(asd);
/*else {
      let result = await Movie.findAll;
      res.status(200).send(result);
    }
  } catch (e) {
    console.log(e.message);
  }
});*/

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let all = await Movie.findAll();
  //console.log("este es el id de insomnia:", id);
  try {
    if (id) {
      let movieId = all.filter((founded) => founded.id.toString() === id);
      //console.log(movieId);
      //console.log("estas son las movies:", moviesdb);
      //console.log("esta es la movieId:", movieId);
      movieId.length
        ? res.status(200).send(movieId)
        : res.status(404).send({ msg: "Movie not found :(" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
