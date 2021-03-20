/* eslint-disable jsx-a11y/anchor-is-valid */
const listPartner = [
  {
    ma: 1,
    danhSachLogo: ["https://tix.vn/app/assets/img/icons/cgv.png",
      "https://tix.vn/app/assets/img/icons/bhd.png",
      "https://tix.vn/app/assets/img/icons/galaxycine.png",
      "https://tix.vn/app/assets/img/icons/cinestar.png",
      "https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"]
  },
  {
    ma: 2,
    danhSachLogo: ["https://tix.vn/app/assets/img/icons/megags.png",
      "https://tix.vn/app/assets/img/icons/bt.jpg",
      "https://tix.vn/app/assets/img/icons/dongdacinema.png",
      "https://tix.vn/app/assets/img/icons/TOUCH.png",
      "https://tix.vn/app/assets/img/icons/cnx.jpg"]
  },
  {
    ma: 3,
    danhSachLogo: ["https://tix.vn/app/assets/img/icons/STARLIGHT.png",
      "https://tix.vn/app/assets/img/icons/dcine.png",
      "https://tix.vn/app/assets/img/icons/zalopay_icon.png",
      "https://tix.vn/app/assets/img/icons/payoo.jpg",
      "https://tix.vn/app/assets/img/icons/VCB.png"]
  },
  {
    ma: 4,
    danhSachLogo: ["https://tix.vn/app/assets/img/icons/AGRIBANK.png",
      "https://tix.vn/app/assets/img/icons/VIETTINBANK.png",
      "https://tix.vn/app/assets/img/icons/IVB.png",
      "https://tix.vn/app/assets/img/icons/123go.png",
      "https://tix.vn/app/assets/img/icons/laban.png"]
  }
]
export default function Footer() {
  return (
    <footer>
      <div id="footer" className="container">
        <div className="row footer-top">
          <div className="col-lg-4 footer-top-1">
            <p className="title-footer d-none d-lg-block">TIX</p>
            <div className="row">
              <div className="col-6 footer-top-1-1 d-none d-lg-block">
                <a className="d-block">
                  FAQ
                </a>
                <a className="d-block">
                  Brand Guidelines
                </a>
              </div>
              <div className="col-lg-6 col-12 footer-top-1-1">
                <a className="d-lg-block">Thỏa thuận sử dụng</a>
                <a className="d-lg-block">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <p className="title-footer">ĐỐI TÁC</p>
            <div className="row">
              <div className="col-12">
                {listPartner.filter(logo => logo.ma === 1).map((logo) => {
                  return logo.danhSachLogo.map((logo, index) => {
                    return <a key={index}>
                      <img src={logo} alt="logoPartner" />
                    </a>
                  })
                })}
              </div>
              <div className="col-12">
                {listPartner.filter(logo => logo.ma === 2).map((logo) => {
                  return logo.danhSachLogo.map((logo, index) => {
                    return <a key={index}>
                      <img src={logo} alt="logoPartner" />
                    </a>
                  })
                })}
              </div>
              <div className="col-12">
                {listPartner.filter(logo => logo.ma === 3).map((logo) => {
                  return logo.danhSachLogo.map((logo, index) => {
                    return <a key={index}>
                      <img src={logo} alt="logoPartner" />
                    </a>
                  })
                })}
              </div>
              <div className="col-12">
                {listPartner.filter(logo => logo.ma === 4).map((logo) => {
                  return logo.danhSachLogo.map((logo, index) => {
                    return <a key={index}>
                      <img src={logo} alt="logoPartner" />
                    </a>
                  })
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="row">
              <div className="col-6 d-none d-lg-block">
                <p className="title-footer">MOBILE APP</p>
                <a>
                  <img
                    src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                    alt="true"
                  />
                </a>
                <a>
                  <img
                    src="https://tix.vn/app/assets/img/icons/android-logo.png"
                    alt="true"
                  />
                </a>
              </div>
              <div className="col-lg-6 col-12">
                <p className="title-footer d-none d-lg-block">SOCIAL</p>
                <a>
                  <img
                    src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                    alt="true"
                  />
                </a>
                <a>
                  <img
                    src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                    alt="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row footer-bottom">
          <div className="col-lg-2 col-12 mb-4">
            <img
              className="img-footer"
              src="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
              alt="true"
            />
          </div>
          <div className="col-lg-8 col-12">
            <span className="title-footer text-white">
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </span>
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </span>
            <span>
              Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
              <br />
              Email:
              <a href="mailto:support@tix.vn">support@tix.vn</a>
            </span>
          </div>
          <div className="col-lg-2 col-12">
            <a>
              <img
                src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt="true"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
