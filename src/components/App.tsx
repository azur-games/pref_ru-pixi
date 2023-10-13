import {createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom";
import CookiePolicy from "../pages/CookiePolicy";
import Footer from "../pages/home_page/Footer";
import Nav from "../pages/home_page/Nav";
import HomePage from "../pages/HomePage";
import TermsOfUse from "../pages/TermsOfUse";
import CookieAlert from "./CookieAlert";


function Layout() {

    return (
        <>
            <CookieAlert/>
            <ScrollRestoration/>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    );
}

let routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "terms-of-use",
                element: <TermsOfUse/>,
            },
            {
                path: "cookie-policy",
                element: <CookiePolicy/>,
            },
        ]
    },
];

const router = createBrowserRouter(routes);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;