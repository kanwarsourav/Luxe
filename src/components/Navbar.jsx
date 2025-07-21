import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/logo.svg"
import '../App.css'

export default function Navbar() {
    return (
        <>
            <div className=" bg-[#FFFDF8] ">
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex  items-center justify-between py-4  ">

                    {/* Logo */}
                    <div className="flex">
                        <img
                            src={logo} // Replace with your actual logo path
                            alt="Logo"
                            
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-700 ">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <div className="relative group">
                            <a href="#" className="flex items-center gap-1">
                                Products <span className="text-xs">▼</span>
                            </a>
                            {/* Optional dropdown */}
                        </div>
                        <a href="#">Blogs</a>
                        <div className="relative group">
                            <a href="#" className="flex items-center gap-1">
                                More <span className="text-xs">+</span>
                            </a>
                        </div>
                    </div>

                    {/* Social Icons & Button */}
                    <div className="flex items-center gap-4 ">
                        <FaFacebookF className="text-sm hover:text-blue-500" />
                        <FaInstagram className="text-sm hover:text-pink-500" />
                        <FaLinkedinIn className="text-sm hover:text-blue-700" />
                        <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
