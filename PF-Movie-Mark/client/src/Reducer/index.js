const initialState = {
  movies: [],
  allMovies: [],
  genres: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "GET_TITLE_MOVIE":
      return { ...state, movies: action.payload };
    case "GET_GENRES":
      return { ...state, genres: action.payload };
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

    default:
      return state;
  }
}
