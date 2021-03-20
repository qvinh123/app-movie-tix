import { Route } from "react-router-dom";

const LayoutSignUp = (props) => {
  return <>{props.children}</>;
};

export const RouterSignUp = (props) => {
  const { Component, ...routes } = props;
  return (
    <Route {...routes}>
      <LayoutSignUp>
        <Component />
      </LayoutSignUp>
    </Route>
  );
};
