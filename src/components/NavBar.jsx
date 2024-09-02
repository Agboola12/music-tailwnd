import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="bg-lightBlack h-auto">
                <div className="container mx-auto">
                    <nav className="text-pureWhite flex p-5 border-b-2 justify-between items-center">
                        <div className="md:hidden">
                            <button 
                                type="button" 
                                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" 
                                onClick={toggleMenu}
                            >
                                <i className="fa-solid fa-bars text-white"></i>
                            </button>
                        </div>

                        <Link to="/" className="font-bold text-2xl">audiophile</Link>

                        <div className="hidden md:block">
                            <ul className="flex space-x-6">
                                <li><Link to="/" className="hover:text-lightDeep hover:font-bold">HOME</Link></li>
                                <li><Link to="/headphone" className="hover:text-lightDeep hover:font-bold">HEADPHONES</Link></li>
                                <li><Link to="/speaker" className="hover:text-lightDeep hover:font-bold">SPEAKERS</Link></li>
                                <li><Link to="/earphone" className="hover:text-lightDeep hover:font-bold">EARPHONES</Link></li>
                            </ul>
                        </div>

                        <button className="text-pureWhite text-2xl" onClick={openModal}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </nav>

                    {isMenuOpen && (
                        <div className="md:hidden bg-pureWhite text-black h-full w-full text-center p-5">
                            <ul className="space-y-4">
                                <li><Link to="/" className="hover:text-lightDeep hover:bg-lightBlack hover:rounded hover:p-2">HOME</Link></li>
                                <li><Link to="/headphone" className="hover:text-lightDeep hover:bg-lightBlack hover:rounded hover:p-2">HEADPHONES</Link></li>
                                <li><Link to="/speaker" className="hover:text-lightDeep hover:bg-lightBlack hover:rounded hover:p-2">SPEAKERS</Link></li>
                                <li><Link to="/earphone" className="hover:text-lightDeep hover:bg-lightBlack hover:rounded hover:p-2">EARPHONES</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Shopping Cart</h1>
                            <button 
                                className="text-xl font-bold text-red-500" 
                                onClick={closeModal}
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b pb-4">
                                <div className="flex items-center">
                                    <img src="https://picsum.photos/id/237/150/150" alt="Product" className="w-16 h-16 object-cover rounded-lg" />
                                    <div className="ml-4">
                                        <h2 className="text-lg font-bold">Product Title</h2>
                                        <p className="text-gray-600">Product Description</p>
                                        <div className="flex items-center mt-2">
                                            <span className="mr-2">Quantity:</span>
                                            <div className="flex items-center">
                                                <button className="bg-gray-200 px-2 py-1 rounded-l-lg" disabled>-</button>
                                                <span className="mx-2">1</span>
                                                <button className="bg-gray-200 px-2 py-1 rounded-r-lg" disabled>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="font-bold">$20.00</span>
                            </div>

                            <div className="flex items-center justify-between border-b pb-4">
                                <div className="flex items-center">
                                    <img src="https://picsum.photos/id/237/150/150" alt="Product" className="w-16 h-16 object-cover rounded-lg" />
                                    <div className="ml-4">
                                        <h2 className="text-lg font-bold">Product Title</h2>
                                        <p className="text-gray-600">Product Description</p>
                                        <div className="flex items-center mt-2">
                                            <span className="mr-2">Quantity:</span>
                                            <div className="flex items-center">
                                                <button className="bg-gray-200 px-2 py-1 rounded-l-lg" disabled>-</button>
                                                <span className="mx-2">1</span>
                                                <button className="bg-gray-200 px-2 py-1 rounded-r-lg" disabled>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="font-bold">$15.00</span>
                            </div>
                        </div>

                        <div className="flex justify-end items-center mt-6">
                            <span className="text-gray-600 mr-4">Subtotal:</span>
                            <span className="text-xl font-bold">$35.00</span>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Link 
                                to="/checkout" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
