import {useState} from "react";
import {createHashRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom";
import CookiePolicy from "../pages/CookiePolicy";
import Footer from "../pages/home_page/Footer";
import Nav from "../pages/home_page/Nav";
import HomePage from "../pages/HomePage";
import TermsOfUse from "../pages/TermsOfUse";
import CookieAlert from "./CookieAlert";


function Layout() {
    let [isShowNav, setIsShowNav] = useState(true);

    return (
        <>
            <CookieAlert/>
            <ScrollRestoration/>

            <Nav isShowNav={isShowNav}/>
            <Outlet/>
            <Footer setIsShowNav={setIsShowNav}/>
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

const router = createHashRouter(routes);

// const router = createBrowserRouter(routes, {
//     basename: process.env.NODE_ENV === 'production' ? '/site_demo' : ''
// });

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;