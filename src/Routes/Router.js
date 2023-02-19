import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CommingSoon from "../Pages/CommingSoon";
import ErrorPage from "../Pages/ErrorPage";
import Home01 from "../Pages/Home01";
import Home02 from "../Pages/Home02";
import Home03 from "../Pages/Home03";
import Home04 from "../Pages/Home04";
import Home05 from "../Pages/Home05";
import Home06 from "../Pages/Home06";
import Home07 from "../Pages/Home07";
import Signin from "../Pages/Signin";
import Team from "../Pages/Team";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home01/>,
            },
            {
                path: '/home-02',
                element: <Home02/>,
            },
            {
                path: '/home-03',
                element: <Home03/>,
            },
            {
                path: '/home-04',
                element: <Home04/>,
            },
            {
                path: '/home-05',
                element: <Home05/>,
            },
            {
                path: '/home-06',
                element: <Home06/>,
            },
            {
                path: '/home-07',
                element: <Home07/>,
            },
            {
                path: '/signin',
                element: <Signin/>,
            },
            {
                path: '/comingsoon',
                element: <CommingSoon/>,
            },
            {
                path: '/team',
                element: <Team/>,
            },
            {
                path: '*',
                element: <ErrorPage/>,
            },

        ]
    }
])