import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ErrorPage from "../../Pages/Others/ErrorPage";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services-on-homepage')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/add-service',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            }
        ]
    }
])