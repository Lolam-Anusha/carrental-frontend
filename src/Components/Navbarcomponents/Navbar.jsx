import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/Clientcontext';
import logo from "../images/carlogo.png";

export default function Navbar() {
    const [isToggle, setIsToggle] = useState(false);
    const { user } = useContext(UserContext);

    const menus = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Models', href: '/model' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleMenu = () => setIsToggle(!isToggle);

    return (
        <nav className="relative container mx-auto p-6 bg-white">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className="pt-2">
                    <Link to="/">
                        <img className="w-40 h-12 cursor-pointer" src={logo} alt="Car Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {menus.map((menu, index) => (
                        <Link key={index} to={menu.href}
                            className="font-bold text-lg font-sans hover:text-orange">
                            {menu.name}
                        </Link>
                    ))}
                </div>

                {/* Login Register Desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/login"
                        className="font-bold text-lg font-sans py-3 px-4 hover:text-orange">
                        Login
                    </Link>
                    <Link to="/register"
                        className="font-bold text-lg font-sans py-3 px-4 rounded text-white bg-orange opacity-90 hover:opacity-100 hover:shadow-md">
                        Register
                    </Link>
                </div>

                {/* Hamburger Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}
                        className={`hamburger ${isToggle ? 'open' : ''}`}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isToggle && (
                <div className="md:hidden flex flex-col bg-white w-full shadow-lg z-50 mt-4 rounded-lg py-4">
                    {menus.map((menu, index) => (
                        <Link key={index} to={menu.href}
                            onClick={() => setIsToggle(false)}
                            className="font-bold text-lg font-sans px-6 py-3 hover:text-orange hover:bg-gray-100 border-b border-gray-100">
                            {menu.name}
                        </Link>
                    ))}
                    <Link to="/login"
                        onClick={() => setIsToggle(false)}
                        className="font-bold text-lg font-sans px-6 py-3 hover:text-orange hover:bg-gray-100 border-b border-gray-100">
                        Login
                    </Link>
                    <Link to="/register"
                        onClick={() => setIsToggle(false)}
                        className="font-bold text-lg font-sans px-6 py-3 mx-4 my-2 rounded text-white bg-orange text-center">
                        Register
                    </Link>
                </div>
            )}
        </nav>
    );
}