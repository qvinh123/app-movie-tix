import { SIGN_IN } from "../../constants/mainConstants/signIn.constant";

const initialState = {
  userSignIn: null,
  listComment: null,
};
export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return { ...state, userSignIn: action.payload };
    }
    case 'COMMENT': {
      return { ...state, listComment: action.payload };
    }
    default: {
      return state;
    }
  }
};
