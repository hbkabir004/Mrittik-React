import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/BlogDetails";
import CommingSoon from "../Pages/CommingSoon";
import Contact from "../Pages/Contact";
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
import TeamDetails from "../Pages/TeamDetails";

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
                path: '/home-2',
                element: <Home02/>,
            },
            {
                path: '/home-3',
                element: <Home03/>,
            },
            {
                path: '/home-4',
                element: <Home04/>,
            },
            {
                path: '/home-5',
                element: <Home05/>,
            },
            {
                path: '/home-6',
                element: <Home06/>,
            },
            {
                path: '/home-7',
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
                path: '/team-details',
                element: <TeamDetails/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/about',
                element: <AboutUs/>,
            },
            {
                path: '/blog',
                element: <Blog/>,
            },
            {
                path: '/blog-details',
                element: <BlogDetails/>,
            },
            {
                path: '*',
                element: <ErrorPage/>,
            },

        ]
    }
])