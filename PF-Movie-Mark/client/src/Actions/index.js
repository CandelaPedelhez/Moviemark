import axios from "axios";
const { API_KEY } = process.env;

export function getMovies() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/api/movies");
    return dispatch({
      type: "GET_MOVIES",
      payload: json.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/api/genres");
    return dispatch({
      type: "GET_GENRES",
      payload: json.data,
    });
  };
}

export function getGroceries() {
  return async function (dispatch) {
    //hacer un BASE_URL
    let json = await axios.get("http://localhost:3001/api/groceries");
    return dispatch({
      type: "GET_GROCERIES",
      payload: json.data,
    });
  };
}

export function getMovieByTitle(title) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        "http://localhost:3001/api/movies?title=" + title
      );
      return dispatch({ type: "GET_TITLE_MOVIE", payload: json.data });
    } catch (error) {
      //console.log(error.message);
      alert("Sorry, not Movie found with that title");
    }
  };
}

export function filterMovieByGenre(genre) {
  return { type: "FILTER_BY_GENRE", genre };
}

export function getUpcoming() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/api/upcoming");
    return dispatch({
      type: "GET_UPCOMING",
      payload: json.data,
    });
  };
}

export function getTopRated() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/api/top_rated");
    return dispatch({
      type: "GET_TOP_RATED",
      payload: json.data,
    });
  };
}
