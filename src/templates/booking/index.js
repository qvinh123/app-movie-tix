import { Route } from "react-router-dom";
const LayoutBooking = (props) => {
  return <>{props.children}</>;
};
export const RouterBooking = (props) => {
  const { Component, ...routes } = props;
  return (
    <Route {...routes}>
      <LayoutBooking>
        <Component />
      </LayoutBooking>
    </Route>
  );
};
