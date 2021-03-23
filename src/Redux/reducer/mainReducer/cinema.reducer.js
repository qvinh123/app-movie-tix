import { GET_CINEMA, GET_SHOW_TIMES_CINEMA } from "../../constants/mainConstants/cinema.constant"

const initialState= {
    listCinema:[],
    listShowTimeCinema:[]
}
export const cinemaReducer = (state= initialState,action)=>{
    switch(action.type){
        case GET_CINEMA:{
            return {...state,listCinema:action.payload}
        }
        case GET_SHOW_TIMES_CINEMA:{
            return{...state,listShowTimeCinema:action.payload}
        }
        default:{
            return state
        }
    }
}