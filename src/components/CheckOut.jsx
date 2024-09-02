import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setIsModalOpen(true);
    };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate("/"); 
    };
    return (
        <div>
            <NavBar/>

            <div className="bg-gray-300">
                <div className="w-full max-w-3xl mx-auto p-8">
                    <div className="bg-white p-8 rounded-lg shadow-md border">
                        <h1 className="text-3xl font-bold text-center mb-4">Checkout</h1>

                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first_name" className="block mb-1">First Name</label>
                                    <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3"/>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-1">Last Name</label>
                                    <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3"/>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="address" className="block mb-1">Address</label>
                                <input type="text" id="address" className="w-full rounded-lg border py-2 px-3"/>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="city" className="block mb-1">City</label>
                                <input type="text" id="city" className="w-full rounded-lg border py-2 px-3"/>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label htmlFor="state" className="block mb-1">State</label>
                                    <input type="text" id="state" className="w-full rounded-lg border py-2 px-3"/>
                                </div>
                                <div>
                                    <label htmlFor="zip" className="block mb-1">ZIP Code</label>
                                    <input type="text" id="zip" className="w-full rounded-lg border py-2 px-3"/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
                            <div className="mt-4">
                                <label htmlFor="card_number" className="block mb-1">Card Number</label>
                                <input type="text" id="card_number" className="w-full rounded-lg border py-2 px-3"/>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label htmlFor="exp_date" className="block mb-1">Expiration Date</label>
                                    <input type="text" id="exp_date" className="w-full rounded-lg border py-2 px-3"/>
                                </div>
                                <div>
                                    <label htmlFor="cvv" className="block mb-1">CVV</label>
                                    <input type="text" id="cvv" className="w-full rounded-lg border py-2 px-3"/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button onClick={openModal} className="bg-lightDeep w-full text-white px-4 py-2 rounded-sm font-bold text-xl uppercase">Continue & Pay</button>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="relative  w-full max-w-md">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="p-8 px-5 md:p-10 text-center">
                                <i class="fa-solid fa-check bg-lightDeep p-5 rounded-full text-white ml-5 mb-4 text-start"></i>
                                <h2 className='font-bold text-2xl w-full'>  THANK YOU FOR YOUR ORDER  </h2>
                                <h3 className="mb-5 font-normal text-gray-500 dark:text-gray-400">
                                You will receive an email confirmation shortly.
                                </h3>
                                <button
                                    onClick={closeModal}
                                    type="button"
                                    className="py-3 px-5 text-sm font-bold w-full  focus:outline-none bg-lightDeep text-white rounded-lg "
                                >
                                    BACK TO HOME
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer/>
        </div>
    )
}

export default CheckOut;
