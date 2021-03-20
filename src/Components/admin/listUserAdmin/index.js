/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserInfoAction,
  deleteUserInfoAction,
  onChangeKeyWordAction,
} from "../../../Redux/action/adminAction/userInfo.action";
import ModalUpdateUser from "./modalUpdateUser";
import ModalAddUser from "./modalAddUser";


export default function ListUserAdmin() {
  const [state, setstate] = useState(null)
  const [keyWord, setkeyWord] = useState({ userSearch: "" });

  const dispatch = useDispatch();
  const listUserInfo = useSelector(
    (state) => state.userInfoReducer.listUserInfo
  );
  const userLogIn = useSelector(state => state.signInReducer.userSignIn)

  useEffect(() => {
    if (keyWord.userSearch === "") {
      dispatch(getUserInfoAction())
    } else {
      dispatch(onChangeKeyWordAction(keyWord.userSearch))
    }
  }, [keyWord.userSearch])

  // --------- renderListUser ---------
  const renderListUserInfo = () => {
    return listUserInfo.map((user, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.hoTen}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td className="d-flex justify-content-around">
            <i
              className="fa fa-edit"
              onClick={() => setstate(user)}
              data-toggle="modal"
              data-target="#myModal"
            >
            </i>
            <i
              onClick={() => handleDelete(user.taiKhoan, userLogIn)}
              className="fa fa-trash-alt"
            >
            </i>
          </td>
        </tr>
      );
    });
  };

  // --------- searchUser ---------
  const handleChangeKeyWord = (e) => {
    let { name, value } = e.target;
    setkeyWord({
      [name]: value,
    });
  };

  // --------- deleteUser ---------
  const handleDelete = (taiKhoan, userLogIn) => {
    dispatch(deleteUserInfoAction(taiKhoan, userLogIn));
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <input
          className="form-control"
          style={{
            outline: "none",
            padding: "8px",
            width: "40%",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="tìm kiếm"
          name="userSearch"
          value={keyWord.userSearch}
          onChange={handleChangeKeyWord}
        />
        <button
          type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal5"
        >
          Thêm người dùng
      </button>
      </div>
      <div className="table-responsive">
        <table
          className="table table-bordered table-hover"
        >
          <thead className="bg-dark text-white" border="1">
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Tên tài khoản</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Người dùng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>{renderListUserInfo()}</tbody>
        </table>
      </div>
      {state ? <ModalUpdateUser infoUserEdit={state} /> : ""}

      <ModalAddUser />
    </>
  );
}
