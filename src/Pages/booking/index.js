/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {
  getTicketListAction,
  choiceChair,
  bookingTicketAction,
} from "../../Redux/action/mainAction/booking.action";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ModalMessage from "./modalMessage"
import Loading from "../../Components/loading";

const useStyle = makeStyles(() => {
  return {
    booked: { cursor: "no-drop", backgroundColor: "ddd" },
    choice: { backgroundColor: "#44c020" },
    notBook: { backgroundColor: "#3e515d" },
    vip: { backgroundColor: "orange" },
  };
});

export default function Booking() {
  const user = useSelector(state => state.signInReducer.userSignIn)
  const { chairList } = useSelector((state) => state.bookingReducer);
  const { infoTicket } = useSelector((state) => state.bookingReducer);

  const history = useHistory();
  const classes = useStyle();
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState({ total: 0 });
  const [flag, setFlag] = useState(true)
  const [flagMessage, setFlagMessage] = useState(true)
  let [seconds, setSeconds] = useState(0)
  let [timeLeft, settimeLeft] = useState(300)
  const [loading, setLoading] = useState(true);

  const modalError = () => {
    let flag = true
    const selectedSeat = chairList.filter(chair => chair.dangChon)
    for (let i = 1; i < selectedSeat.length; i++) {
      if (Number(selectedSeat[i].tenGhe) - Number(selectedSeat[i - 1].tenGhe) === 2) {
        flag = false
      }
    }

    if (flag) {
      setFlag(true)
    } else {
      setFlag(false)
      Swal.fire({
        text: 'Bạn không thể bỏ trống 1 ghế ở giữa',
        imageUrl: "https://tix.vn/app/assets/img/Post-notification.png",
        imageWidth: 80,
        confirmButtonText: 'OK',
      })
    }
  }

  const renderStatusChair = (booked, choice, loaiGhe) => {
    if (booked) {
      return classes.booked;
    } else {
      if (choice) {
        return classes.choice;
      } else {
        if (loaiGhe === "Vip") {
          return classes.vip;
        } else {
          return classes.notBook;
        }
      }
    }

  };

  const handleChoice = (maGhe) => {
    dispatch(choiceChair(maGhe))
    setTotalPrice({
      total: total(),
    });
    modalError()
  };
  const renderChairList = () => {
    return chairList.map((chair, index) => {
      if (chair.daDat) {
        return (
          <button
            key={index}
            className={renderStatusChair(
              chair.daDat,
            )}
          >
            <i className="fas fa-times" style={{ color: "#fff" }}></i>
          </button>
        );
      }
      return (
        <button
          style={{ color: "#fff" }}
          onClick={() =>
            handleChoice(chair.maGhe)
          }
          key={index}
          className={renderStatusChair(
            chair.daDat,
            chair.dangChon,
            chair.loaiGhe
          )}
        >
          {chair.dangChon ? (
            chair.tenGhe
          ) : (
            <span style={{ opacity: "0" }}>1</span>
          )}
        </button>
      );
    });
  };

  const total = () => {
    return chairList
      .filter((chair) => chair.dangChon)
      .reduce((tt, giaGheDangChon) => {
        return (tt += giaGheDangChon.giaVe);
      }, 0);
  };

  const convertSecond = (s) => {
    let min = Math.floor(s / 60)
    let sec = s % 60
    if (min > -1 && sec > -1) {
      return `0${min}`.slice(-2) + ":" + `0${sec}`.slice(-2)
    } else {
      setFlagMessage(false)
      setSeconds(0)
      settimeLeft(0)
    }

  }
  const timeit = () => {
    setSeconds(seconds++)
  }

  useEffect(() => {
    dispatch(getTicketListAction(maLichChieu, () => { setLoading(false) }));
    setInterval(timeit, 1000);
    return()=>{
      setLoading(true)
    }
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div className="container-fluid" style={{ position: "relative" }}>
      <div id="checkout" className="row">
        {!flagMessage ? <ModalMessage /> : ""}
        <div id="stepcheckout" className="col-12">
          <div className="leftstep">
            <h4 style={{ paddingTop: "30px", color: "#fb4226" }}>
              Chọn ghế và thanh toán
              </h4>
          </div>
          <div className="rightstep">
            <div className="info-account d-flex align-items-center">
              <img
                src="https://tix.vn/app/assets/img/avatar.png"
                alt="account"
              />
              <span style={{ color: "#9b9b9b" }} className="d-none d-lg-block ml-2">
                {user?.taiKhoan}
              </span>
            </div>
          </div>
        </div>

        <div id="seatcheckout2" className="col-lg-9 col-12">
          <div id="seatv2">
            <div className="topContent">
              <div className="lefttitle">
                <div className="logocinema">
                  <img
                    className="logo"
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt="true"
                  />
                </div>

                <div className="contentcinema">
                  <p className="address">
                    <span className="pcinema">{infoTicket.tenCumRap}</span>
                  </p>
                  <p className="hour">
                    {infoTicket.ngayChieu} - {infoTicket.gioChieu} -{" "}
                    {infoTicket.tenRap}
                  </p>
                </div>
              </div>
              <div className="righttitle">
                <p className="info1">thời gian giữ ghế</p>
                <p className="info2">
                  <span className="second">
                    {convertSecond(timeLeft - seconds)}
                  </span>
                </p>
              </div>
            </div>
            <div className="seatmap">
              <div className="parent-panzoom">
                <div className="room panzoom" id="seatmanroom">
                  <div className="screen">
                    <div className="namescreen">
                      <img
                        className="logo"
                        src="https://tix.vn/app/assets/img/icons/screen.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="listseat">
                    <div className="container-seat">
                      <div className="rowseat">{renderChairList()}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="noteseat">
                <div className="typeseats ">
                  <span className="colorseat colornormal">
                    <span className="nameseat">Ghế thường</span>
                    <button
                      style={{ backgroundColor: "#3e515d" }}
                      className="chairType"
                    ></button>
                  </span>

                  <span className="colorseat colornormal">
                    <span className="nameseat">Ghế VIP</span>
                    <button
                      style={{ backgroundColor: "#f7b500" }}
                      className="chairType"
                    ></button>
                  </span>

                  <span className="colorseat colornormal">
                    <span className="nameseat">Ghế đang chọn</span>
                    <button
                      style={{ backgroundColor: "#44c020" }}
                      className="chairType"
                    ></button>
                  </span>

                  <span className="colorseat colornormal">
                    <span className="nameseat">Ghế đã chọn</span>
                    <button
                      style={{ backgroundColor: "#ddd" }}
                      className="chairType"
                    ></button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightcheckout col-lg-3 col-12">
          <div className="contentfullright">
            <div className="total">
              <p className="cash" id="totalcost">
                {(totalPrice.total).toLocaleString()} đ
                </p>
            </div>
            <div className="filmname">
              <span className="ageType">C18</span>
              <span style={{ fontWeight: "700", fontSize: "17px" }}>
                {infoTicket.tenPhim}
              </span>
              <div className="contentcinema">
                <div className="address">
                  <span className="pcinema ng-binding">
                    {infoTicket.tenCumRap}
                  </span>
                </div>
                <div className="hour ng-binding">
                  {infoTicket.ngayChieu} - {infoTicket.gioChieu} -{" "}
                  {infoTicket.tenRap}
                </div>
              </div>
            </div>

            <div className="chair">
              <div className="info">
                Ghế
                  {chairList
                  .filter((chair) => chair.dangChon)
                  .map((chair, index) => {
                    return (
                      <span key={index} className="mx-1">
                        {chair.tenGhe}
                      </span>
                    );
                  })}
              </div>
              <div className="totalchair">{(totalPrice.total).toLocaleString()} đ</div>
            </div>

            <div className="info_booking">
              <label>Email</label>
              <input className="inputEmail inputInfo" type="text" defaultValue={user?.email} />
            </div>

            <div className="info_booking">
              <label>Họ tên</label>
              <input className="inputHoTen inputInfo" type="text" defaultValue={user?.hoTen} />
            </div>

            <div className="booking_notice">
              <img src="https://tix.vn/app/assets/img/icons/exclamation.png" alt="" />
              <span className="notice__title">Vé đã mua không thể đổi hoặc hoàn tiền <br /></span>
              <span className="notice__title">Mã vé sẽ được gửi qua tin nhắn<span> SMS </span>(tin nhắn Zalo) và<span> Email </span>đã đăng nhập</span>
            </div>
          </div>

          {chairList.find((chair) => chair.dangChon) && flag ? (
            <button
              className="buyticket"
              onClick={() => {
                const newChairList = chairList
                  .filter((chair) => chair.dangChon)
                  .map((chair) => ({
                    maGhe: chair.maGhe,
                    giaVe: chair.giaVe,
                  }));
                dispatch(bookingTicketAction(maLichChieu, newChairList, user, history));
              }}
            >
              Đặt vé
            </button>
          ) : (
            <>
              <button className="notBuyticket">Đặt vé</button>

            </>
          )}
        </div>
      </div>
    </div>
  );
}
