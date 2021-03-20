import React from "react";
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { updateUserAction } from "../../../Redux/action/adminAction/userInfo.action"
import { validate } from "../../../validation"

export default function ModalUpdateUser({ infoUserEdit }) {
  const user = useSelector(state => state.signInReducer.userSignIn)
  const dispatch = useDispatch()

  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Sửa người dùng</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <Formik validate={validate} onSubmit={values => dispatch(updateUserAction({ ...values, maNhom: user.maNhom }, user))} initialValues={infoUserEdit} enableReinitialize={true}>
              {({ values, errors, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Họ và tên</label>
                    <br />
                    <input onChange={handleChange} className="form-control" type="text" name="hoTen" value={values.hoTen} />
                    {errors.hoTen? <div className="text text-danger">{errors.hoTen}</div> : null}
                  </div>

                  <div className="form-group">
                    <label>Tên tài khoản</label>
                    <br />
                    <input onChange={handleChange} className="form-control" name="taiKhoan" value={values.taiKhoan} />
                    {errors.taiKhoan ? <div className="text text-danger">{errors.taiKhoan}</div> : null}
                  </div>


                  <div className="form-group">
                    <label>Mật khẩu</label>
                    <br />
                    <input onChange={handleChange} className="form-control" name="matKhau" value={values.matKhau} />
                    {errors.matKhau ? <div className="text text-danger">{errors.matKhau}</div> : null}
                  </div>

                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <br />
                    <input onChange={handleChange} className="form-control" name="soDt" value={values.soDt} />
                    {errors.soDt ? <div className="text text-danger">{errors.soDt}</div> : null}
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <br />
                    <input onChange={handleChange} className="form-control" name="email" value={values.email} />
                    {errors.email ? <div className="text text-danger">{errors.email}</div> : null}
                  </div>

                  <div className="form-group">
                    <label>Loạn người dùng</label>
                    <br />
                    <select onChange={handleChange} className="form-control" name="maLoaiNguoiDung" value={values.maLoaiNguoiDung}>
                      <option value="QuanTri">Quản trị</option>
                      <option value="KhachHang">Khách hàng</option>
                    </select>
                    {errors.maLoaiNguoiDung ? <div className="text text-danger">{errors.maLoaiNguoiDung}</div> : null}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger"
                  >
                    Cập nhật
                </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
