import { Route } from "react-router-dom";

const AdminLayout = (props) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};
export const RouterAdmin = (props) => {
  const { Component, ...routes } = props;
  return (
    <Route {...routes}>
      <AdminLayout>
        <Component />
      </AdminLayout>
    </Route>
  );
};
