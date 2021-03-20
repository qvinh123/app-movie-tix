import Detail from "../Pages/detail";
import Home from "../Pages/home";
import SignIn from "../Pages/signIn";
import SignUp from "../Pages/signUp";
import DashBoard from "../Pages/dashboard";
import Booking from "../Pages/booking";
import DetailCinema from "../Pages/detailCinema";
import InfoUser from "../Pages/InfoUser";
import CinemaMobile from "../Components/home/cinemaMobile";
export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/detail/:maPhim",
    exact: true,
    Component: Detail,
  },

  {
    path: "/detailCinema/:cinemaCode/:cinemaSystemCode",
    exact: true,
    Component: DetailCinema,
  },
  {
    path: "/infoUser",
    exact: true,
    Component: InfoUser
  }
];

export const adminRouter = [
  {
    path: "/admin",
    exact: true,
    Component: DashBoard,
  },
];


export const bookingRouter = [
  {
    path: "/booking/:maLichChieu",
    exact: true,
    Component: Booking,
  },
];

export const signInRouter = [
  {
    path: "/signIn",
    exact: true,
    Component: SignIn,
  },
];

export const signUpRouter = [
  {
    path: "/signUp",
    exact: true,
    Component: SignUp,
  },
];


export const cinemaMobileRouter = [
  {
    path: "/cinemaMobile",
    exact: true,
    Component: CinemaMobile,
  },
];


