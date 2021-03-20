/* eslint-disable no-useless-escape */
export const validate = values => {
    const errors = {}
    if (!values.taiKhoan) {
        errors.taiKhoan = "* Không để trống!"
    } else if (values.taiKhoan.length > 15) {
        errors.taiKhoan = "* Tên tài khoản phải từ 15 kí tự hoặc ít hơn"
    }

    if (!values.hoTen) {
        errors.hoTen = "* Không để trống!";
    } else if (!(/^[A-Za-z]+([\ A-Za-z]+)*/.test(values.hoTen))) {
        errors.hoTen = "* Họ tên Không hợp lệ!";
    } else if (values.hoTen.length > 15) {
        errors.hoTen = 'Họ tên phải từ 15 kí tự hoặc ít hơn';
    }

    if (!values.soDt) {
        errors.soDt = "* Không để trống!";
    } else if (!(/^[0-9]+$/.test(values.soDt))) {
        errors.soDt = "* Số điện thoại Không hợp lệ!";
    }

    if (!values.email) {
        errors.email = "* Không để trống!";
    } else if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email))) {
        errors.email = "* Email Không hợp lệ!";
    }

    if (!values.matKhau) {
        errors.matKhau = "* Không để trống!";
    } else if (values.matKhau.length < 8) {
        errors.matKhau = "* Mật khẩu phải trên 8 kí tự!";
    }

    if (!values.maLoaiNguoiDung) {
        errors.maLoaiNguoiDung = "* Chọn mã loại người dùng!";
    }

    return errors
}

export const youtube_parser = (url = " ") => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };