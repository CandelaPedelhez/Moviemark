import jwt from "jsonwebtoken";

export const initialState = {
  movies: [],
  allMovies: [],
  genres: [],
  groceries: [],
  upcoming: [],
  topMovies: [],
  details: [],
  topRated: [],
  forslider: [],
  users: [],
  user: {},
  receipt: [],
  myReceipts: [],
  availables: [],
  loggedIn: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload,
        allMovies: action.payload,
        details: [],
        forslider: action.payload,
      };
    case "GET_TITLE_MOVIE":
      //console.log(action.payload);
      return { ...state, movies: action.payload };
    case "GET_GENRES":
      return { ...state, genres: action.payload };
    case "GET_DETAILS":
      return { ...state, details: action.payload };
    case "FILTER_BY_GENRE":
      return { ...state, movies: action.payload };
    case "ORDER_BY":
      let aux = [...state.movies];
      let sortedMovies =
        action.payload === "A-Z"
          ? aux.sort(function (a, b) {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
            }
            return 0;
          })
          : aux.sort(function (a, b) {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        movies: action.payload === "default" ? state.allMovies : sortedMovies,
      };
    case "GET_GROCERIES":
      return { ...state, groceries: action.payload };
    case "GET_UPCOMING":
      return {
        ...state,
        upcoming: action.payload,
      };
    case "GET_TOP_RATED_ID":
      return { ...state, details: action.payload };
    case "GET_UPCOMING_ID":
      return { ...state, details: action.payload };
    case "GET_TOP_RATED":
      return {
        ...state,
        topRated: action.payload,
      };

    case "LOGIN_USER":
      if (action.payload.token) {
        const token = action.payload.token;
        const useraux = jwt.decode(token);
        const obj = useraux.user;
        const user = {
          id: obj.id,
          email: obj.email,
          name: obj.name,
          lastName: obj.lastName,
        }
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return { ...state, user: user, loggedIn: true }
      }
      else { return { ...state, user: {}, loggedIn: false } }
    case "LOG_OUT_USER":
      localStorage.removeItem('token')
      localStorage.removeItem('user');
      return { ...state, user: {}, loggedIn: false }

    case "CREATE_USER":
      return { ...state, users: state.users.concat(action.payload) }
    case "EMAIL_USER":
      return { ...state }
    case "TOKEN_USER":
      return { ...state }
    case "CHANGE_DATA":
      let usr = localStorage.getItem("user");
      let aux2 = JSON.parse(usr);
      aux2.name = action.payload.name;
      localStorage.setItem('user', JSON.stringify(aux2));
      return { ...state }
    case "GET_RECEIPT":
      return {
        ...state,
        receipt: action.payload,
      }
    case "GET_MY_RECEIPTS":
      return {
        ...state,
        myReceipts: action.payload,
      }
      case "GET_AVAILABLES":
      return {
        ...state,
        availables: action.payload,
      }
    default:
      return state;
  }
}
