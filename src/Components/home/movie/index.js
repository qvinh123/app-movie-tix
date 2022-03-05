import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieListAction,
  getMovieList2Action,
} from "../../../Redux/action/mainAction/movie.action";
import { NavLink } from "react-router-dom";
import ModalVideo from "react-modal-video";
import play from "../../../assets/image/play-video.png"
import star1 from "../../../assets/image/star1.png"
import star1d2 from "../../../assets/image/star1.2.png"

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
      },
    },
  ],
};

export default function Movie() {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    dispatch(getMovieListAction());
    dispatch(getMovieList2Action());
  }, []);

  const { movieList } = useSelector((state) => state.movieReducer);
  const { movieList2 } = useSelector((state) => state.movieReducer);

  const youtube_parser = (url = " ") => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }


  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        autoplay
        videoId={youtube_parser(trailer)}
        onClose={() => setOpen(false)}
      />
      <div id="homeMovies">
        <div className="movies_list">
          <div className="movies_heading">
            <ul
              className="nav nav-pills d-flex justify-content-center align-items-center"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="pill"
                  href="#dangchieu"
                >
                  Đang Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#sapchieu">
                  Sắp Chiếu
                </a>
              </li>
            </ul>
          </div>
          <div className="movies_detail">
            <div className="tab-content">
              <div id="dangchieu" className="tab-pane active">
                <Slider {...settings}>
                  {movieList?.map((movie, index) => {
                    return (
                      <div key={index} className="film col-12" >
                        <div className="film_img">
                          <a href="#!">
                            <img
                              src={movie.hinhAnh}
                              alt="film1"
                            />
                          </a>
                          <NavLink to={`/detail/${movie.maPhim}`}>
                            <div className="bg-overlay"></div>
                          </NavLink>
                          <div className="play">
                            <a href="#!" onClick={() => {
                              setOpen(true)
                              setTrailer(movie.trailer)
                            }}>
                              <img
                                src={play}
                                alt="video1"
                              />
                            </a>
                          </div>

                          <div className="review">
                            <p>{movie.danhGia}</p>
                            <div className="star">
                              {
                                Number.isInteger(movie.danhGia / 2) && movie.danhGia / 2 > 0 ?
                                  Array.from(Array(movie.danhGia / 2), (_, i) => (
                                    <div key={i}><img src={star1} alt={i} /></div>
                                  )) :
                                  Array.from(Array(Math.floor(movie.danhGia / 2)), (_, i) => (
                                    <div key={i}><img src={star1} alt={i} /></div>
                                  ))
                              }
                              {
                                !(Number.isInteger(movie.danhGia / 2) && movie.danhGia > 0) ? <div><img src={star1d2} alt="true" /></div> : ""
                              }

                            </div>
                          </div>
                        </div>

                        <div className="film_info">
                          <div className="name-film">
                            <span className="ageType">C18</span>
                            <span>{movie.tenPhim} (C18)</span>
                          </div>
                          <div className="minutes-film">
                            <p>100 phút </p>
                          </div>
                          <div className="buyNow">
                            <NavLink to={`/detail/${movie.maPhim}`}>
                              <button type="button">Mua vé</button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div id="sapchieu" className="tab-pane fade">
                <Slider {...settings}>
                  {movieList2?.map((movie, index) => {
                    return (

                      <div key={index} className="film col-lg-12 col-12">
                        <div className="film_img">
                          <a href="#!">
                            <img
                              src={movie.hinhAnh}
                              alt="film1"
                            />
                          </a>
                          <NavLink to={`/detail/${movie.maPhim}`}>
                            <div className="bg-overlay"></div>
                          </NavLink>


                          <div className="play">
                            <a
                              href="#!"
                              onClick={() => {
                                setOpen(true)
                              }}
                            >
                              <img
                                src={play}
                                alt="video1"
                              />
                            </a>
                          </div>


                          <div className="review">
                            <p>{movie.danhGia}</p>
                            <div className="star">
                              <div><img src={star1} alt="true" /></div>
                              <div><img src={star1} alt="true" /></div>
                              <div><img src={star1} alt="true" /></div>
                              <div><img src={star1} alt="true" /></div>
                              <div><img src={star1d2} alt="true" /></div>
                            </div>
                          </div>
                        </div>

                        <div className="film_info">
                          <div className="name-film">
                            <span className="ageType">C18</span>
                            <span>{movie.tenPhim}(C18)</span>
                          </div>
                          <div className="minutes-film">
                            <p>100 phút </p>
                          </div>
                          <div className="buyNow">
                            <NavLink to={`/detail/${movie.maPhim}`}>
                              <button type="button">Mua vé</button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
