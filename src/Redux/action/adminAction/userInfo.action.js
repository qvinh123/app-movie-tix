import {
  GET_USER_INFO,
  CHANGE_KEYWORD,
} from "../../constants/adminConstants/userInfo.constant";
import { adminService } from "../../../service/"
import Swal from 'sweetalert2'

// --------- getListUser ---------
const getUserInfo = (userInfo) => ({
  type: GET_USER_INFO,
  payload: userInfo,
});

export const getUserInfoAction = () => {
  return (dispatch) => {
    adminService.getUserInfoAPI()
      .then((res) => {
        dispatch(getUserInfo(res.data))
      }).then(() => {
        dispatch({ type: "HIDE_LOADING" })
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



// --------- deleteUser ---------
export const deleteUserInfoAction = (taiKhoan, user) => {
  return (dispatch) => {
    adminService.deleteUserInfoAPI(taiKhoan, user)
      .then((res) => {
        dispatch(getUserInfoAction());
        Swal.fire({
          icon: 'success',
          text: 'Xóa thành công',
        })
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          text: err.response.data,
        })
      });
  };
};



// --------- searchUser ---------
const onChangeKeyWord = (listUserSearch) => ({
  type: CHANGE_KEYWORD,
  payload: listUserSearch,
});

export const onChangeKeyWordAction = (keyWord) => {
  return (dispatch) => {
    adminService.onChangeKeyWordAPI(keyWord)
      .then((res) => {
        dispatch(onChangeKeyWord(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// --------- addUser ---------
export const addUserAction = (userAdd, user) => {
  return (dispatch) => {
    adminService.addUserAPI(userAdd, user)
      .then((res) => {
        dispatch(getUserInfoAction());
        Swal.fire({
          icon: 'success',
          text: 'Thêm thành công',
        })
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          text: err.response.data,
        })
      })
  }
}

// --------- updateUser ---------
export const updateUserAction = (userUpdate, user) => {
  return (dispatch) => {
    adminService.updateUserAPI(userUpdate, user)
      .then((res) => {
        dispatch(getUserInfoAction());
        Swal.fire({
          icon: 'success',
          text: 'Cập nhật thành công',
        })
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          text: err.response.data,
        })
      })
  }
}
