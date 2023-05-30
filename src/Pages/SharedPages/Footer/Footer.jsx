import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logo-light.webp'
import payment from '/images/payment1.webp'

const Footer = () => {
    return (
        <div className=" bg-[url('/images/footer.png')]">
            <footer className="footer p-10 bg-[#333] opacity-80 text-white font-mono ">
                <div>
                    <Link><img src={logo} alt="" /></Link>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title text-xl"> Quick Links</span>
                    <a className="link link-hover "> - Support</a>
                    <a className="link link-hover"> - Helpline</a>
                    <a className="link link-hover"> - Courses</a>
                    <a className="link link-hover"> - About</a>
                    <a className="link link-hover"> - Event</a>
                </div>
                <div>
                    <span className="footer-title text-xl">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Press kit</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Carrer</a>
                </div>
                <div>
                    <span className="footer-title text-xl">Company</span>
                    <a className="link link-hover">Jesco</a>
                    <a className="link link-hover">Shop</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Login</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title text-xl">Store Information</span>
                    <p>2005 Your Address Goes Here.</p>
                    <p>896, Address 10010, HGJ</p>
                    <p>Phone/Fax: 0123456789</p>
                    <p> Email: demo@example.com</p>
                    <img src={payment} alt="" />
                </div>
            </footer>
        </div>
    );
};

export default Footer;