/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListMovieAdminAction,
  deleteMovieAdminAction,
} from "../../../Redux/action/adminAction/listMovie.action.js";
import ModalAddCalendar from "./modalAddCalendar";
import ModalUpdateMovie from "./modalUpdateMovie";
import format from "date-format";
import ModalAddMovie from "./modalAddMovie";


export default function ListMovieAdmin() {
  const [state, setstate] = useState({ pageCurrent: 1 })
  const [movie, setMovie] = useState(null)

  const dispatch = useDispatch();
  const listMovie = useSelector(
    (state) => state.listMovieAdminReducer.listMovieAdmin
  );
  const user = useSelector(state => state.signInReducer.userSignIn)
  const keyword = useSelector(state => state.listMovieAdminReducer.keyword)
  useEffect(() => {
    dispatch(getListMovieAdminAction(state.pageCurrent));
  }, [state.pageCurrent]);

  // --------- renderListMovie ---------
  const renderListMovie = () => {
    return listMovie?.filter(item => item.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) !== -1).map((movie, index) => {
      return (
        <tr key={movie.maPhim}>
          <td >{movie.maPhim}</td>
          <td>{movie.tenPhim}</td>
          <td>{movie.biDanh}</td>
          <td>
            <img
              style={{ width: "70px", height: "90px" }}
              src={movie.hinhAnh}
              alt={movie.hinhAnh}
            />
          </td>
          <td className="abca">{movie.trailer}</td>
          <td className="abc">
            <div className="text__description--ellipse">{movie.moTa}</div></td>
          <td width="10%">{format(
            "dd-MM-yyy",
            new Date(movie.ngayKhoiChieu)
          )}</td>
          <td>{movie.danhGia}</td>
          <td>
            <div className="action_movie">
              <i
                className="fa fa-edit"
                data-toggle="modal"
                data-target="#myModal3"
                onClick={() => { setMovie(movie) }}
              >
              </i>

              <i
                onClick={() => handleDeleteMovie(movie.maPhim, state.pageCurrent, user)}
                className="fa fa-trash-alt mx-2"
              >
              </i>
              <i data-toggle="modal"
                data-target="#myModal4"
                className="far fa-calendar-plus"
                onClick={() => dispatch({ type: "GET_CODE_MOVIE", payload: movie.maPhim })}></i>
            </div>
          </td>
        </tr>
      )
    });
  };

  // --------- panigation ---------
  const handleClickNext = () => {
    let tong = state.pageCurrent;
    setstate({
      pageCurrent: (tong += 1),
    });
  };

  const handleClickPrev = () => {
    let tong = state.pageCurrent;
    setstate({
      pageCurrent: (tong -= 1),
    });
  };


  // --------- deleteMovie ---------
  const handleDeleteMovie = (maPhim, pageCurrent, user) => {
    dispatch(deleteMovieAdminAction(maPhim, pageCurrent, user));
  };


  const handleChangeKeyWordMovie = (e) => {
    dispatch({ type: "CHANGE_KEYWORD_MOVIE", payload: e.target.value })
  }

  return (
    <div className="movieTable">
      <div className="d-flex justify-content-between">
        <input
          className="form-control"
          style={{
            outline: "none",
            padding: "8px",
            width: "35%",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="tìm kiếm"
          name="userSearchMovie"
          onChange={handleChangeKeyWordMovie}
        />
        <button
          type="button"
          data-toggle="modal"
          data-target="#myModal2"
          className="btn btn-success"
        >
          Thêm phim
      </button>
      </div>
      <div className="table-responsive">
        <table className="table table-hover border">
          <thead className="bg-dark text-white" border="1">
            <tr>
              <th>Mã phim</th>
              <th>Tên phim</th>
              <th>Bí danh</th>
              <th>Hình ảnh</th>
              <th>Trailer</th>
              <th>Mô tả</th>
              <th>Ngày khởi chiếu</th>
              <th>Đánh giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{renderListMovie()}</tbody>
        </table>
      </div>

      <ul className="pagination">
        {state.pageCurrent > 1 ? (
          <li className="page-item">
            <a onClick={() => handleClickPrev()} className="page-link">
              Previous
            </a>
          </li>
        ) : (
          <li className="page-item disabled">
            <a className="page-link">
              Previous
            </a>
          </li>
        )}

        <li className="page-item">
          <a className="page-link">{state.pageCurrent}</a>
        </li>
        <li className="page-item">
          <a
            onClick={() => {
              handleClickNext();
            }}
            className="page-link"
          >
            Next
          </a>
        </li>
      </ul>

      {movie ? <ModalUpdateMovie pageCurrent={state.pageCurrent} movieEdit={movie} /> : ""}
      <ModalAddCalendar />
      <ModalAddMovie pageCurrent={state.pageCurrent} />
    </div>
  );
}
