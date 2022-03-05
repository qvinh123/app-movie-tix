import React, { useState } from "react";
import like from "../../../assets/image/like.png"
import comment from "../../../assets/image/comment.png"

const listNewTop = [
  {
    ma: "home",
    danhSachTinTuc: [
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg",
        title: "Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn",
        content: 'Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!',
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg",
        title: "“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành",
        content: "Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!",
      },
    ]
  },

  {
    ma: "review",
    danhSachTinTuc: [
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png",
        title: "Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết",
        content: "Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám",
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png",
        title: "Review: Dinh Thự Oan Khuất (Ghost Of War)",
        content: 'Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!',
      },
    ]
  },

  {
    ma: "saleOf",
    danhSachTinTuc: [
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2021/03/bhd-59k-ve-ca-tuan-16151022245962.jpg",
        title: "BHD 59K/VÉ CẢ TUẦN !!!",
        content: "Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.",
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg",
        title: "TIX 1K/VÉ NGẠI CHI GIÁ VÉ",
        content: 'Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga',
      },
    ]
  }
]

const listNewBottomLeft = [
  {
    ma: "home",
    danhSachTinTuc: [
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg",
        title: "NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN",
        content: "Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng giá trị giải thưởng lên đến 60 triệu đồng.",
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png",
        title: " [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng",
        content: "Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante",
      },
    ]
  }, {
    ma: "review",
    danhSachTinTuc: [
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png",
        title: "‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh",
        content: "Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.",
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png",
        title: "American Sniper - Chính nghĩa hay phi nghĩa?",
        content: "American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...",
      },
    ]
  }, {
    ma: "saleOf",
    danhSachTinTuc: [
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png",
        title: "ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX ",
        content: "ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.",
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg",
        title: "BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!",
        content: "Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.",
      },
    ]
  }
]

const listNewBottomRight = [
  {
    ma: "home",
    danhSachTinTuc: [
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png",
        title: "Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh tại Hàn Quốc mùa dịch"
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png",
        title: "Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan"
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg",
        title: "COVID-19 là bản chính thức của MEV-1 phim contagion(2011)"
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/08/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png",
        title: "6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood"
      },
    ]
  },

  {
    ma: "review",
    danhSachTinTuc: [
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/05/review-spider-man-into-the-spider-vesre-15886520889426.png",
        title: "Review: Spider-Man: Into The Spider-Vesre "
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg",
        title: "[Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy lội và hài hước đến thế"
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg",
        title: "COVID-19 là bản chính thức của MEV-1 phim contagion(2011)"
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/03/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg",
        title: "[Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh hùng Valiant"
      },
    ]
  },

  {
    ma: "saleOf",
    danhSachTinTuc: [
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png",
        title: "Beta Cineplex trở lại với hàng loạt ưu đãi lớn"
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg",
        title: "[123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái"
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg",
        title: "[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay"
      },
      {
        hinhAnh: "https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg",
        title: "[Mega GS] Một đoá hoa thay ngàn lời yêu"
      },
    ]
  },
]

export default function News() {
  const [state, setstate] = useState("home")
  const renderListNewTop = () => {
    return (
      listNewTop.filter(news => news.ma === state).map((item) => {
        return item.danhSachTinTuc.map((news, index) => {
          return (
            <div key={index} className="col-md-6 col-12">
              <div className="new_item mb-4">
                <div>
                  <a href="#!">
                    <img
                      src={news.hinhAnh}
                      alt="img-news"
                    />
                    <p className="newTitle mt-2">
                      {news.title}
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  {news.content}
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src={like}
                      alt="like"
                    />
                    <span>0</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src={comment}
                      alt="comment"
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      })
    )
  }

  const renderListNewBottomLeft = () => {
    return (
      listNewBottomLeft.filter(news => news.ma === state).map((item) => {
        return item.danhSachTinTuc.map((news, index) => {
          return (
            <div key={index} className="col-md-4 col-12">
              <div className="new_item">
                <div>
                  <a href="#!">
                    <img
                      src={news.hinhAnh}
                      alt="news-img"
                    />
                    <p className="newTitle mt-2">
                      {news.title}
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  {news.content}
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src={like}
                      alt="like"
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src={comment}
                      alt="comment"
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      })
    )
  }

  const renderListNewBottomRight = () => {
    return (
      listNewBottomRight.filter(news => news.ma === state).map((item, index) => {
        return item.danhSachTinTuc.map((news, index) => {
          return (
            <li key={index}>
              <a href="#!">
                <img
                  src={news.hinhAnh}
                  alt="news-img"
                />
                <span className="newTitle">
                  {news.title}
                </span>
              </a>
            </li>
          )
        })
      })
    )
  }
  const handleClick = (value) => {
    setstate(value)
  }
  return (
    <div id="news">
      {/* Nav pills */}
      <ul className="nav nav-pills justify-content-center align-items-center">
        <li className="nav-item">
          <a onClick={() => handleClick("home")} className="nav-link active" data-toggle="pill" href="#home">
            Điện Ảnh 24h
          </a>
        </li>
        <li className="nav-item">
          <a onClick={() => handleClick("review")} className="nav-link" data-toggle="pill" href="#menu1">
            Review
          </a>
        </li>
        <li className="nav-item">
          <a onClick={() => handleClick("saleOf")} className="nav-link" data-toggle="pill" href="#menu2">
            Khuyến Mãi
          </a>
        </li>
      </ul>
      {/* Tab panes */}
      <div className="tab-content">
        <div className="tab-pane container active" id="home">

          <div className="row">
            {renderListNewTop()}
          </div>

          <div className="row">
            {renderListNewBottomLeft()}
            <div className="col-md-4 col-12">
              <div className="new_item">
                <ul>
                  {renderListNewBottomRight()}
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="tab-pane container" id="menu1">
          <div className="row">
            {renderListNewTop()}
          </div>
          <div className="row">
            {renderListNewBottomLeft()}
            <div className="col-md-4 col-12">
              <div className="new_item">
                <ul>
                  {renderListNewBottomRight()}
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="tab-pane container" id="menu2">
          <div className="row">
            {renderListNewTop()}
          </div>
          <div className="row">
            {renderListNewBottomLeft()}
            <div className="col-md-4 col-12">
              <div className="new_item">
                <ul>
                  {renderListNewBottomRight()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
