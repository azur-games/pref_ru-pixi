import {createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom";
import Footer from "../pages/home_page/Footer";
import Nav from "../pages/home_page/Nav";
import HomePage from "../pages/HomePage";
import TermsOfUse from "../pages/TermsOfUse";


function Layout() {
    return (
        <>
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
                path: "terms_of_use",
                element: <TermsOfUse/>,
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