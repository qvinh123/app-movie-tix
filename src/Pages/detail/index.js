/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  getMovieDetailAction,
  getMovieListAction,
} from "../../Redux/action/mainAction/movie.action";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import format from "date-format";
import {
  getShowTimeCinemAction,
  getCinemaAction,
} from "../../Redux/action/mainAction/cinema.action";
import Loading from "../../Components/loading";
import ModalVideo from "react-modal-video"
import CommentDetail from "./commentDetail"
import { comment } from "../../Redux/action/mainAction/infoUser.action"
import StarRatings from 'react-star-ratings';
import { mainService } from "../../service";
import Swal from 'sweetalert2'
import { youtube_parser} from "../../validation"

export default function Detail() {
  const avatarImg = JSON.parse(localStorage.getItem("avatarImg"))
  const listCalendarCinema = useSelector(
    (state) => state?.cinemaReducer?.listShowTimeCinema
  );
  const listCinema = useSelector((state) => state?.cinemaReducer?.listCinema);
  const listMovie = useSelector((state) => state?.movieReducer?.movieList);
  const user = useSelector((state) => state?.signInReducer?.userSignIn);
  const listComment = useSelector((state) => state?.signInReducer?.listComment);
  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);
  const dispatch = useDispatch();

  const { maPhim } = useParams();

  const [state, setstate] = useState({
    maHeThongRap: "BHDStar",
  });

  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState({ listComments: null, numberOfitemsShown: 3 })

  useEffect(() => {
    dispatch(getMovieListAction());
    dispatch(
      getMovieDetailAction(maPhim, () => {
        setLoading(false);
      })
    );
    dispatch(getCinemaAction());
    mainService.getCommentAPI()
      .then((res) => {
        dispatch(comment(res.data))
        setShowMore({ ...showMore, listComments: res.data })
      })
  }, []);

  useEffect(() => {
    dispatch(getShowTimeCinemAction(state.maHeThongRap));
  }, [state.maHeThongRap]);

  const renderCinema = () => {
    return listCinema?.map((cinema, index) => {
      const { tenHeThongRap, logo } = cinema;
      let opacity = {};
      if (cinema.maHeThongRap == state.maHeThongRap) {
        opacity = { opacity: 1 };
      }
      return (
        <li key={index}>
          <a>
            <img
              style={opacity}
              onClick={() => setstate({ maHeThongRap: cinema.maHeThongRap })}
              src={logo}
              alt="cinema1"
            />
          </a>
          <span className="d-none d-md-block">{tenHeThongRap}</span>
        </li>
      );
    });
  };

  const renderCalendarCinema = () => {
    return listCalendarCinema?.map((cinema) => {
      return cinema.lstCumRap?.map((cumRap) => {
        const { tenCumRap, diaChi } = cumRap;
        return cumRap.danhSachPhim
          ?.filter((movies) => movies.maPhim == maPhim)
          .map((movie, index) => {
            return (
              <div key={index} className="wrapMovie">
                <div className="wrapInfo d-flex align-items-center">
                  <div className="info">
                    <span>{tenCumRap}</span>
                    <p className="mt-1">{diaChi}</p>
                  </div>
                </div>
                <div className="wrapSession">
                  <div className="listTypeTime">
                    <h4>2D Digital</h4>
                    {movie.lstLichChieuTheoPhim?.map((lichChieu, index) => {
                      const { ngayChieuGioChieu, maLichChieu } = lichChieu;
                      if (user) {
                        return (
                          <NavLink to={`/booking/${maLichChieu}`}>
                            <span key={index}>
                              {format(
                                "dd-MM-yyy | hh:mm",
                                new Date(ngayChieuGioChieu)
                              )}
                            </span>
                          </NavLink>
                        );
                      } else {
                        return (
                          <NavLink to={`/signIn`}>
                            <span key={index}>
                              {format(
                                "dd-MM-yyy | hh:mm",
                                new Date(ngayChieuGioChieu)
                              )}
                            </span>
                          </NavLink>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            );
          });
      });
    });
  };

  const showMoreButton = () => {
    if (showMore.numberOfitemsShown + 2 <= showMore.listComments.reverse().length) {
      setShowMore({ ...showMore, numberOfitemsShown: showMore.numberOfitemsShown + 2 })
    } else {
      setShowMore({ ...showMore, numberOfitemsShown: showMore.listComments.length })
    }
  }

  const renderListComment = () => {
    return listComment?.reverse().filter(comment => comment.maPhim == maPhim).slice(0, showMore.numberOfitemsShown).map((comment, index) => {
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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div
        id="detailMainTop"
        className="backgroundMain"
      >
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          autoplay
          videoId={youtube_parser(trailer)}
          onClose={() => setOpen(false)}
        />
        <div className="styleBlur">
          <img
            src={movieDetail.hinhAnh}
            className="posterLandscapeFilm"
            alt=""
          />
        </div>
        <div className="styleGradient styleGradientMovie"></div>
        <div className="detailMainInfo row">
          <div className="col-12 col-lg-5 filmPosterTop">
            <div className="posterMain">
              <img src={movieDetail.hinhAnh} alt="true" />
              <button
                className="playTrailerDetail"
                onClick={() => {
                  setOpen(true);
                  setTrailer(movieDetail.trailer);
                }}
              >
                <img
                  src="http://tix.vn/app/assets/img/icons/play-video.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-5 infoMain">
            <div>
              <span className="detailMainInfo1 ng-binding">
                {format("dd-MM-yyy", new Date(movieDetail.ngayKhoiChieu))}
              </span>
              <br />
            </div>

            <div className="parentInfo2">
              <span className="detailMainInfo2">
                <span className="ageType">C18</span>
                <span className="ng-binding">{movieDetail.tenPhim}</span>
              </span>
            </div>

            <div>
              <span className="detailMainInfo1 ng-binding">
                100 phút - 0 IMDb - 2D/Digital
                </span>
              <br />
            </div>
            {movieDetail.maNhom == "GP11" ? (
              ""
            ) : (
              <a href="#cinemaComplex" className="btnBuyTicketDetail">
                Mua vé
              </a>
            )}
          </div>
          <div className="col-2 circleStar d-none d-lg-block">
            <div className="circleSum"></div>
            <div id="circlePercent" className="c100 p74">
              <div className="circleBorder"></div>
              <span className="ng-binding">{movieDetail.danhGia}</span>
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
                alt=""
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

      {movieDetail.maNhom == "GP11" ? (
        ""
      ) : (
        <div id="detailMainBottom" className="container-fluid" style={{ backgroundColor: "#0a2029" }}>
          <ul className="nav nav-pills justify-content-center align-items-center tab-detail">
            <li className="nav-item">
              <a
                className="nav-link active textMovie"
                data-toggle="pill"
                href="#lichchieu"
              >
                Lịch chiếu
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link textMovie" data-toggle="pill" href="#thongtin">
                Thông tin
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link textMovie" data-toggle="pill" href="#danhGia">
                Đánh giá
                </a>
            </li>
          </ul>
          <div id="cinemaComplex">
            <div className="tab-content">
              <div className="tab-pane container active" id="lichchieu">
                <div className="row">
                  <div className="col-lg-4 col-md-3 col-12">
                    <ul className="listCinemas">{renderCinema()}</ul>
                  </div>

                  <div className="col-lg-8 col-12 col-md-9">
                    <div className="listMovies">{renderCalendarCinema()}</div>
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade thongTin-movie" id="thongtin">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="row leftInfoDetail">
                      <p className="contentTitle">Ngày công chiếu</p>
                      <p className="contentInfo">
                        {listMovie
                          .filter((movie) => movie.maPhim == maPhim)
                          .map((movie, index) => {
                            return (
                              <span key={index}>
                                {format(
                                  "dd.MM.yyyy",
                                  new Date(movie.ngayKhoiChieu)
                                )}
                              </span>
                            );
                          })}
                      </p>
                    </div>

                    <div className="row leftInfoDetail">
                      <p className="contentTitle">Đạo diễn</p>
                      <p className="contentInfo">Đang cập nhật</p>
                    </div>

                    <div className="row leftInfoDetail">
                      <p className="contentTitle">Diễn viên</p>
                      <p className="contentInfo">Đang cập nhật</p>
                    </div>

                    <div className="row leftInfoDetail">
                      <p className="contentTitle">Thể loại</p>
                      <p className="contentInfo">Đang cập nhật</p>
                    </div>

                    <div className="row leftInfoDetail">
                      <p className="contentTitle">Định dạng</p>
                      <p className="contentInfo">2D/Digital</p>
                    </div>

                    <div className="row leftInfoDetail">
                      <p className="contentTitle">Quốc gia SX</p>
                      <p className="contentInfo">Đang cập nhật</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="row rowRightInfo">
                      <p className="contentTitle">Nội dung</p>
                      <p className="contentInfo">
                        {listMovie
                          .filter((movie) => movie.maPhim == maPhim)
                          .map((movie, index) => {
                            return <span key={index}>{movie.moTa}</span>;
                          })}
                      </p>
                    </div>
                  </div>
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
      )}
      <CommentDetail maPhim={maPhim} />
    </>
  );
}
