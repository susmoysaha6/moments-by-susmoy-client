import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Others/ErrorPage";
import Reviews from "../../Pages/Reviews/Reviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            }
        ]
    }
])