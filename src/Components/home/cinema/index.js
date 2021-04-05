/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCinemaAction,
  getShowTimeCinemAction,
} from "../../../Redux/action/mainAction/cinema.action";
import { NavLink } from "react-router-dom"
import format from "date-format";

export default function Cinema() {
  const [maHeThongRap, setMaHeThongRap] = useState({ ma: "BHDStar" });
  const [maCum, setMaCumRap] = useState({
    ma: "",
  });

  const dispatch = useDispatch();

  const cinema = useSelector((state) => state.cinemaReducer.listCinema);
  const showTimeCienma = useSelector(
    (state) => state.cinemaReducer.listShowTimeCinema
  );

  useEffect(() => {
    dispatch(getCinemaAction());
  }, []);

  useEffect(() => {
    dispatch(getShowTimeCinemAction(maHeThongRap.ma));
    setMaCumRap({
      ma:
        maHeThongRap.ma === "BHDStar"
          ? "bhd-star-cineplex-pham-hung"
          : maHeThongRap.ma === "CGV"
            ? "cgv-aeon-binh-tan"
            : maHeThongRap.ma === "CineStar"
              ? "cns-quoc-thanh"
              : maHeThongRap.ma === "Galaxy"
                ? "glx-huynh-tan-phat"
                : maHeThongRap.ma === "LotteCinima"
                  ? "lotte-cantavil"
                  : maHeThongRap.ma === "MegaGS"
                    ? "megags-cao-thang"
                    : "",
    });
  }, [maHeThongRap.ma]);

  const renderCinema = () => {
    return cinema?.map((cinema, index) => {
      let opacity = {};
      if (cinema.maHeThongRap == maHeThongRap.ma) {
        opacity = { opacity: 1 };
      }
      return (
        <li key={index}>
          <a>
            <img
              style={opacity}
              onClick={() =>
                setMaHeThongRap({
                  ma: cinema.maHeThongRap,
                })
              }
              src={cinema.logo}
              alt={cinema.biDanh}
            />
          </a>
        </li>
      );
    });
  };

  const renderCinemaSystem = () => {
    return showTimeCienma?.map((cinemaSystem) => {
      let { maHeThongRap } = cinemaSystem
      return cinemaSystem.lstCumRap.map((cinemaSystem, index) => {
        let opacity = {};
        if (maCum.ma == cinemaSystem.maCumRap) {
          opacity = { opacity: 1 };
        }
        return (
          <div
            style={opacity}
            key={index}
            className="cinema_item d-flex"
            onClick={() =>
              setMaCumRap({
                ma: cinemaSystem.maCumRap,
              })
            }
          >
            <div className="cinema_info">
              <h4>{cinemaSystem.tenCumRap}</h4>
              <p className="mb-1">{cinemaSystem.diaChi}</p>
              <p>
                <NavLink to={`/detailCinema/${maHeThongRap}/${cinemaSystem.maCumRap}`} className="a">[chi tiết]</NavLink>
              </p>
            </div>
          </div>
        );
      })
    });
  };

  const renderShowTimeCinema = () => {
    return showTimeCienma?.map((time) => {
      return time.lstCumRap
        .filter((item) => item.maCumRap === maCum.ma)
        .map((listCumRap) => {
          return listCumRap.danhSachPhim.map((phim, index) => {
            return (
              <div key={index} className="wrapMovie">
                <div className="wrapInfo d-flex align-items-center">
                  <div>
                    <img src={phim.hinhAnh} alt="true" />
                  </div>
                  <div className="info">
                    <span className="ageType">C16</span>
                    <span className="ml-1">{phim.tenPhim}</span>
                    <p className="mt-1">95 phút - TIX 7.2 - IMDb 0</p>
                  </div>
                </div>
                <div className="wrapSession">
                  <div className="listTypeTime">
                    <h4>2D Digital</h4>

                    {phim.lstLichChieuTheoPhim.map((lich, index) => {
                      return (
                        <a key={index}>
                          <span>
                            {format(
                              "dd-MM-yyy",
                              new Date(lich.ngayChieuGioChieu)
                            )} 
                          </span> ~ {format(
                            "hh:mm",
                            new Date(lich.ngayChieuGioChieu)
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            )
          })
        })
    });
  };

  return (
    <div id="cinemaComplex" className="d-none d-md-block d-lg-block cinemaComplexAll">
      <div className="row">
        <div className="col-1">
          <ul className="listCinemas">{renderCinema()}</ul>
        </div>
        <div className="col-3 pr-0">
          <div className="cinemas">{renderCinemaSystem()}</div>
        </div>
        <div className="col-8">
          <div className="listMovies">
            {renderShowTimeCinema()}
          </div>
        </div>
      </div>
    </div>
  );
}
