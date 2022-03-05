import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import avatar from "../../../assets/image/avatar.png"
import logo from "../../../assets/image/web-logo.png"
import location from "../../../assets/image/location-header.png"

export default function Header() {
  const user = useSelector((state) => state.signInReducer.userSignIn);
  const avatarImg = JSON.parse(localStorage.getItem("avatarImg"))
  const [click, setclick] = useState(false)

  const handleClick = () => {
    setclick(!click)
  }
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  const { width} = getWindowDimensions()

  return (
    <header>
      <div onClick={() => setclick(false)} className={click ? "overlay" : ""} />
      <nav className="navbar navbar-expand-md">
        <NavLink exact to="/">
          <img className="navbar-brand"
            src={logo}
            alt="logo"
          />
        </NavLink>

        <button onClick={handleClick} className="navbar-toggler d-block d-md-none" type="button">
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </button>

        <div className={click ? "navbar-collapse active" : "navbar-collapse"}>
          <div className="navbar_info order-2">
            <div className="navbar_info-account">
              {user ? (
                <NavLink to="/infoUser">
                  <img
                    src={user && (avatarImg || avatar)}
                    alt="account"
                  />
                  <span>{user?.taiKhoan}</span>
                </NavLink>
              ) : (
                <NavLink to="/signIn">
                  <img
                    src={avatar}
                    alt="account"
                  />
                  <span>Đăng nhập</span>
                </NavLink>
              )}
            </div>
            {user ? (
              user?.maLoaiNguoiDung == "QuanTri" ?
                <div className="logout">
                  <ul>
                    <NavLink style={{ color: '#fff', textDecoration: "none" }} to="/infoUser"><li>Thông tin tài khoản</li></NavLink>
                    <NavLink style={{ color: '#fff', textDecoration: "none" }} to="/admin"><li>Admin</li></NavLink>
                    <li onClick={() => logout()}>Đăng xuất</li>
                  </ul>
                </div> : <div className="logout">
                  <ul>
                    <NavLink style={{ color: '#fff', textDecoration: "none" }} to="/infoUser"><li>Thông tin tài khoản</li></NavLink>
                    <li onClick={() => logout()}>Đăng xuất</li>
                  </ul>
                </div>
            ) : (
              ""
            )}
          </div>
          <ul className="order-1 navbar-nav d-block d-md-none d-lg-flex" >
            <li className="nav-item">
              <a className="nav-link" href={window.location.pathname === "/" ? "#homeMovies" : "/"}>
                Lịch chiếu
              </a>
            </li>
            <li className="nav-item">
              {width < 768 ? <NavLink className="nav-link" to="/cinemaMobile">Cụm rạp
              </NavLink> : <a className="nav-link" href="#cinemaComplex">Cụm rạp</a>}

            </li>
            <li className="nav-item">
              <a className="nav-link" href={window.location.pathname === "/" ? "#news" : "/"}>
                Tin tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={window.location.pathname === "/" ? "#app" : "/"}>
                Ứng dụng
              </a>
            </li>
          </ul>
          <div className="navbar_info-location d-flex align-items-center order-3">
            <img
              src={location}
              alt="location"
            />
            <div className="dropdown">
              <button
                type="button"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Hồ Chí Minh
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item">
                  {" "}
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item">
                  Hà Nội
                </a>
                <a className="dropdown-item">
                  Đà Nẵng
                </a>
                <a className="dropdown-item">
                  Hải Phòng
                </a>
                <a className="dropdown-item">
                  Biên Hòa
                </a>
                <a className="dropdown-item">
                  Nha Trang
                </a>
                <a className="dropdown-item">
                  Bình Dương
                </a>
                <a className="dropdown-item">
                  Phan Thiết
                </a>
                <a className="dropdown-item">
                  Hạ Long
                </a>
                <a className="dropdown-item">
                  Cần Thơ
                </a>
                <a className="dropdown-item">
                  Vũng Tàu
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
