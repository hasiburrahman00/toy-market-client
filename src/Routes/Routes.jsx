import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Toys from "../Pages/Toys/Toys";
import MyAccount from "../Pages/MyAccount/MyAccount";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
                path:'/toys', 
                element: <Toys></Toys>,
                loader: () => fetch(`http://localhost:5000/toys`)
            },
            {
                path: '/myAccount',
                element: <MyAccount></MyAccount>
            },
            {
                path: '/toys/:id',
                element: <ToyDetails></ToyDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])
export default router;