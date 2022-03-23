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
  users: [], //all users and admins
  user: {}, //current user
  normalusers: [], //only users
  admins: [], //admins
  receipt: [],
  myReceipts: [],
  availables: [],
  reviews: [],
  loggedIn: false,
  userGoogleData: [],
  userCredentials: []
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
    //User
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
          role: obj.role,
        }
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return { ...state, user: user, loggedIn: true }

      }
      else { return { ...state, user: {}, loggedIn: false } }

    case "LOG_OUT_USER":
      localStorage.removeItem('token')
      localStorage.removeItem('user');
      localStorage.removeItem('cartProducts');
      return { ...state, user: {}, loggedIn: false }
    case "CREATE_USER":
      return { ...state };
    case "EMAIL_USER":
      return { ...state };
    case "TOKEN_USER":
      return { ...state };
    case "CHANGE_DATA":
      let usr = localStorage.getItem("user");
      let aux2 = JSON.parse(usr);
      aux2.name = action.payload.name;
      localStorage.setItem("user", JSON.stringify(aux2));
      return { ...state };
    case "GET_RECEIPT":
      return {
        ...state,
        receipt: action.payload,
      };
    case "GET_MY_RECEIPTS":
      return {
        ...state,
        myReceipts: action.payload,
      };
    case "GET_AVAILABLES":
      return {
        ...state,
        availables: action.payload,
      };
    //Admin
    case "MAKE_ADMIN":
      return { ...state };
    case "GET_ALL_USERS":
      return { ...state, users: action.payload };
    case "GET_USERS":
      return { ...state, normalusers: action.payload };
    case "GET_ADMINS":
      return { ...state, admins: action.payload };
    case "DELETE_USER":
      return { ...state };
    case "POST_FILM":
      return { ...state };
    case "POST_GROCERIE":
      return { ...state };
    case "GET_CREDENTIALS":
      return {
        ...state,
        userCredentials: action.payload
      }
    /* case "LOGIN_GOOGLE": 
    return {
      ...state,
      userGoogleData: [...state, userGoogleData, action.payload]
    } */
    case "NEWSLETTER":
      return {...state};
    case "POST_AVAILABLE":
      return { ...state };
    case "UPDATE_GROCERIE":
      return { ...state };
      case "DELETE_AVAILABLE":
    case "GET_REVIEWS":
      return { ...state, reviews: action.payload };
    case "POST_REVIEW":
    case "DELETE_AVAILABLE":
      return { ...state };
    case "REVOKE_ACCESS":
      return { ...state };
    default:
      return state;
  }
}
