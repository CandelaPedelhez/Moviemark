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
  isLogged:false,
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
      return {...state} 
    case "SET_USER":
      return {
        ...state, 
        user: { email: action.payload.email, id: action.payload.id, role: action.payload.role},
        isLogged:  true };
    case "CREATE_USER": 
      return {...state, users: state.users.concat(action.payload)}
    case "EMAIL_USER":
      return{...state}
    case "TOKEN_USER":
      return{...state}
    case "LOGOUT_USER":
      return{...state, isLogged:false, user:{}}
    default:
      return state;
  }
}
