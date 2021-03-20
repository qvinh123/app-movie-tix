/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getShowTimeCinemAction,} from "../../../Redux/action/mainAction/cinema.action";
import { addCalendarAction } from "../../../Redux/action/adminAction/listMovie.action"

export default function ModalAddCalendar() {
  const cinema = useSelector((state) => state.cinemaReducer.listCinema);
  const maPhim = useSelector(
    (state) => state.listMovieAdminReducer.codeMovie
  );
  const cinemaSystem = useSelector(
    (state) => state.cinemaReducer.listShowTimeCinema
  );
  const user = useSelector(state => state.signInReducer.userSignIn)

  const dispatch = useDispatch();
  const [state, setstate] = useState({
    maHeThongRap: "",
    maCumRap: "",
    maRap: "",
    ngayChieuGioChieu: "",
    giaVe: ""
  })

  const renderListCinema = () => {
    return cinema?.map((cinema, index) => {
      return <option key={index}>{cinema.maHeThongRap}</option>;
    });
  };

  const renderCinemaSystem = () => {
    return cinemaSystem?.filter(cinemaSystem => cinemaSystem.maHeThongRap === state.maHeThongRap).map((cinemaSystem) => {
      return cinemaSystem.lstCumRap.map((cinema, index) => {
        return <option key={index}>{cinema.maCumRap}</option>;
      })
    });
  };

  const renderMaRap = () => {
    return cinemaSystem
      ?.filter((cinema) => cinema.maHeThongRap === state.maHeThongRap)
      .map((cinema) => {
        return cinema.lstCumRap
          .filter((cinema) => cinema.maCumRap === state.maCumRap)
          .map((cinema) => {
            return cinema.danhSachPhim.map((cinema) => {
              return cinema.lstLichChieuTheoPhim.map((cinema, index) => {
                return <option key={index}>{cinema.maRap}</option>;
              });
            });
          });
      });
  };

  const changeCinema = (e) => {
    setstate({ ...state, maHeThongRap: e.target.value });
  };
  const changeCinemaSystem = (e) => {
    setstate({ ...state, maCumRap: e.target.value });
  };

  const changeCodeCinema = (e) => {
    setstate({ ...state, maRap: e.target.value });
  };

  const changeNgayChieuGioChieu = (e) => {
    setstate({ ...state, ngayChieuGioChieu: e.target.value });
  };

  const changePriceTicket = (e) => {
    setstate({ ...state, giaVe: +e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    addCalendarAction(
      {
        maPhim: maPhim,
        ngayChieuGioChieu: state.ngayChieuGioChieu,
        maRap: state.maRap,
        giaVe: state.giaVe
      }, user
    )
    setstate({
      maHeThongRap: "",
      maCumRap: "",
      maRap: "",
      ngayChieuGioChieu: "",
      giaVe: ""
    })
  }

  useEffect(() => {
    dispatch(getShowTimeCinemAction(state.maHeThongRap));
  }, [state.maHeThongRap]);

  return (
    <div className="modal" id="myModal4">
      <div className="modal-dialog" style={{ maxWidth: "800px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Thêm lịch chiếu</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="flex-form">
                <div style={{ width: "50%", padding: "15px" }}>
                  <select value={state.maHeThongRap} onChange={changeCinema} className="form-select select">
                    <option selected>Chọn hệ thống rạp</option>
                    {renderListCinema()}
                  </select>

                  <select value={state.maCumRap} onChange={changeCinemaSystem} className="form-select select">
                    <option selected>Chọn cụm rạp</option>
                    {renderCinemaSystem()}
                  </select>

                  <select value={state.maRap} onChange={changeCodeCinema} className="form-select select">
                    <option selected>Chọn mã rạp</option>
                    {renderMaRap()}
                  </select>

                  <select value={state.giaVe} onChange={changePriceTicket} className="form-select select">
                    <option selected>Giá vé</option>
                    <option value="75000">75.000</option>
                    <option value="90000">90.000</option>
                    <option value="200000">200.000</option>
                  </select>
                </div>

                <div style={{ width: "50%", padding: "15px" }}>
                  <div className="form-group mb-0">
                    <label>Mã phim</label>
                    <br />
                    <input value={maPhim} disabled type="text" />
                  </div>
                  <div className="form-group">
                    <label>Ngày chiếu giờ chiếu</label>
                    <br />
                    <input
                      onChange={changeNgayChieuGioChieu}
                      name="ngayChieuGioChieu"
                      type="text"
                      value={state.ngayChieuGioChieu}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="action_button">
                <button
                  className="btn btn-danger"
                >
                  Thêm
            </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
