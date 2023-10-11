import {createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom";
import Nav from "../pages/home_page/Nav";
import HomePage from "../pages/HomePage";
import TermsOfUse from "../pages/TermsOfUse";


function Layout() {
    return (
        <>
            <ScrollRestoration/>
            <Nav/>
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

const router = createBrowserRouter(routes);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;