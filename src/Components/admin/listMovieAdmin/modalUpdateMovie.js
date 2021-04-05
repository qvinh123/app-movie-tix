/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { updateMovieAdminAction } from "../../../Redux/action/adminAction/listMovie.action"
import { useDispatch,useSelector } from "react-redux"
export default function ModalUpdateMovie({ movieEdit, pageCurrent }) {
  const user = useSelector(state => state?.signInReducer?.userSignIn)
  const dispatch = useDispatch()
  const [state, setstate] = useState({
    values: {
      hinhAnh: {},
      maPhim: '',
      tenPhim: '',
      biDanh: '',
      trailer: '',
      moTa: '',
      maNhom: 'GP09',
      ngayKhoiChieu: '',
      danhGia: ''
    }
    ,
    errors: {
      hinhAnh: {},
      maPhim: '',
      tenPhim: '',
      biDanh: '',
      trailer: '',
      moTa: '',
      maNhom: '',
      ngayKhoiChieu: '',
      danhGia: ''
    }
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    let errorMessage = ""
    if (value.trim() === "") {
      errorMessage = "Không được bỏ trống"
    }
    let newValues = ""
    let newError = ""
    if (name === "hinhAnh") {
      newValues = { ...state?.values, hinhAnh: e.target.files[0] }
    } else {
      newValues = { ...state?.values, [name]: value }
      newError = { ...state?.errors, [name]: errorMessage }
    }
    setstate({
      values: newValues,
      errors: newError
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    for (let key in {...state.values}) {
      form_data.append(key, state.values[key]);
    }
    dispatch(updateMovieAdminAction(form_data, pageCurrent,user))
  }

  useEffect(() => {
    setstate({ ...state, values: movieEdit })
  }, [movieEdit])
  return (
    <div className="modal" id="myModal3">
      <div className="modal-dialog" style={{ maxWidth: "800px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Sửa phim</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="flex-form">
                <div style={{ width: "50%", padding: "15px" }}>
                  <div className="form-group">
                    <label>Mã phim</label>
                    <br />
                    <input disabled className="form-control" name="maPhim" type="text" value={state?.values.maPhim} />
                  </div>

                  <div className="form-group">
                    <label>Tên phim</label>
                    <br />
                    <input
                      className="form-control"
                      value={state?.values.tenPhim}
                      type="text"
                      name="tenPhim"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Bí danh</label>
                    <br />
                    <input onChange={handleChange} className="form-control" type="text" name="biDanh" value={state?.values.biDanh} />
                  </div>

                  <div className="form-group">
                    <label>Trailer</label>
                    <br />
                    <input onChange={handleChange} className="form-control" type="text" name="trailer" value={state?.values.trailer} />
                  </div>

                  <div className="form-group">
                    <label>Hình ảnh</label>
                    <br />
                    <img width="100" height="150" src={state?.values.hinhAnh} alt="" />
                    <input onChange={handleChange} style={{ border: "none" }} className="form-control" type="file" name="hinhAnh" />
                  </div>
                </div>

                <div style={{ width: "50%", padding: "15px" }}>
                  <div className="form-group">
                    <label>Mô tả</label>
                    <br />
                    <input onChange={handleChange} className="form-control" type="text" name="moTa" value={state?.values.moTa} />
                  </div>

                  <div className="form-group">
                    <label>Mã nhóm</label>
                    <br />
                    <input className="form-control" disabled type="text" name="maNhom" value={state?.values.maNhom} />
                  </div>

                  <div className="form-group">
                    <label>Ngày khởi chiếu</label>
                    <br />
                    <input onChange={handleChange} className="form-control" type="text" name="ngayKhoiChieu" value={state?.values.ngayKhoiChieu} />
                  </div>

                  <div className="form-group">
                    <label>Đánh giá</label>
                    <br />
                    <input onChange={handleChange} className="form-control" type="number" name="danhGia" value={state?.values.danhGia} />
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="btn btn-danger action_button">
                  Cập nhật
            </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}