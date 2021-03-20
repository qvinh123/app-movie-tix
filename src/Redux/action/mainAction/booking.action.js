import { GET_TICKET_MOVIE, CHOICE_CHAIR } from "../../constants/mainConstants/booking.constant";
import { mainService } from "../../../service"
import Swal from 'sweetalert2'

// ---------- getTicketList ----------
const getTicketList = (listTicket) => ({
  type: GET_TICKET_MOVIE,
  payload: listTicket,
});

export const getTicketListAction = (maLichChieu,loading) => {
  return (dispatch) => {
    mainService.getTicketListAPI(maLichChieu)
      .then((res) => {
        dispatch(getTicketList(res.data))
        loading()
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


// ---------- choiceChair ----------
export const choiceChair = (maGhe) => ({
  type: CHOICE_CHAIR,
  payload: maGhe,
});



// ---------- bookingTicketAPI ----------
export const bookingTicketAction = (maLichChieu, danhSachVe, user, history) => {
  return () => {
    mainService.bookingTicketAPI(maLichChieu, danhSachVe, user)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          text: 'Đặt vé thành công',
        }).then(() => {
            history.push("/infoUser")

        })
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          text: err.response.data,
        })
      });
  };
};
