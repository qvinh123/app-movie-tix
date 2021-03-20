import { Route } from "react-router"
import Header from "../../Components/home/header"

const CinemaMobileLayout = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export const RouterCinemaMobile = (props) => {
    const { Component, ...routes } = props
    return (
        <Route {...routes}>
            <CinemaMobileLayout>
                <Component />
            </CinemaMobileLayout>
        </Route>
    )
}