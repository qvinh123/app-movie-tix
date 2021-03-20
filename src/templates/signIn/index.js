import { Route } from "react-router-dom";
const LayoutSignIn = (props) => {
    return <>{props.children}</>
};

export const RouterSignIn = (props) => {
  const { Component, ...routes } = props;
  return (
    <Route {...routes}>
      <LayoutSignIn >
        <Component />
      </LayoutSignIn>
    </Route>
  );
};
