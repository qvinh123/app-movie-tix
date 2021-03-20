import {
  GET_CINEMA,
  GET_SHOW_TIMES_CINEMA,
} from "../../constants/mainConstants/cinema.constant";
import { mainService } from "../../../service"

// -------- getCinema --------
const getCinema = (cinema) => {
  return {
    type: GET_CINEMA,
    payload: cinema,
  };
};

export const getCinemaAction = () => {
  return (dispatch) => {
    mainService.getCinemaAPI()
      .then((res) => {
        dispatch(getCinema(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



// -------- getShowTimeCinema --------
const getShowTimeCinema = (data) => {
  return {
    type: GET_SHOW_TIMES_CINEMA,
    payload: data,
  };
};

export const getShowTimeCinemAction = (maHeThongRap) => {
  return (dispatch) => {
    mainService.getShowTimeCinemAPI(maHeThongRap)
      .then((res) => {
        dispatch(getShowTimeCinema(res.data));
      })
      .catch((err) => console.log(err));
  };
};


