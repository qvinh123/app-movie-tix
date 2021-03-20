/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import format from "date-format";
import listCinemaSystem from "../../assets/data/listCinemaSystem.json"
import { getShowTimeCinemAction } from "../../Redux/action/mainAction/cinema.action"

export default function DetailCinema() {
  const user = useSelector(state => state.signInReducer.userSignIn)
  const dispatch = useDispatch();
  const { cinemaCode } = useParams();
  const { cinemaSystemCode } = useParams();

  const showTimeCienma = useSelector(
    (state) => state.cinemaReducer.listShowTimeCinema
  );
  useEffect(() => {
    dispatch(getShowTimeCinemAction(cinemaCode))
  }, []);

  const renderCinemaSystem = () => {
    return showTimeCienma?.map((cinemaSystem) => {
      let { maHeThongRap } = cinemaSystem;
      return cinemaSystem.lstCumRap.map((cinemaSystem, index) => {
        let opacity = {};
        if (cinemaSystemCode === cinemaSystem.maCumRap) opacity = { opacity: 1 };
        return (
          <NavLink style={{ textDecoration: "none" }} to={`/detailCinema/${maHeThongRap}/${cinemaSystem.maCumRap}`}>
            <div style={opacity} key={index} className="cinema_item d-flex">
              <div className="cinema_info">
                <h4>{cinemaSystem.tenCumRap}</h4>
                <p className="mb-1 d-none d-md-block">{cinemaSystem.diaChi}</p>
              </div>
            </div>
          </NavLink>
        );
      });
    });
  };

  const renderShowTimeCinema = () => {
    return showTimeCienma?.map((time) => {
      return time.lstCumRap
        .filter((item) => item.maCumRap === cinemaSystemCode)
        .map((listCumRap) => {
          return listCumRap.danhSachPhim.map((phim, index) => {
            return (
              <div key={index} className="wrapMovie">
                <div className="wrapInfo d-flex align-items-center">
                  <div style={{ marginRight: "10px" }}>
                    <img src={phim.hinhAnh} alt="true" />
                  </div>
                  <div className="info">
                    <span className="ageType">C16</span>
                    <span>{phim.tenPhim}</span>
                    <p className="mt-1">95 phút - TIX 7.2 - IMDb 0</p>
                  </div>
                </div>
                <div className="wrapSession">
                  <div className="listTypeTime">
                    <h4>2D Digital</h4>

                    {phim.lstLichChieuTheoPhim.map((lich, index) => {
                      return (
                        user ? <NavLink to={`/booking/${lich.maLichChieu}`}>
                          <span key={index}>
                            {format(
                              "dd-MM-yyy | hh:mm",
                              new Date(lich.ngayChieuGioChieu)
                            )}
                          </span>
                        </NavLink> : <NavLink to="/signIn">
                          <span key={index}>
                            {format(
                              "dd-MM-yyy | hh:mm",
                              new Date(lich.ngayChieuGioChieu)
                            )}
                          </span>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          });
        });
    });
  };

  const renderImgSystemCinema = () => {
    return listCinemaSystem.filter(item => item.maRap == cinemaCode).map((item) => {
      return item.danhSachCumRap.map((item, index) => {
        if (item.maCumRap == cinemaSystemCode) {
          return <div
            style={{ marginTop: "60px" }}
            id="detailMainTop"
            className="backgroundMain"
            key={index}
          >
            <div className="styleBlur">
              <img className="posterLandscapeFilm" src={item.hinhAnh} alt="true" />
            </div>
            <div className="styleGradient styleGradientCinema"></div>
            <div className="detailMainInfo row">
              <div className="container-fluid">
                <div className="col-12 col-lg-5 filmPosterTop">
                  <div className="posterMain">
                    <img src={item.hinhAnh} alt="true" />
                  </div>
                </div>
                <div className="col-12 col-lg-5 infoMain">
                  <div className="parentInfo2" >
                    <span className="detailMainInfo2" >
                      <span style={{ color: "#333" }} className="ng-binding">{item.tenCumRap}</span>
                    </span>
                  </div>

                  <div>
                    <span className="detailMainInfo1 ng-binding" style={{ color: "#333" }}>
                      {item.diaChi}
                    </span>
                    <br />
                  </div>
                  <button className="btnBuyTicketDetail">Mua vé</button>
                </div>
                <div className="col-2 circleStar d-none d-lg-block">
                  <div className="circleSum"></div>
                  <div id="circlePercent" className="c100 p74">
                    <div className="circleBorder"></div>
                    <span className="ng-binding">{item.danhGia}</span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                  </div>
                  <div id="starMain" className="star">
                    <img
                      className="smallStar"
                      src="http://tix.vn/app/assets/img/icons/star1.png"
                      alt="true"
                    />
                    <img
                      className="smallStar"
                      src="http://tix.vn/app/assets/img/icons/star1.png"
                      alt="true"
                    />
                    <img
                      className="smallStar"
                      src="http://tix.vn/app/assets/img/icons/star1.png"
                      alt="true"
                    />
                    <img
                      className="half"
                      src="http://tix.vn/app/assets/img/icons/star1.2.png"
                      style={{ width: "20px" }}
                      alt="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      })
    })
  }
  return (
    <>
      {renderImgSystemCinema()}
      <div id="detailMainBottom">
        <div className="container-fluid"  id="cinemaComplex">
          <div className="row mx-0">
            <div className="col-12 col-md-3 col-lg-4 cinemaSystem">
              <div className="cinemas">{renderCinemaSystem()}</div>
            </div>
            <div className="col-12 col-md-9 col-lg-8">
              <div className="listMovies">{renderShowTimeCinema()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
