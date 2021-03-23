import axios from "axios";
class MainService {
    // ------- Moive -------
    getMovieListAPI = () => {
        return axios({
            method: "GET",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
        })
    }

    getMovieListAPI2 = () => {
        return axios({
            method: "GET",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
        })
    }

    getMovieDetailAPI = (maPhim) => {
        return axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        })
    }

    getCinemaAndShowTimeMovieAPI = (maPhim) => {
        return axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        })
    }


    // ------- User -------
    signInAPI = (userSignIn) => {
        return axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: userSignIn,
        })
    }

    signUpAPI = (userSignUp) => {
        return axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: userSignUp,
        })
    }

    getInfoUserAPI = (user) => {
        return axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            data: user
        })
    }


    // ------- Cinema -------
    getCinemaAPI = () => {
        return axios({
            method: "GET",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        })
    }


    getShowTimeCinemAPI = (maHeThongRap) => {
        return axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`,
        })
    }


    // ------- Booking -------
    getTicketListAPI = (maLichChieu) => {
        return axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        })
    }

    bookingTicketAPI = (maLichChieu, danhSachVe, user) => {
        return axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            data: { maLichChieu, danhSachVe, taiKhoanNguoiDung: user.taiKhoan },
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        })
    }

    // ------- Commment -------

    getCommentAPI = () => {
        return axios({
            method: "GET",
            url: "https://5fb36beab6601200168f753a.mockapi.io/comment",
        })
    }
    commentDetailAPI = (data) => {
        return axios({
            method: "POST",
            url: "https://5fb36beab6601200168f753a.mockapi.io/comment",
            data: data
        })
    }
}

export default MainService