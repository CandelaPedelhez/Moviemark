import axios from "axios";
//const { API_KEY } = process.env;

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

export function getDetails(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/api/movies/" + payload);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
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

export function getUpcomingForId(payload) {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/api/upcoming/"+payload);
    return dispatch({
      type: "GET_UPCOMING_ID",
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

export function getTopRatedForId(payload) {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/api/top_rated/"+payload);
    return dispatch({
      type: "GET_TOP_RATED_ID",
      payload: json.data,
    });
  };
}

export function orderBy(payload) {
  return { type: "ORDER_BY", payload };
}

export function getReceipt(payload){
  return async function(dispatch){
      try{
          var json = await axios.get("http://localhost:3001/myReceipts/" + payload)
          return dispatch({
              type: "GET_RECEIPT",
              payload: json.data
          })
      } catch(e){
          console.log(e)
      }
  }
}

export function getMyReceipts(){
  return async function(dispatch){
      var json = await axios.get("http://localhost:3001/myReceipts")
      return dispatch({
          type: "GET_MY_RECEIPTS",
          payload: json.data 
      })
  }
}

export function getAvailables(){
  return async function(dispatch){
      var json = await axios.get("http://localhost:3001/availables")
      return dispatch({
          type: "GET_AVAILABLES",
          payload: json.data 
      })
  }
}