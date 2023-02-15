import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home01 from "../Pages/Home-01";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home01></Home01>
            },

            
            // {
            //     path: '*',
            //     element: <ErrorPage></ErrorPage>
            // },

        ]
    }
])