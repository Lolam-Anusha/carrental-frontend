import React, { useContext, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/carlogo.png";
import Dropdown from './accountdropdown';
import axios from 'axios';
import { UserContext } from '../../Context/Clientcontext';

export default function Accountbar() {
    const [isToggle, setIstoggle] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const menus = [
        { name: 'Home', href: "/account" },
        { name: 'About', href: "/about" },
        { name: 'Models', href: "/model" },
        { name: 'Testimonials', href: "/testimonials" },
        { name: 'Team', href: "/team" },
        { name: 'Contact', href: "/contact" },
        { name: 'Bookings', href: "/account/bookings" },
    ];

    const open = () => setIstoggle(!isToggle);

    const handleLogout = useCallback(async () => {
        await axios.post('/api/logout');
        setUser(null);
        navigate('/');
    }, [setUser, navigate]);

    return (
        <nav className="relative container mx-auto p-6 bg-white">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className="pt-2">
                    <img className="w-40 h-12 cursor-pointer" src={logo} alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {menus.filter(menu => menu.name !== "Bookings").map((menu, index) => (
                        <Link key={index} to={menu.href}
                            className="font-bold text-lg font-sans hover:text-orange">
                            {menu.name}
                        </Link>
                    ))}
                </div>

                {/* Dropdown Desktop */}
                <div className="hidden md:flex space-x-4">
                    <Dropdown />
                </div>

                {/* Hamburger Mobile */}
                <div className="md:hidden">
                    <button onClick={open}
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
                            onClick={() => setIstoggle(false)}
                            className="font-bold text-lg font-sans px-6 py-3 hover:text-orange hover:bg-gray-100 border-b border-gray-100">
                            {menu.name}
                        </Link>
                    ))}
                    <button onClick={handleLogout}
                        className="font-bold text-lg font-sans px-6 py-3 mx-4 my-2 rounded text-white bg-orange text-center">
                        Logout
                    </button>
                </div>
            )}
        </nav>
    );
}