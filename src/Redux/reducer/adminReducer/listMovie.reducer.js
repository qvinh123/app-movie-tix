import {
  GET_LIST_MOVIE_ADMIN, GET_CODE_MOVIE
} from "../../constants/adminConstants/listMovie.constant";
const initialState = {
  listMovieAdmin: [],
  codeMovie: "",
  keyword: ""
};
export const listMovieAdminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_MOVIE_ADMIN: {
      return { ...state, listMovieAdmin: payload.items };
    }
    case GET_CODE_MOVIE: {
      return { ...state, codeMovie: payload }
    }
    case "CHANGE_KEYWORD_MOVIE": {
      return { ...state, keyword: payload }
    }
    default:
      return state;
  }
};
