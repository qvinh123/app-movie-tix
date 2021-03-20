import { GET_MOVIE, GET_MOVIE_2, MOVIE_DETAIL, GET_SHOWTIME_MOVIE } from "../../constants/mainConstants/movie.constant";
import { mainService } from "../../../service"

// -------- getListMovie1 --------
const getMovieList = (listMovie) => {
  return {
    type: GET_MOVIE,
    payload: listMovie,
  };
};

export const getMovieListAction = () => {
  return (dispatch) => {
    mainService.getMovieListAPI()
      .then((res) => {
        dispatch(getMovieList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



// -------- getListMovie2 --------
const getMovieList2 = (listMovie) => {
  return {
    type: GET_MOVIE_2,
    payload: listMovie,
  };
};

export const getMovieList2Action = () => {
  return (dispatch) => {
    mainService.getMovieListAPI2()
      .then((res) => {
        dispatch(getMovieList2(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



// -------- getMovieDetail --------
const getMovieDetail = (movieDetail) => ({
  type: MOVIE_DETAIL,
  payload: movieDetail,
});

export const getMovieDetailAction = (maPhim,loading) => {
  return (dispatch) => {
    mainService.getMovieDetailAPI(maPhim)
      .then((res) => {
        dispatch(getMovieDetail(res.data));
        loading()
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


// -------- getCinemaAndShowTimeMovie --------
const getCinemaAndShowTimeMovie = (data) => ({
  type: GET_SHOWTIME_MOVIE,
  payload: data
})

export const getCinemaAndShowTimeMovieAction = (maPhim) => {
  return (dispatch) => {
    mainService.getCinemaAndShowTimeMovieAPI(maPhim)
      .then((res) => {
        dispatch(getCinemaAndShowTimeMovie(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
