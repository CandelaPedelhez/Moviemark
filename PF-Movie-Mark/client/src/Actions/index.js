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

export function filterMovieByGenre(payload) {
  return async function (dispatch) {
    let aux = await axios.get("http://localhost:3001/api/movies/filter/" + payload);
    return dispatch({
      type: "FILTER_BY_GENRE",
      payload: aux.data,
    })
  }
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
    let json = await axios.get("http://localhost:3001/api/upcoming/" + payload);
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
    let json = await axios.get("http://localhost:3001/api/top_rated/" + payload);
    return dispatch({
      type: "GET_TOP_RATED_ID",
      payload: json.data,
    });
  };
}

export function orderBy(payload) {
  return { type: "ORDER_BY", payload };
}


export function loginUser(payload) {
  return async function (dispatch) {
    let req = await axios.post("http://localhost:3001/api/user/signIn/", payload)
    return dispatch({
      type: "LOGIN_USER",
      payload: req.data
    })
  }
}

export function logoutUser() {
  return async function (dispatch) {
    return dispatch({
      type: "LOG_OUT_USER"
    })
  }
}

export function createUser(payload) {
  return async function (dispatch) {
    let req = await axios.post("http://localhost:3001/api/user/signUp", payload)
    return dispatch({
      type: "CREATE_USER",
      payload: req.data,
    })
  }
}

export function sendMail(payload) {
  return async function (dispatch) {
    let req = await axios.post("http://localhost:3001/api/user/forgot", payload)
    return dispatch({
      type: "EMAIL_USER",
      payload: req.data,
    })
  }
}

export function sendToken(payload) {
  return async function (dispatch) {
    let req = await axios.post("http://localhost:3001/api/user/reset", payload)
    return dispatch({
      type: "TOKEN_USER",
      payload: req.data,
    })
  }
}

export function changeData(id, payload) {
  return async function (dispatch) {
    let req = await axios.post("http://localhost:3001/api/user/" + id, payload)
    return dispatch({
      type: "CHANGE_DATA",
      payload: req.data
    })
  }
}

export function getReceipt(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/ticket/" + payload)
      return dispatch({
        type: "GET_RECEIPT",
        payload: json.data
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export function getMyReceipts(payload) {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/user/" + payload)
    return dispatch({
      type: "GET_MY_RECEIPTS",
      payload: json.data
    })
  }
}

export function getAvailables() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/availables")
    return dispatch({
      type: "GET_AVAILABLES",
      payload: json.data
    })
  }
}

//Admin
export function getAllUsers(){
  return async function (dispatch){
    var json = await axios.get("http://localhost:3001/api/user/")
    return dispatch({
      type: "GET_ALL_USERS",
      payload: json.data
    })
  }
}

export function getUsers(){
  return async function (dispatch){
    var json = await axios.get("http://localhost:3001/api/user/users")
    return dispatch({
      type: "GET_USERS",
      payload: json.data
    })
  }
}

export function getAdmins(){
  return async function (dispatch){
    var json = await axios.get("http://localhost:3001/api/user/admins")
    return dispatch({
      type: "GET_ADMINS",
      payload: json.data
    })
  }
}

export function makeOrQuitAdmin(payload){
  return async function (dispatch){
    let obj={role:payload.role}
    var json = await axios.put("http://localhost:3001/api/user/roleadmin/"+payload.id,obj)
    console.log(json);
    return dispatch({
      type: "MAKE_ADMIN",
      payload: json.data
    })
  }
}

export function deleteUser(payload){
  return async function (dispatch){
    var json = await axios.delete("http://localhost:3001/api/user/"+payload);
    return dispatch({
      type: "DELETE_USER",
      payload: json.data
    })
  }
}

export function postFilm(payload){
  return async function (dispatch){
    let json = await axios.post("http://localhost:3001/api/movie/",payload)
    return dispatch({
        type: "POST_FILM",
        payload: json.data
    })
  }
}