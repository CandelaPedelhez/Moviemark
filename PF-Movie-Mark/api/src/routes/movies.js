const { Router } = require("express");
const router = Router();
const { Movie, Genre} = require("../db");
const { getMovies } = require("../controllers/movies");
const { getGenres } = require("../controllers/genres");

// -- All pelis

router.get("/", async (req, res) => {
  const { title } = req.query;
  let allMovies = await getMovies();
  if(allMovies.length<1) allMovies = await getMovies();
  try {
    if (title) {
      let movieByName = await allMovies.filter(
        (nameMovie) => nameMovie.title.toLowerCase() === title.toLowerCase()
      );

      movieByName.length
        ? res.status(200).send(movieByName)
        : res.status(404).send("Sorry, Movie not found :(");
      } 
      res.status(200).send(allMovies);
  
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/filter/:genre", async (req, res) => {
  try {
    const { genre } = req.params;
    let allgenres = await getGenres();
    let allMovies = await getMovies();
    let id = -1;
    for (let h = 0; h < allgenres.length; ++h) {
      if(genre===allgenres[h].name.toLowerCase()){
        id=allgenres[h].id;
      }
    }
    if(id!==-1){
      let filtered = [];
      for (let i = 0; i < allMovies.length; ++i) {
        for (let j = 0; j < allMovies[i].movGenres.length; ++j) {
          if (parseInt(allMovies[i].movGenres[j]) === id) {
            filtered.push(allMovies[i]);
          }
        }
      }
      res.status(200).send(filtered);
    } else {
      res.status(200).send(allMovies);
    }
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  let movieId = await getMovies();
  try {
    if (id) {
      //console.log(id);
      let movId = movieId.filter(
        (movieFound) => movieFound.id.toString() === id
      );
      movId.length
        ? res.status(200).send(movId)
        : res.status(404).send({ msg: "Movie not found :(" });
    }
  } catch (error) {
    console.log(error.message);
  }
}); //Cierre get /:id

module.exports = router;
