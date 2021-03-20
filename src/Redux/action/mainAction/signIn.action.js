import { SIGN_IN } from "../../constants/mainConstants/signIn.constant";
import { mainService } from "../../../service"
import Swal from 'sweetalert2'

export const signIn = (user) => ({
  type: SIGN_IN,
  payload: user,
});
export const signInAction = (userSignIn, history) => {
  return (dispatch) => {
    mainService.signInAPI(userSignIn)
      .then((res) => {
        dispatch(signIn(res.data));
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        Swal.fire({
          icon: 'success',
          text: 'Đăng nhập thành công',
        }).then(() => {
          history.goBack();
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
