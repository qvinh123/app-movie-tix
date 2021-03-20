import { adminService } from "../../../service";
import Swal from 'sweetalert2'
import {
  GET_LIST_MOVIE_ADMIN,
} from "../../constants/adminConstants/listMovie.constant";

// -------- getListMovie --------
const getListMovieAdmin = (listMovie) => ({
  type: GET_LIST_MOVIE_ADMIN,
  payload: listMovie,
});

export const getListMovieAdminAction = (pageCurrent) => {
  return (dispatch) => {
    adminService.getListMovieAdminAPI(pageCurrent)
      .then((res) => {
        dispatch(getListMovieAdmin(res.data))
      }).then(() => {
        dispatch({ type: "HIDE_LOADING" })
      })
      .catch((err) => {
        console.log(err)
      })
  }
};


// -------- deleteMovie --------
export const deleteMovieAdminAction = (maPhim, pageCurrent, user) => {
  return (dispatch) => {
    adminService.deleteMovieAdminAPI(maPhim, user)
      .then((res) => {
        dispatch(getListMovieAdminAction(pageCurrent));
        Swal.fire({
          icon: 'success',
          text: 'Xóa thành công',
        })
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          text: err.response.data,
        })
      });
  };
};


// -------- addMovie --------
export const addMovieAdminAction = (movie, pageCurrent, user) => {
  return (dispatch) => {
    adminService.addMovieAdminAPI(movie, user)
      .then((res) => {
        dispatch(getListMovieAdminAction(pageCurrent));
        Swal.fire({
          icon: 'success',
          text: 'Thêm thành công',
        })
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          text: err.response.data,
        })
      });
  };
};


// -------- updateMovie --------
export const updateMovieAdminAction = (movieUpdate, pageCurrent, user) => {
  return (dispatch) => {
    adminService.updateMovieAdminAPI(movieUpdate, user)
      .then((res) => {
        dispatch(getListMovieAdminAction(pageCurrent));
        Swal.fire({
          icon: 'success',
          text: 'Cập nhật thành công',
        })
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          text: err.response.data,
        })
      });
  }
}


// -------- addCalendarMovie --------
export const addCalendarAction = (calendarMovie, user) => {
  return adminService.addCalendarAPI(calendarMovie, user)
    .then((res) => {
      Swal.fire({
        icon: 'success',
        text: 'Thêm thành công',
      })
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        text: err.response.data,
      })
    });
};
