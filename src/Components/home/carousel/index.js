/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import {getCinemaAndShowTimeMovieAction} from "../../../Redux/action/mainAction/movie.action"
import format from "date-format";
import { NavLink } from "react-router-dom";
import ModalVideo from "react-modal-video";
import { youtube_parser} from "../../../validation"

const listCarousel = [
  {
    hinhAnh: "https://s3img.vcdn.vn/123phim/2021/03/bo-gia-16146819941008.png",
    trailer: "https://youtu.be/jluSu8Rw6YE"
  },
  {
    hinhAnh: "https://s3img.vcdn.vn/123phim/2021/03/chaos-walking-16158835840511.jpg",
    trailer: "https://youtu.be/UIrGxHhdqXo"
  },
  {
    hinhAnh: "https://s3img.vcdn.vn/123phim/2021/03/minari-16158836515210.jpg",
    trailer: "https://youtu.be/z4bqat8idns"
  },
]



export default function Carousel() {
  const user = useSelector(state => state.signInReducer.userSignIn)
  const [state, setstate] = useState({ maPhim: 1314, tenPhim: "" });
  const [cumRap, setCumRap] = useState({ cumRap: "" });
  const [ngayChieuGioChieu, setNgayChieuGioChieu] = useState({
    ngayChieuGioChieu: "",
    maLichChieu: "",
  });
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState("");

  const listMovie = useSelector((state) => state.movieReducer.movieList);
  const listCinema = useSelector((state) => state.movieReducer.listCinemaAndShowTime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaAndShowTimeMovieAction(state.maPhim));
  }, [state.maPhim]);

  const renderListCarousel = () => {
    return listCarousel.map((carousel, index) => {
      return (
        <div className="item" key={index}>
          <a>
            <img
              src={carousel.hinhAnh}
              alt="true"
            />
          </a>
          <div className="backgroundLinear"></div>
          <div className="play">
            <img
              src="http://tix.vn/app/assets/img/icons/play-video.png"
              alt="true"
              onClick={() => {
                setOpen(true)
                setTrailer(carousel.trailer)
              }}
            />
          </div>
        </div>
      )
    })
  }

  const renderMovie = () => {
    return listMovie.map((movie, index) => {
      return (
        <a
          key={index}
          onClick={() => {
            setstate({
              maPhim: movie.maPhim,
              tenPhim: movie.tenPhim,
            });
          }}
          className="dropdown-item"
        >
          {movie.tenPhim}(C16)
        </a>
      );
    });
  };

  const renderCinema = () => {
    return listCinema.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu.map((cumRap, index) => {
        return (
          <a
            key={index}
            onClick={() =>
              setCumRap({
                cumRap: cumRap.tenCumRap,
              })
            }
            className="dropdown-item"
          >
            {cumRap.tenCumRap}
          </a>
        );
      });
    });
  };

  const renderScreenings = () => {
    return listCinema.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu
        .filter((item) => item.tenCumRap === cumRap.cumRap)
        .map((cumRap) => {
          return cumRap.lichChieuPhim.map((lichChieuPhim, index) => {
            return (
              <a
                key={index}
                onClick={() =>
                  setNgayChieuGioChieu({
                    ngayChieuGioChieu: format(
                      "dd-MM-yyy | hh:mm",
                      new Date(lichChieuPhim.ngayChieuGioChieu)
                    ),
                    maLichChieu: lichChieuPhim.maLichChieu,
                  })
                }
                className="dropdown-item"
              >
                {format(
                  "dd-MM-yyy | hh:mm",
                  new Date(lichChieuPhim.ngayChieuGioChieu)
                )}
              </a>
            );
          });
        });
    });
  };

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div id="carousel" className="d-none d-md-block">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        autoplay
        videoId={youtube_parser(trailer)}
        onClose={() => setOpen(false)}
      />
      <Slider {...settings}>
        {renderListCarousel()}
      </Slider>
      <div className="homeTools d-lg-flex d-none">

        <div className="dropdown d-flex">
          <button
            type="button"
            className=" dropdown-toggle "
            data-toggle="dropdown"
          >
            {state.tenPhim === "" ? "Phim" : state.tenPhim}
          </button>
          <div className="dropdown-menu">{renderMovie()}</div>
        </div>

        <div className="dropdown d-flex">
          <button
            type="button"
            className=" dropdown-toggle "
            data-toggle="dropdown"
          >
            {cumRap.cumRap === "" ? "Rạp" : cumRap.cumRap}
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item">Chọn rạp</a>
            {renderCinema()}
          </div>
        </div>

        <div className="dropdown d-flex">
          <button
            type="button"
            className=" dropdown-toggle"
            data-toggle="dropdown"
          >
            {ngayChieuGioChieu.ngayChieuGioChieu === ""
              ? "Ngày chiếu - Giờ chiếu"
              : ngayChieuGioChieu.ngayChieuGioChieu}
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item">Chọn ngày chiếu - giờ chiếu</a>
            {renderScreenings()}
          </div>
        </div>
        <div className="dropdown d-flex justify-content-center">
          {state.maPhim !== "" &&
            state.tenPhim !== "" &&
            cumRap.cumRap !== "" &&
            ngayChieuGioChieu.ngayChieuGioChieu !== "" ? (
            user ? (
              <NavLink to={`/booking/${ngayChieuGioChieu.maLichChieu}`}>
                <button
                  style={{ backgroundColor: "#fb4226" }}
                  type="button"
                  className="btn"
                >
                  Mua vé ngay
                </button>
              </NavLink>
            ) : (
              <NavLink to="/signIn">
                <button
                  style={{ backgroundColor: "#fb4226" }}
                  type="button"
                  className="btn"
                >
                  Mua vé ngay
                </button>
              </NavLink>
            )
          ) : (
            <button type="button" className="btn btn-dark">
              Mua vé ngay
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
