/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { signUpAction } from "../../Redux/action/mainAction/signUp.action";

export default function SignUp() {
  const history = useHistory();
  const validationSchema = yup.object({
    taiKhoan: yup
      .string()
      .required("* Không để trống!"),
    matKhau: yup
      .string()
      .min(8, "Mật khẩu phải từ 8 kí tự trở lên")
      .required("* Không để trống!"),
    hoTen: yup
      .string()
      .matches(/^[A-Za-z]+([\ A-Za-z]+)*/)
      .required("* Không để trống!"),
    email: yup
      .string()
      .required("* Không để trống!")
      .email("* Email Không hợp lệ"),
    soDt: yup
      .string()
      .required("* Không để trống!")
      .matches(/^[0-9]+$/),
  });

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP09",
      hoTen: "",
      maLoaiNguoiDung: "KhachHang",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUpAction(values,history);
    },
  });
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="signin">
        <div className="sign-wrapper">
          <div className="signin-message">
            <h2>Đăng kí</h2>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="form-item">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hoTen}
                type="text"
                name="hoTen"
                placeholder="Họ và tên"
              ></input>
              {formik.touched.hoTen && formik.errors.hoTen ? (
                <p className="text-danger text-left">* Họ tên phải là kí tự [a -Z]</p>
              ) : null}
            </div>
            <div className="form-item">
              <input
                type="text"
                name="taiKhoan"
                placeholder="Tên tài khoản"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                <p className="text-danger text-left">
                  {formik.errors.taiKhoan}
                </p>
              ) : null}
            </div>
            <div className="form-item">
              <input
                type="password"
                name="matKhau"
                placeholder="Mật khẩu"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.matKhau && formik.errors.matKhau ? (
                <p className="text-danger text-left">{formik.errors.matKhau}</p>
              ) : null}
            </div>

            <div className="form-item">
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email"
                placeholder="Email"
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger text-left">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="form-item">
              <input
                type="text"
                name="soDt"
                placeholder="Số điện thoại"
                value={formik.values.soDt}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.soDt && formik.errors.soDt ? (
                <p className="text-danger text-left">* Số điện thoại phải là kí tự [0-9]</p>
              ) : null}
            </div>

            <div className="button-panel">
              <input
                type="submit"
                className="button"
                title="Sign Up"
                value="Đăng kí"
              ></input>
            </div>
          </form>
          <NavLink to="/">
            <div className="signin-close"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
