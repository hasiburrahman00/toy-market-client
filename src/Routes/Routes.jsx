import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Toys from "../Pages/Toys/Toys";
import MyAccount from "../Pages/MyAccount/MyAccount";

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
                element: <Toys></Toys>
            },
            {
                path: '/myAccount',
                element: <MyAccount></MyAccount>
            }
        ]
    }
])
export default router;