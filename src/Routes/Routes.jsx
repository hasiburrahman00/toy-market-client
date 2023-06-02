import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Toys from "../Pages/Toys/Toys";
import MyAccount from "../Pages/MyAccount/MyAccount";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/toys',
                element: <Toys></Toys>,
                loader: () => fetch(`https://toy-market-sever.vercel.app/toys`)
            },
            {
                path: '/myAccount',
                element: <MyAccount></MyAccount>
            },
            {
                path: '/toys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-market-sever.vercel.app/toys/${params.id}`)
            },
            {
                path: '/addToys',
                element: <AddToys></AddToys>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>,

            },
            {
                path: '/mytoys/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://toy-market-sever.vercel.app/toys/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
export default router;