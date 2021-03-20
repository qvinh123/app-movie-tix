import React from 'react'
import { useFormik } from 'formik';
import { addUserAction } from "../../../Redux/action/adminAction/userInfo.action"
import { useDispatch, useSelector } from "react-redux"
import { validate } from "../../../validation"


export default function ModalAddUser() {
    const dispatch = useDispatch()
    const userLogIn = useSelector(state => state.signInReducer.userSignIn)
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP09",
            maLoaiNguoiDung: "",
            hoTen: ""
        },
        onSubmit: (values, { resetForm }) => {
            dispatch(addUserAction(values, userLogIn))
            resetForm();
        },
        validate
    })

    return (
        <>
            <div className="modal" id="myModal5">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Thêm người dùng</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label>Tên tài khoản</label>
                                    <br />
                                    <input value={formik.values.taiKhoan} className="form-control" onChange={formik.handleChange} type="text" name="taiKhoan" />
                                    {formik.errors.taiKhoan ? <div className="text text-danger">{formik.errors.taiKhoan}</div> : null}
                                </div>

                                <div className="form-group">
                                    <label>Họ tên</label>
                                    <br />
                                    <input value={formik.values.hoTen} className="form-control" onChange={formik.handleChange} type="text" name="hoTen" />
                                    {formik.errors.hoTen ? <div className="text text-danger">{formik.errors.hoTen}</div> : null}
                                </div>

                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <br />
                                    <input value={formik.values.matKhau} className="form-control" onChange={formik.handleChange} type="text" name="matKhau" />
                                    {formik.errors.matKhau ? <div className="text text-danger">{formik.errors.matKhau}</div> : null}
                                </div>

                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <br />
                                    <input value={formik.values.soDt} className="form-control" type="text" onChange={formik.handleChange} name="soDt" />
                                    {formik.errors.soDt ? <div className="text text-danger">{formik.errors.soDt}</div> : null}
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <br />
                                    <input value={formik.values.email} className="form-control" onChange={formik.handleChange} type="text" name="email" />
                                    {formik.errors.email ? <div className="text text-danger">{formik.errors.email}</div> : null}
                                </div>

                                <div className="form-group">
                                    <select name="maLoaiNguoiDung" className="form-select select mt-2" onChange={formik.handleChange}>
                                        <option selected>Loại người dùng</option>
                                        <option value="KhachHang">Khách hàng</option>
                                        <option value="QuanTri">Quản trị</option>
                                    </select>
                                    {formik.errors.maLoaiNguoiDung ? <div className="text text-danger">{formik.errors.maLoaiNguoiDung}</div> : null}
                                </div>
                                <div className="action_button">
                                    <button type="submit" className="btn btn-danger mt-4">Thêm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
