import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";

function Header() {
    const [show, setShow] = useState(true);
    const lastScrollY = useRef(0);

    const controlHeader = () => {
        if (window.scrollY > lastScrollY.current) {
            setShow(false);
        } else {
            setShow(true);
        }
        lastScrollY.current = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", controlHeader);
        return () => {
            window.removeEventListener("scroll", controlHeader);
        };
    }, []);

    return (
        <header
            className={`bg-gray-200 text-black fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
                show ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                <div className="flex-shrink-0">
                    <img src="" alt="Logo" className="h-10" />
                </div>

                <nav className="flex-grow mx-8">
                    <ul className="flex justify-center space-x-6 text-lg font-medium">
                        <li>
                            <a href="">Men</a>
                        </li>
                        <li>
                            <a href="">Women</a>
                        </li>
                        <li>
                            <a href="">Kids</a>
                        </li>
                        <li>
                            <a href="">Sale</a>
                        </li>
                        <li>
                            <a href="">New & Trending</a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center space-x-6">
                    <div className="flex border border-gray-400 rounded overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-3 py-1 focus:outline-none"
                        />
                        <button className="bg-gray-300 px-3 flex items-center justify-center">
                            <FontAwesomeIcon icon="search" />
                        </button>
                    </div>
                    <div className="flex space-x-4 text-sm font-semibold">
                        <h1 className="cursor-pointer hover:text-gray-700">
                            User Login/Signup
                        </h1>
                        <h1 className="cursor-pointer hover:text-gray-700">
                            Wishlist
                        </h1>
                        <h1 className="cursor-pointer hover:text-gray-700">
                            Cart
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
