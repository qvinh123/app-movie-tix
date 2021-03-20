import {
  GET_USER_INFO,
  CHANGE_KEYWORD
} from "../../constants/adminConstants/userInfo.constant";

let initialState = {
  listUserInfo: [],
};
export const userInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_INFO: {
      return { ...state, listUserInfo: payload };
    }
    case CHANGE_KEYWORD: {
      return { ...state, listUserInfo: payload }
    }
    default: {
      return state;
    }
  }
};
