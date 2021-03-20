/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./main.scss";
import { useDispatch } from "react-redux";
import { signIn } from "./Redux/action/mainAction/signIn.action";
import {
  mainRouter,
  adminRouter,
  bookingRouter,
  signInRouter,
  signUpRouter,
  cinemaMobileRouter
} from "./config/router";
import { RouterMain } from "./templates/main";
import { RouterAdmin } from "./templates/admin";
import { RouterBooking } from "./templates/booking";
import { RouterSignIn } from "./templates/signIn";
import { RouterSignUp } from "./templates/signUp";

import Guard from "./HOC/Guard";
import { RouterCinemaMobile } from "./templates/cinemaMobile";

function App() {
  const dispatch = useDispatch();

  const userLocal = JSON.parse(localStorage.getItem("userLogin"));
  const getUserFromLocal = () => {
    if (userLocal) {
      dispatch(signIn(userLocal));
    }
  };
  useEffect(() => {
    getUserFromLocal();
  }, []);

  const renderMainRouter = (listRouter) => {
    return listRouter.map((router, index) => {
      return <RouterMain key={index} {...router}></RouterMain>
    });
  };
  const renderAdminRouter = (listRouter) => {
    return listRouter.map((router, index) => {
      return (
        <Guard>
          <RouterAdmin key={index} {...router}></RouterAdmin>
        </Guard>
      );
    });
  };

  const renderBookingRouter = (listRouter) => {
    return listRouter.map((router, index) => {
      return <RouterBooking key={index} {...router}></RouterBooking>;
    });
  };

  const renderSignInRouter = (listRouter) => {
    return listRouter.map((router, index) => {
      return <RouterSignIn key={index} {...router}></RouterSignIn>;
    });
  };

  const renderSignUpRouter = (listRouter) => {
    return listRouter.map((router, index) => {
      return <RouterSignUp key={index} {...router}></RouterSignUp>;
    });
  };

  const renderCinemaMobile = (listRouter) => {
    return listRouter.map((router, index) => {
      return <RouterCinemaMobile key={index} {...router}></RouterCinemaMobile>;
    });
  };

  return (
    <BrowserRouter>
      {renderMainRouter(mainRouter)}
      {renderAdminRouter(adminRouter)}
      {renderBookingRouter(bookingRouter)}
      {renderSignInRouter(signInRouter)}
      {renderSignUpRouter(signUpRouter)}
      {renderCinemaMobile(cinemaMobileRouter)}
    </BrowserRouter>
  );
}

export default App;
