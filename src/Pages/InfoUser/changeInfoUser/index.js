/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { updateUserMainAction } from "../../../Redux/action/mainAction/infoUser.action"

const validation = values => {
    const errors = {};
    if (!values.hoTen) {
        errors.hoTen = "* Không để trống!";
    } else if (!(/^[A-Za-z]+([\ A-Za-z]+)*/.test(values.hoTen))) {
        errors.hoTen = "* Họ tên không hợp lệ!";
    }
    else if (values.hoTen.length > 15) {
        errors.hoTen = 'Họ tên phải từ 15 kí tự hoặc ít hơn';
    }

    if (!values.soDT) {
        errors.soDT = "* Không để trống!";
    } else if (!(/^[0-9]+$/.test(values.soDT))) {
        errors.soDT = "* Số điện thoại không hợp lệ!";
    }
    return errors;
}

export default function ChangeInfoUser({ userInfo }) {
    const user = useSelector(state => state.signInReducer.userSignIn)

    const dispatch = useDispatch()
    const [toggleSwitch, setToggleSwitch] = useState(false)

    const checkDisabled = () => {
        if (toggleSwitch) {
            return false
        } else {
            return true
        }
    }

    return (
        <div className="infoUser_content view">
            <h2 className="mb-3">Thông tin tài khoản</h2>
            <div className="d-flex mt-2">
                <label className="switch">
                    <input onClick={() => setToggleSwitch(!toggleSwitch)} type="checkbox" />
                    <span className="slider round" />
                </label>
                <span className="ml-2" style={{ color: "#ffc107" }}>Chỉnh sửa thông tin</span>
            </div>

            <Formik validate={validation} enableReinitialize={true} initialValues={userInfo}
                onSubmit={(values) => dispatch(updateUserMainAction({ ...values, maLoaiNguoiDung: user.maLoaiNguoiDung }, user))}
            >
                {({ values, handleSubmit, handleChange, errors }) => (
                    <form onSubmit={handleSubmit} className="infoUser_content_form">
                        <div className="form-group row">
                            <label className="col-12 col-lg-3">Họ tên</label>
                            <div className="col-12 col-lg-9">
                                <input disabled={checkDisabled()} onChange={
                                    handleChange} type="text" className="form-control" name="hoTen" value={values?.hoTen} />
                                {errors.hoTen ? <div className="text text-danger">{errors.hoTen}</div> : null}
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-12 col-lg-3">Tài khoản</label>
                            <div className="col-12 col-lg-9">
                                <input disabled onChange={handleChange} type="text" className="form-control" name="taiKhoan" value={values?.taiKhoan} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-12 col-lg-3">Điện thoại</label>
                            <div className="col-12 col-lg-9">
                                <input disabled={checkDisabled()} onChange={handleChange} type="text" className="form-control" name="soDT" value={values?.soDT} />
                                {errors.soDT ? <div className="text text-danger">{errors.soDT}</div> : null}
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-12 col-lg-3">Email</label>
                            <div className="col-12 col-lg-9">
                                <input disabled onChange={handleChange} type="text" className="form-control" name="email" value={values?.email}
                                />
                            </div>
                        </div>
                        {toggleSwitch && !errors.soDT && !errors.hoTen ? <div className="btn_change d-flex justify-content-center"><button type="submit" className="btn btn-success">Thay đổi</button></div> : ""}
                    </form>
                )}
            </Formik>
        </div>
    )
}
