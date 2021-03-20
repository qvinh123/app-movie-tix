/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInAction } from "../../Redux/action/mainAction/signIn.action";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAction(user, history));
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <div className="signin">
        <div className="sign-wrapper">
          <img
            className="signin-header"
            src="https://tix.vn/app/assets/img/login/group@2x.png"
            alt=""
          />
          <div className="signin-message">
            Đăng nhập để được nhiều ưu đãi, mua vé
            <br />
            và bảo mật thông tin!
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <label for="username"></label>
              <input
                type="text"
                name="taiKhoan"
                placeholder="Username"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-item">
              <label for="password"></label>
              <input
                type="password"
                name="matKhau"
                placeholder="Password"
                onChange={handleChange}
              ></input>
            </div>
            <div className="button-panel">
              <input
                type="submit"
                className="button"
                title="Sign In"
                value="Sign In"
              ></input>
            </div>
          </form>
          <div className="form-footer">
            <p>
              <NavLink to="/signUp">Create an account</NavLink>
            </p>
            <p>
              <a>Forgot password?</a>
            </p>
          </div>
          <NavLink to="/">
            <div className="signin-close"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
