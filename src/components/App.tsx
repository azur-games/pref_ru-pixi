import * as process from "process";
import {createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom";
import HomePage from "../pages/HomePage";
import TermsOfUse from "../pages/TermsOfUse";


function Layout() {
    return (
        <>
            <ScrollRestoration/>
            <Outlet/>
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

const router = createBrowserRouter(routes, {
    basename: process.env.NODE_ENV === 'production' ? '/site_demo' : ''
});

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;