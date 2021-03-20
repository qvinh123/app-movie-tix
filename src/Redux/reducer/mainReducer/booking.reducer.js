import { GET_TICKET_MOVIE, CHOICE_CHAIR } from "../../constants/mainConstants/booking.constant";
const initialState = {
  chairList: [],
  infoTicket:{}
};
export const bookingReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_TICKET_MOVIE: {
      return { ...state, chairList: payload.danhSachGhe,infoTicket:payload.thongTinPhim };
    }
    case CHOICE_CHAIR: {
      const index = state.chairList.findIndex(
        (chair) => chair.maGhe === payload
      );
      if (index !== -1) {
        let currentChair = state.chairList[index];
        let newChair = { ...currentChair, dangChon: !currentChair.dangChon };
        state.chairList[index] = newChair;
      }
      return { ...state };
    }
    default:
      return state;
  }
};
