import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/arrowdown.svg';
import menuIcon from '../assets/images/menu.svg';
import closeIcon from '../assets/images/close.svg';
import '../App.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const dropdownRef = useRef(null);
    const mobileDropdownRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const toggleDropdown = (menuName) => {
        setOpenDropdown(prev => (prev === menuName ? null : menuName));
    };

    const toggleMobileDropdown = (menuName) => {
        setMobileDropdown(prev => (prev === menuName ? null : menuName));
    };

    const handleHamburgerClick = () => {
        if (isVisible) {
            setIsClosing(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsVisible(false);
                setIsClosing(false);
                setMobileDropdown(null);
            }, 400);
        } else {
            setIsVisible(true);
            setIsOpen(true);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const handleClickOutside = (event) => {
            const clickedOutsideMenu =
                mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target);
            const clickedOutsideToggle =
                toggleButtonRef.current && !toggleButtonRef.current.contains(event.target);

            if (clickedOutsideMenu && clickedOutsideToggle) {
                setMobileDropdown(null);
                handleHamburgerClick();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isVisible]);

    useEffect(() => {
        document.body.style.overflow = isVisible ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    return (
        <header className="w-full bg-[#FFFDF8] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" />
                </Link>

                {/* Desktop Menu */}
                <ul
                    className="hidden md:flex items-center gap-8 text-[#0F141A] font-medium text-sm relative"
                    ref={dropdownRef}
                >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>

                    <li
                        className="relative"
                        onMouseEnter={() => toggleDropdown("visas")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <div className="flex items-center gap-1 cursor-pointer">
                            <span>Products</span>
                            <img
                                src={arrow}
                                alt="arrow"
                                className={`text-[#0F141A] transition-transform duration-200 ${openDropdown === "visas" ? "rotate-180" : ""}`}
                            />
                        </div>
                    </li>

                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contactus">More +</Link></li>
                </ul>

                {/* Social Icons + Contact Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <FaFacebookF className="text-sm hover:text-blue-500" />
                    <FaInstagram className="text-sm hover:text-pink-500" />
                    <FaLinkedinIn className="text-sm hover:text-blue-700" />
                    <Link to="/contactus">
                        <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-transform duration-300 hover:scale-105">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden" ref={toggleButtonRef}>
                    <button onClick={handleHamburgerClick}>
                        <img src={isVisible ? closeIcon : menuIcon} alt="Menu" className="w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isVisible && (
                <div
                    ref={mobileDropdownRef}
                    className={`md:hidden absolute top-full left-0 w-full bg-[#FFFDF8] px-4 pb-4 shadow z-40 
            ${isClosing ? 'animate-fadeOutDiagonal' : 'animate-fadeInDiagonal'}`}
                >
                    <ul className="flex flex-col gap-4 text-[#0F141A] font-medium cursor-pointer">
                        <li><Link to="/" onClick={handleHamburgerClick}>Home</Link></li>
                        <li><Link to="/about" onClick={handleHamburgerClick}>About Us</Link></li>
                        <li onClick={() => toggleMobileDropdown("visas")} className="flex items-center gap-2">
                            <span>Products</span>
                            <img
                                src={arrow}
                                alt="arrow"
                                className={`transition-transform duration-200 ${mobileDropdown === "visas" ? "rotate-180" : ""}`}
                            />
                        </li>
                        <li><Link to="/blogs" onClick={handleHamburgerClick}>Blogs</Link></li>
                        <li><Link to="/contactus" onClick={handleHamburgerClick}>More +</Link></li>
                    </ul>

                    {/* Social Icons for Mobile (moved out of <ul>) */}
                    <div className="flex items-center gap-4 mt-4 lg:hidden">
                        <FaFacebookF className="text-sm hover:text-blue-500" />
                        <FaInstagram className="text-sm hover:text-pink-500" />
                        <FaLinkedinIn className="text-sm hover:text-blue-700" />
                        <Link to="/contactus">
                            <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-transform duration-300 hover:scale-105">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
