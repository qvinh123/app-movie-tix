import { combineReducers } from "redux"
import { movieReducer } from "./reducer/mainReducer/movie.reducer"
import { cinemaReducer } from "./reducer/mainReducer/cinema.reducer"
import { signInReducer } from "./reducer/mainReducer/signIn.reducer"
import { bookingReducer } from "./reducer/mainReducer/booking.reducer"
import { userInfoReducer } from "./reducer/adminReducer/userInfo.reducer"
import { listMovieAdminReducer } from "./reducer/adminReducer/listMovie.reducer"
import { loadingReudcer } from "./reducer/mainReducer/loading.reducer"
export const roorReducer = combineReducers(
    {movieReducer, cinemaReducer, signInReducer, bookingReducer, userInfoReducer, listMovieAdminReducer, loadingReudcer }
)