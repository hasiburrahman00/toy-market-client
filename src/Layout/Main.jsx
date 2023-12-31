import React from 'react';
import Home from '../Pages/Home/Home/Home';
import NavBar from '../Pages/SharedPages/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;