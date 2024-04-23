import React from "react";
import logo from '../../assets/logo/coffeewithdeveloper-favicon-color.png';
import { Link } from "react-router-dom";

export default function NavBar() {
    const nameOfApplication = 'CoffeeWithDeveloper';

    return (
        <>
            <nav className="bg-neutral-900 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-sky-300">{nameOfApplication}</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link
                            to="/login"
                            className="block py-2 px-3 text-white  rounded"
                            aria-current="page">
                            Login
                        </Link>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-3 text-white"
                                    aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="block py-2 px-3 text-white">
                                    Contact
                                </Link>
                            </li>
                            <li><Link
                                to="/services"
                                className="block py-2 px-3 text-white">
                                Services
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
