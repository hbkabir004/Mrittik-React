import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CommingSoon from "../Pages/CommingSoon";
import ErrorPage from "../Pages/ErrorPage";
import Home01 from "../Pages/Home-01";
import Signin from "../Pages/Signin";

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
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/comingsoon',
                element: <CommingSoon></CommingSoon>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },

        ]
    }
])