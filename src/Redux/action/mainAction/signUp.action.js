import { mainService } from "../../../service"
import Swal from 'sweetalert2'
export const signUpAction = (userSignUp,history) => {
  mainService.signUpAPI(userSignUp)
    .then((res) => {
      Swal.fire({
        icon: 'success',
        text: 'Đăng kÍ thành công',
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
