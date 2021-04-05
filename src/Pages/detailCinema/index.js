/* eslint-disable no-mixed-operators */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import format from "date-format";
import listCinemaSystem from "../../assets/data/listCinemaSystem.json"
import { getShowTimeCinemAction } from "../../Redux/action/mainAction/cinema.action"
import CommentDetail from "../../Pages/detail/commentDetail"
import Swal from 'sweetalert2'
import StarRatings from 'react-star-ratings';
import { comment } from "../../Redux/action/mainAction/infoUser.action"
import { mainService } from "../../service"


export default function DetailCinema() {
  const user = useSelector(state => state.signInReducer.userSignIn)
  const avatarImg = JSON.parse(localStorage.getItem("avatarImg"))
  const listComment = useSelector((state) => state?.signInReducer?.listComment);
  const showTimeCienma = useSelector(
    (state) => state.cinemaReducer.listShowTimeCinema
  );

  const dispatch = useDispatch();
  const { cinemaCode } = useParams();
  const { cinemaSystemCode } = useParams();

  const [showMore, setShowMore] = useState({ listComments: null, numberOfitemsShown: 3 })

  useEffect(() => {
    dispatch(getShowTimeCinemAction(cinemaCode))
    mainService.getCommentAPI()
      .then((res) => {
        dispatch(comment(res.data))
        setShowMore({ ...showMore, listComments: res.data })
      })
  }, []);

  const renderCinemaSystem = () => {
    return showTimeCienma?.map((cinemaSystem) => {
      let { maHeThongRap } = cinemaSystem;
      return cinemaSystem.lstCumRap.map((cinemaSystem, index) => {
        let opacity = {};
        if (cinemaSystemCode === cinemaSystem.maCumRap) {
          opacity = { opacity: 1 }
        };
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
                              "dd-MM-yyy",
                              new Date(lich.ngayChieuGioChieu)
                            )}
                          </span> ~ {format(
                              "hh:mm",
                              new Date(lich.ngayChieuGioChieu)
                            )}
                        </NavLink> : <NavLink to="/signIn">
                          <span key={index}>
                            {format(
                              "dd-MM-yyy",
                              new Date(lich.ngayChieuGioChieu)
                            )} 
                          </span> ~ {format(
                              "hh:mm",
                              new Date(lich.ngayChieuGioChieu)
                            )}
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
                  <a href="#detailMainBottom" className="btnBuyTicketDetail">Mua vé</a>
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


  const showMoreButton = () => {
    if (showMore.numberOfitemsShown + 2 <= showMore.listComments.reverse().length) {
      setShowMore({ ...showMore, numberOfitemsShown: showMore.numberOfitemsShown + 2 })
    } else {
      setShowMore({ ...showMore, numberOfitemsShown: showMore.listComments.length })
    }
  }

  const renderListComment = () => {
    return listComment?.reverse().filter(comment => comment.maCumRap == cinemaSystemCode).slice(0, showMore.numberOfitemsShown).map((comment, index) => {
      return <div key={index} className="reviewerContain detailMainStyle ">
        <div className="dadCommentReviewer">
          <div className="row dadMainInfo">
            <div className="infoReviewer">
              <div className="infoReviewerIcon">
                <img src={user && avatarImg || "https://tix.vn/app/assets/img/avatar.png"} alt="true" />
              </div>
              <div className="infoReviewerName">
                <div style={{ fontWeight: 500 }}>{comment.taiKhoan}</div>
                <p className="infoReviewerTime ">{comment.ngayBinhLuan}</p>
              </div>
            </div>
            <div className="infoStar">
              <div className="core">
                <p className="mb-0">{comment.rating * 2}</p>
              </div>
              <div className="row star">
                <StarRatings
                  starEmptyColor="#fb4226"
                  numberOfStars={comment.rating}
                  starDimension="10px"
                  starSpacing="0"
                />
              </div>
            </div>
          </div>
          <div className="row dadMainComment">
            <div className="more mainComment">{comment.comment}</div>
          </div>
        </div>
      </div>
    })
  }

  return (
    <>
      {renderImgSystemCinema()}
      <div id="detailMainBottom">
        <ul className="nav nav-pills justify-content-center align-items-center tab-detail">
          <li className="nav-item">
            <a
              className="nav-link active textCinema"
              data-toggle="pill"
              href="#lichchieu"
            >
              Lịch chiếu
                </a>
          </li>
          <li className="nav-item">
            <a className="nav-link textCinema" data-toggle="pill" href="#thongtin">
              Thông tin
                </a>
          </li>
          <li className="nav-item">
            <a className="nav-link textCinema" data-toggle="pill" href="#danhGia">
              Đánh giá
                </a>
          </li>
        </ul>
        <div className="container-fluid" id="cinemaComplex">
          <div className="tab-content">
            <div className="tab-pane container active" id="lichchieu">
              <div className="row">
                <div className="col-12 col-md-3 col-lg-4 cinemaSystem">
                  <div className="cinemas">{renderCinemaSystem()}</div>
                </div>
                <div className="col-12 col-md-9 col-lg-8">
                  <div className="listMovies">{renderShowTimeCinema()}</div>
                </div>
              </div>
            </div>
            <div className="tab-pane container fade thongTin-cinema" id="thongtin">
              <div className="row mx-0">
                {listCinemaSystem.filter(item => item.maRap == cinemaCode).map((item) => {
                  return item.danhSachCumRap.map((item, index) => {
                    if (item.maCumRap == cinemaSystemCode) {
                      return (
                        <>
                          <div className="col-md-6 col-12">
                            <div className="row leftInfoDetail">
                              <p className="contentTitle">Địa điểm</p>
                              <p className="contentInfo">{item.diaChi}</p>
                            </div>

                            <div className="row leftInfoDetail">
                              <p className="contentTitle">Điện thoại</p>
                              <p className="contentInfo">{item.dienThoai}</p>
                            </div>

                            <div className="row leftInfoDetail">
                              <p className="contentTitle">Email</p>
                              <p className="contentInfo">{item.email}</p>
                            </div>

                            <div className="row leftInfoDetail">
                              <p className="contentTitle">Phòng chiếu</p>
                              <p className="contentInfo">2D</p>
                            </div>

                            <div className="row leftInfoDetail">
                              <p className="contentTitle">Giờ mở cửa</p>
                              <p className="contentInfo">{item.gioMoCua}</p>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="row rowRightInfo">
                              <p className="contentTitle">Giới thiệu</p>
                              <p className="contentInfo">
                                {item.gioiThieu}
                              </p>
                            </div>
                          </div>
                        </>
                      )
                    }
                  })
                })}
              </div>
            </div>
            <div className="tab-pane fade" id="danhGia">
              <div id="detailReviewer">
                <div className="detailMainStyle">
                  <div onClick={() => user ? "" : Swal.fire({
                    icon: 'warning',
                    html: '<a href="/signIn">Vui lòng đăng nhập</a>',
                  })} className="col-sm-12 col-xs-12 dadInputReviewer newDesign" data-toggle="modal" data-target={user && "#modalCommnent"}>
                    <span className="imgReviewer">
                      <img
                        src={user && avatarImg || "https://tix.vn/app/assets/img/avatar.png"}
                        alt="true"
                      />
                    </span>
                    <input
                      className="inputReviwer"
                      type="text"
                      placeholder="Bạn nghĩ gì về phim này?"
                    />
                    <span className="imgreviewerstar">
                      <img
                        src="https://tix.vn/app/assets/img/icons/listStar.png"
                        alt="true"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div id="listComment">
                {renderListComment()}
                <div className="btn_showMore">
                  <button type="button" onClick={() => showMoreButton()} className="btn">Xem thêm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommentDetail cinemaSystemCode={cinemaSystemCode} />
    </>
  );
}
