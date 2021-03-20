import { Route } from "react-router-dom";
import Footer from "../../Components/home/footer";
import Header from "../../Components/home/header";

const MainLayout = (props) => {
  return (
    <>
      <Header/>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export const RouterMain = (props) => {
  const { Component, ...routes } = props;
  return (
    <Route {...routes}>
      <MainLayout>
        <Component />
      </MainLayout>
    </Route>
  );
};
