const initialState = {
  movies: [],
  allMovies: [],
  genres: [],
  groceries: [],
  upcoming: [],
  topMovies: [],
  details: [],
  topRated: [],
  forslider: [],
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
      let allMovies = state.allMovies;
      let genreFilter =
        action.payload === "All"
          ? allMovies
          : allMovies.filter((e) =>
              e.genres.find((el) => el.name === action.payload)
            );
      if (genreFilter.length <= 0) {
        alert("Sorry, no Movie found with this genre");
        genreFilter = allMovies;
      }
      return {
        ...state,
        movies: genreFilter,
      };
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
    default:
      return state;
  }
}
