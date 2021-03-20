/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ListUserAdmin from "../../Components/admin/listUserAdmin/index";
import ListMovieAdmin from "../../Components/admin/listMovieAdmin/index";
export default function DashBoard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-xl-2 col-12 px-0">
            <nav id="sidebar" className="active px-3">
              <ul className="list-unstyled components mb-5 nav nav-pills">

                <li className="nav-item">
                  <a className="nav-link active" data-toggle="pill" href="#quanLiNguoiDung">
                    <span className="fa fa-user" /> Quản lí người dùng
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#quanLiPhim">
                    <span className="fa fa-user" /> Quản lí phim
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-lg-9 col-xl-10 col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block">
              <div className="container-fluid">
                <a>
                  <img
                    src="https://tix.vn/app/assets/img/icons/web-logo.png"
                    width="50px"
                    alt="true"
                  />
                </a>
              </div>
            </nav>
            <div id="content" className="tab-content">

              <div className="tab-pane active" id="quanLiNguoiDung">
                <ListUserAdmin />
              </div>

              <div className="tab-pane fade" id="quanLiPhim">
                <ListMovieAdmin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
