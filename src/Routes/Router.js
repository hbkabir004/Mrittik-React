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
import Project01 from "../Pages/Project01";
import Project02 from "../Pages/Project02";
import Project03 from "../Pages/Project03";
import ProjectDetails from "../Pages/ProjectDetails";
import ProjectDetails02 from "../Pages/ProjectDetails02";
import Service01 from "../Pages/Service01";
import Service02 from "../Pages/Service02";
import ServiceDetails from "../Pages/ServiceDetails";
import Shop01 from "../Pages/Shop01";
import Shop02 from "../Pages/Shop02";
import Shop03 from "../Pages/Shop03";
import ShopCart from "../Pages/ShopCart";
import ShopCheckout from "../Pages/ShopCheckout";
import ShopProduct from "../Pages/ShopProduct";
import Signin from "../Pages/Signin";
import Team from "../Pages/Team";
import TeamDetails from "../Pages/TeamDetails";

export const routes = createBrowserRouter([
    {
        path: "/",
        // loader: ()=> fetch('https://mrittik-server.vercel.app/category'),
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
                path: '/project-1',
                element: <Project01/>,
            },
            {
                path: '/project-2',
                element: <Project02/>,
            },
            {
                path: '/project-3',
                element: <Project03/>,
            },
            {
                path: '/project-details',
                element: <ProjectDetails/>,
            },
            {
                path: '/project-details-2',
                element: <ProjectDetails02/>,
            },
            {
                path: '/shop-1',
                element: <Shop01/>,
            },
            {
                path: '/shop-product/:id',
                element: <ShopProduct/>,
                loader: ({ params }) => fetch(`https://mrittik-server.vercel.app/products/${params.id}`)
            },
           
            {
                path: '/shop-2',
                element: <Shop02/>,
            },
            {
                path: '/shop-3',
                element: <Shop03/>,
            },
            {
                path: '/shop-product',
                element: <ShopProduct/>,
            },
            {
                path: '/shop-cart',
                element: <ShopCart/>,
            },
            {
                path: '/shop-checkout',
                element: <ShopCheckout/>,
            },
            {
                path: '/service-1',
                element: <Service01/>,
            },
            {
                path: '/service-2',
                element: <Service02/>,
            },
            {
                path: '/service-details',
                element: <ServiceDetails/>,
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