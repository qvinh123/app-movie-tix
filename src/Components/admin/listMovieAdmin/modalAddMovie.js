import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMovieAdminAction } from "../../../Redux/action/adminAction/listMovie.action";
export default function ModalAddMovie({ pageCurrent }) {
  const user = useSelector(state => state.signInReducer.userSignIn)
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    values: {
      maPhim: 0,
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: null,
      moTa: "",
      maNhom: "GP09",
      ngayKhoiChieu: "",
      danhGia: "",
    },
  });
  const handleOnChange = (e) => {
    let { name, value, files } = e.target;
    let newValue = "";
    if (name === "hinhAnh") {
      newValue = { ...state.values, hinhAnh: files[0] };
    } else {
      newValue = { ...state.values, [name]: value };
    }
    setstate({
      values: newValue,
    });
  };
  const handleSubmit = () => {
    let form_data = new FormData();
    for (let key in state.values) {
      form_data.append(key, state.values[key]);
    };
    dispatch(addMovieAdminAction(form_data, pageCurrent,user));
    setstate({
      values: {
        maPhim: 0,
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: null,
        moTa: "",
        maNhom: "GP09",
        ngayKhoiChieu: "",
        danhGia: "",
      },
    });
  };

  return (
    <div className="modal" id="myModal2">
      <div className="modal-dialog" style={{ maxWidth: "800px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Thêm phim</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <form className="d-flex">
              <div style={{ width: "50%", padding: "15px" }}>

                <div className="form-group">
                  <label>Tên phim</label>
                  <br />
                  <input className="form-control" onChange={handleOnChange} type="text" name="tenPhim" value={state.values.tenPhim} />
                </div>

                <div className="form-group">
                  <label>Bí danh</label>
                  <br />
                  <input className="form-control" onChange={handleOnChange} type="text" name="biDanh" value={state.values.biDanh} />
                </div>

                <div className="form-group">
                  <label>Trailer</label>
                  <br />
                  <input className="form-control" onChange={handleOnChange} type="text" name="trailer" value={state.values.trailer} />
                </div>

                <div className="form-group">
                  <label>Hình ảnh</label>
                  <br />
                  <input className="form-control" type="file" onChange={handleOnChange} name="hinhAnh"/>
                </div>
              </div>

              <div style={{ width: "50%", padding: "15px" }}>
                <div className="form-group">
                  <label>Mô tả</label>
                  <br />
                  <input className="form-control" onChange={handleOnChange} type="text" name="moTa" value={state.values.moTa} />
                </div>

                <div className="form-group">
                  <label>Đánh giá</label>
                  <br />
                  <input className="form-control" onChange={handleOnChange} type="text" name="danhGia" value={state.values.danhGia} />
                </div>

                <div className="form-group">
                  <label>Ngày khởi chiếu</label>
                  <br />
                  <input
                    onChange={handleOnChange}
                    type="text"
                    name="ngayKhoiChieu"
                    value={state.values.ngayKhoiChieu}
                    className="form-control"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              onClick={() => handleSubmit()}
            >
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
