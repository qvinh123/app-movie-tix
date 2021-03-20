import { adminService } from "../../../service"
import { mainService } from "../../../service"
import Swal from 'sweetalert2'

export const updateUserMainAction = (userUpdate, user) => {
    return () => {
        adminService.updateUserAPI(userUpdate, user)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    text: 'Cập nhật thành công',
                }).then(function (isConfirm) {
                    if (isConfirm) { window.location.reload() }
                })
            }
            ).catch((err) => {
                Swal.fire({
                    icon: 'error',
                    text: err,
                })
            })
    }
}


export const comment = (user) => ({
    type: "COMMENT",
    payload: user,
});


export const postCommnentAction = (data) => {
    return (dispatch) => {
        mainService.commentDetailAPI(data)
            .then((res) => {
                mainService.getCommentAPI()
                    .then((res) => {
                        dispatch(comment(res.data))
                    }).catch((err) => {
                        console.log(err)
                    })
                Swal.fire({
                    icon: 'success',
                    text: 'Đăng thành công',
                })
            }).catch((err) => {
                Swal.fire({
                    icon: 'error',
                    text: err,
                })
            })
    }
}


