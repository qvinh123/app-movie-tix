import React from "react";
import Slider from "react-slick";
import mobile from "../../../assets/image/mobile.png"
import slide1 from "../../../assets/image/slide1.jpg"
import slide2 from "../../../assets/image/slide2.jpg"
import slide3 from "../../../assets/image/slide3.jpg"
import slide4 from "../../../assets/image/slide4.jpg"
import slide5 from "../../../assets/image/slide5.jpg"
import slide6 from "../../../assets/image/slide6.jpg"
import slide7 from "../../../assets/image/slide7.jpg"
import slide8 from "../../../assets/image/slide8.jpg"
import slide9 from "../../../assets/image/slide9.jpg"
import slide10 from "../../../assets/image/slide10.jpg"
import slide11 from "../../../assets/image/slide11.jpg"
import slide12 from "../../../assets/image/slide12.jpg"
import slide13 from "../../../assets/image/slide13.jpg"
import slide14 from "../../../assets/image/slide14.jpg"
import slide15 from "../../../assets/image/slide15.jpg"
import slide16 from "../../../assets/image/slide16.jpg"

const sliderImg = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide16,
]
export default function Apps() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <section id="app">
      <div className="app_list">
        <div className="row mx-0">
          <div className="col-lg-6 col-12 app_info">
            <p className="text">
              Ứng dụng tiện lợi dành cho người yêu điện ảnh
            </p>
            <p className="textSmall">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197" className="dowload">App miễn phí - Tải về ngay!</a>
            <p className="textUnder">
              TIX có hai phiên bản&nbsp;
              <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">iOS</a>
              &amp;&nbsp;
              <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">Android</a>
            </p>
          </div>
          <div className="col-lg-6 col-12 app_img">
            <img
              className="img-res"
              src={mobile}
              alt="mobile"
            />
            <div className="owl-app">
              <Slider {...settings}>
                {sliderImg.map((img, index) => {
                  return <div key={index}>
                    <img
                      src={img}
                      alt="img-apps"
                    />
                  </div>
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
