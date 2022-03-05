import cgv from "../../../assets/image/cgv.png"
import bhd from "../../../assets/image/bhd.png"
import galaxycine from "../../../assets/image/galaxycine.png"
import cinestar from "../../../assets/image/cinestar.png"
import lotte from "../../../assets/image/lotte.png"

import megags from "../../../assets/image/megags.png"
import bt from "../../../assets/image/bt.jpg"
import dongdacinema from "../../../assets/image/dongdacinema.png"
import TOUCH from "../../../assets/image/TOUCH.png"
import cnx from "../../../assets/image/cnx.jpg"

import STARLIGHT from "../../../assets/image/STARLIGHT.png"
import dcine from "../../../assets/image/dcine.png"
import zalopay_icon from "../../../assets/image/zalopay_icon.png"
import payoo from "../../../assets/image/payoo.jpg"
import VCB from "../../../assets/image/VCB.png"

import AGRIBANK from "../../../assets/image/AGRIBANK.png"
import VIETTINBANK from "../../../assets/image/VIETTINBANK.png"
import IVB from "../../../assets/image/IVB.png"
import go from "../../../assets/image/123go.png"
import laban from "../../../assets/image/laban.png"

import apple from "../../../assets/image/apple-logo.png"
import android from "../../../assets/image/android-logo.png"
import facebook from "../../../assets/image/facebook-logo.png"
import zalo from "../../../assets/image/zalo-logo.png"
import zion from "../../../assets/image/zion-logo.jpg"

import bct from "../../../assets/image/GOV.png"

const listPartner = [
  cgv,
  bhd,
  galaxycine,
  cinestar,
  lotte,
  megags,
  bt,
  dongdacinema,
  TOUCH,
  cnx,
  STARLIGHT,
  dcine,
  zalopay_icon,
  payoo,
  VCB,
  AGRIBANK,
  VIETTINBANK,
  IVB,
  go,
  laban
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
            <div className="partner">
              {listPartner.map((logo) => {
                return <img key={logo} src={logo} alt="logoPartner" />
              })}
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="row ">
              <div className="col-6 d-none d-lg-block">
                <p className="title-footer">MOBILE APP</p>
                <a>
                  <img
                    src={apple}
                    alt="apple"
                  />
                </a>
                <a>
                  <img
                    src={android}
                    alt="android"
                  />
                </a>
              </div>
              <div className="col-lg-6 col-12" style={{textAlign: 'center'}}>
                <p className="title-footer d-none d-lg-block">SOCIAL</p>
                <a>
                  <img
                    src={facebook}
                    alt="facebook"
                  />
                </a>
                <a>
                  <img
                    src={zalo}
                    alt="zalo"
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
              src={zion}
              alt="zion"
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
              <a href="mailto:support@tix.vn"> support@tix.vn</a>
            </span>
          </div>
          <div className="col-lg-2 col-12">
            <a>
              <img
                src={bct}
                alt="bct"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
