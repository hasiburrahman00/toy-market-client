import React from 'react';
import logo from '../../../../public/images/logo.webp';
import { FaUserAlt } from 'react-icons/fa';
import { HiMail, HiOutlineShoppingBag } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <div className='bg-[#f5f5f5]'>
                <div className='md:w-10/12 mx-auto lg:flex justify-between pb-4  md:py-4'>
                    <p className='text-center'>Free Returns and Free Shipping</p>
                    <div className='flex items-center space-x-6 md:justify-between md:pt-4 lg:pt-0'>
                        <p className='d-none flex items-center border-r-2 pr-4'><MdCall className='mr-2 h-6 w-6' />01518982779</p>
                        <p className='flex items-center border-r-2 pr-4'><HiMail className='mr-2 h-6 w-6' />hasiburuoda@gmail.com</p>
                        <p className='flex items-center font-semibold text-xl'><FaUserAlt className='mr-2' /> <span className='hidden md:block'>Account</span></p>
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100 md:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={`/`}>Home</Link></li>
                            <li><Link>All Toys</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to={`/`}><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link>All Toys</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-end">
                    <Link><FiHeart className='h-6 w-6 mr-2' /></Link>
                    <Link><HiOutlineShoppingBag className='h-8 w-8 mx-2' /></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;