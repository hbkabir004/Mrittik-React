import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CommingSoon from "../Pages/CommingSoon";
import ErrorPage from "../Pages/ErrorPage";
import Home01 from "../Pages/Home01";
import Home03 from "../Pages/Home03";
import Home04 from "../Pages/Home04";
import Signin from "../Pages/Signin";
import Team from "../Pages/Team";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home01></Home01>
            },
            {
                path: '/home-03',
                element: <Home03></Home03>
            },
            {
                path: '/home-04',
                element: <Home04></Home04>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/comingsoon',
                element: <CommingSoon></CommingSoon>
            },
            {
                path: '/team',
                element: <Team></Team>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },

        ]
    }
])