import axios from "axios";

export function getMovies() {
  return async function (dispatch) {
    let json = await axios.get("");
    return dispatch({
      type: "GET_MOVIES",
      payload: json.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    let json = await axios.get("");
    return dispatch({
      type: "GET_GENRES",
      payload: json.data,
    });
  };
}

export function getGroceries() {
  return async function (dispatch) {
    let json = await axios.get("");
    return dispatch({
      type: "GET_GROCERIES",
      payload: json.data,
    });
  };
}

export function getMovieByTitle(title) {
  return async function (dispatch) {
    try {
      let json = await axios.get("" + title);
      return dispatch({ type: "GET_TITLE_MOVIE", payload: json.data });
    } catch (error) {
      console.log(error.message);
      alert("Sorry, not Movie found with that title");
    }
  };
}

export function filterMovieByGenre(genre) {
  //console.log(payload);
  return { type: "FILTER_BY_GENRE", genre };
}
