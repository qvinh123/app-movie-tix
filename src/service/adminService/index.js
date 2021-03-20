import axios from "axios";
class AdminService {

    // -------- user --------
    getUserInfoAPI = () => {
        return axios({
            method: "GET",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09",
        })
    }

    deleteUserInfoAPI = (taiKhoan,user) => {
        return axios({
            method: "DELETE",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            }
        })
    }

    onChangeKeyWordAPI = (keyWord) => {
        return axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP09&tuKhoa=${keyWord}`,
        })

    }

    addUserAPI = (userAdd,user) => {
        return axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            data: userAdd,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            }
        })
    }

    updateUserAPI = (userUpdate,user) => {
        return axios({
            method: "PUT",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            data: userUpdate,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        })
    }

    // -------- movie --------
    getListMovieAdminAPI = (pageCurrent) => {
        return axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${pageCurrent}&soPhanTuTrenTrang=10`,
        })
    }

    deleteMovieAdminAPI = (maPhim,user) => {
        return axios({
            method: "DELETE",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            }
        })
    }

    updateMovieAdminAPI = (movieUpdate,user) => {
        return axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
            data: movieUpdate,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        })
    }

    addMovieAdminAPI = (movie,user) => {
        return axios({
            method: "POST",
            url:
                "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
            data: movie,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        })
    }

    addCalendarAPI = (calendarMovie,user) => {
        return axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
            data: calendarMovie,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        })
    }
}
export default AdminService