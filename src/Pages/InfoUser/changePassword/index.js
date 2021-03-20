import React, { useState } from 'react'
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { updateUserMainAction } from "../../../Redux/action/mainAction/infoUser.action"


export default function ChangePassword({ userInfo }) {
    const user = JSON.parse(localStorage.getItem("userLogin"))
    const [hidden1, setHidden1] = useState(true)
    const [hidden2, setHidden2] = useState(true)
    const [hidden3, setHidden3] = useState(true)
    const { matKhau } = userInfo ?? ""
    const dispatch = useDispatch()
    const validate = values => {
        const errors = {};
        if (!values.matKhauCu) {
            errors.matKhauCu = 'Bạn chưa nhập mật khẩu cũ';
        } else if (values.matKhauCu !== matKhau) {
            errors.matKhauCu = 'Mật khẩu cũ không chính xác !';
        }

        if (!values.matKhauMoi) {
            errors.matKhauMoi = 'Bạn chưa nhập mật khẩu mới';
        } else if (values.matKhauMoi.length < 8) {
            errors.matKhauMoi = 'Mật khẩu phải từ 8 kí tự trở lên';
        }

        if (!values.nhapLaiMatKhauMoi) {
            errors.nhapLaiMatKhauMoi = 'Bạn chưa nhập lại mật khẩu mới';
        } else if (values.nhapLaiMatKhauMoi !== values.matKhauMoi) {
            errors.nhapLaiMatKhauMoi = 'Nhập lại mật khẩu không chính xác';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            matKhauCu: "",
            matKhauMoi: "",
            nhapLaiMatKhauMoi: ""
        },
        validate,
        onSubmit: values => {
            dispatch(updateUserMainAction({ ...userInfo, maLoaiNguoiDung: user.maLoaiNguoiDung, matKhau: values.matKhauMoi },user))
        }
    })

    const changeHidden = (value) => {
        if (value === 'a') {
            setHidden1(!hidden1)
        } else if (value === 'b') {
            setHidden2(!hidden2)
        } else {
            setHidden3(!hidden3)
        }
    }

    return (
        <div className="changePassword view">
            <h2>Thay đổi mật khẩu</h2>
            <form onSubmit={formik.handleSubmit} className="change__password_form">
                <div className="form-group row">
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type={hidden1 ? "password" : "text"} className="form-control" placeholder="Nhập mật khẩu cũ" name="matKhauCu" value={formik.values.matKhauCu} />
                    <label onClick={() => changeHidden('a')}><i className="fas fa-eye"></i></label>
                    {formik.errors.matKhauCu && formik.touched.matKhauCu ? <div className="text text-danger">{formik.errors.matKhauCu}</div> : null}
                </div>

                <div className="form-group row">
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type={hidden2 ? "password" : "text"} className="form-control" placeholder="Mật khẩu mới" name="matKhauMoi" value={formik.values.matKhauMoi} />
                    <label onClick={() => changeHidden('b')} ><i className="fas fa-eye"></i></label>
                    {formik.errors.matKhauMoi && formik.touched.matKhauMoi ? <div className="text text-danger">{formik.errors.matKhauMoi}</div> : null}
                </div>

                <div className="form-group row">
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type={hidden3 ? "password" : "text"} className="form-control" placeholder="Nhập lại mật khẩu mới" name="nhapLaiMatKhauMoi" value={formik.values.nhapLaiMatKhauMoi} />
                    <label onClick={() => changeHidden('c')}><i className="fas fa-eye"></i></label>
                    {formik.errors.nhapLaiMatKhauMoi && formik.touched.nhapLaiMatKhauMoi ? <div className="text text-danger">{formik.errors.nhapLaiMatKhauMoi}</div> : null}
                </div>

                <div className="d-flex justify-content-center"><button className="btn btn-success" type="submit">Thay đổi</button></div>
            </form>
        </div>
    )
}
