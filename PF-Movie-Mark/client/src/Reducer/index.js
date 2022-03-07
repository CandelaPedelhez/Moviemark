const initialState = {
  movies: [],
  allMovies: [],
  genres: [],
  groceries: [],
  upcoming: [],
  topMovies: [],
  details: [],
  topRated: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload,
        allMovies: action.payload,
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
      let sortedMovies;
      switch (action.payload) {
        case "Asc":
          sortedMovies = state.movies.sort(function (a, b) {
            if (a.title > b.title) {
              return 1;
            }
            if (b.title > a.title) {
              return -1;
            }
            return 0;
          });
          break;
        case "Desc":
          sortedMovies = state.movies.sort(function (a, b) {
            if (a.title > b.title) {
              return -1;
            }
            if (b.title > a.title) {
              return 1;
            }
            return 0;
          });
          break;
        default:
          return (sortedMovies = state.movies);
      }
      return { ...state, movies: sortedMovies };
    case "GET_GROCERIES":
      return { ...state, groceries: action.payload };
    case "GET_UPCOMING":
      return {
        ...state,
        upcoming: action.payload,
      };
    case "GET_TOP_RATED":
      return {
        ...state,
        topRated: action.payload,
      };

    default:
      return state;
  }
}
