import { GET_MOVIE, GET_MOVIE_2, MOVIE_DETAIL, GET_SHOWTIME_MOVIE } from "../../constants/mainConstants/movie.constant";

const initialState = {
  movieList: [],
  movieLis2: [],
  movieDetail: {},
  listCinemaAndShowTime: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE: {
      return { ...state, movieList: action.payload };
    }
    case GET_MOVIE_2: {
      return { ...state, movieList2: action.payload };
    }
    case MOVIE_DETAIL: {
      return { ...state, movieDetail: action.payload };
    }
    case GET_SHOWTIME_MOVIE: {
      return { ...state, listCinemaAndShowTime: action.payload };
    }
    default: {
      return state;
    }
  }
};
