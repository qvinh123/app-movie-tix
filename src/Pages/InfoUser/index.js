/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import ChangeInfoUser from './changeInfoUser';
import ChangePassword from './changePassword';
import HistoryBooking from './historyBooking';
import { mainService } from "../../service"
import Swal from 'sweetalert2'
import Loading from '../../Components/loading';

export default function InfoUser() {
    const user = JSON.parse(localStorage.getItem("userLogin"))
    const [state, setstate] = useState(null)
    const [avatar, setavatar] = useState({ file: null })
    const [empty, setEmpty] = useState(false)
    const [loading, setLoading] = useState(true);
    const avatarImg = JSON.parse(localStorage.getItem("avatarImg"))

    useEffect(() => {
        mainService.getInfoUserAPI({ taiKhoan: user?.taiKhoan })
            .then((res) => {
                setstate(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleOnChange = (e) => {
        setavatar({ ...avatar, file: URL.createObjectURL(e.target.files[0]) })
        setEmpty(true)
    }

    const uploadHandler = () => {
        localStorage.setItem("avatarImg", JSON.stringify(avatar.file))
        Swal.fire({
            icon: 'success',
            text: 'Upload thành công',
        }).then(() => { window.location.reload() })
    }
    if(loading){
        return <Loading/>
    }
    return (
        <div className="userInfo">
            <div className="overlay_userInfo"></div>
            <div className="container" >
                <div className="row">
                    <div className="sideBar col-lg-3">
                        <div className="avatar_name_user">
                            <input type="file" id="img" onChange={handleOnChange} />
                            <label className="uploadfile" htmlFor="img"><i className="fas fa-upload"></i></label>
                            <img className="avatar" src={avatarImg || "https://tix.vn/app/assets/img/avatar.png"} alt="" />
                            <img className="avatar avatar_show" src={avatar.file} alt="" />
                        </div>
                        <ul className="nav nav-pills">
                            {empty ? <button onClick={uploadHandler}>Upload!</button> : ""}
                            <p>{state?.hoTen}</p>
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#thongtin">Thông tin tài khoản</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#doimatkhau">Thay đổi mật khẩu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#lichsudatve">Lịch sử đặt vé</a>
                            </li>
                        </ul>
                    </div>
                    <div className="main col-lg-9">
                        <div className="tab-content">
                            <div className="tab-pane active" id="thongtin">
                                <ChangeInfoUser userInfo={state} />
                            </div>
                            <div className="tab-pane fade" id="doimatkhau">
                                <ChangePassword userInfo={state} />
                            </div>
                            <div className="tab-pane fade" id="lichsudatve">
                                {state ? <HistoryBooking userInfo={state} /> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
