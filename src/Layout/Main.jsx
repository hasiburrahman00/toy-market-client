import React from 'react';
import Home from '../Pages/Home/Home/Home';
import NavBar from '../Pages/SharedPages/Navbar/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;