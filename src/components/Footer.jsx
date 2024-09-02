import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-black  p-10'>
                <div className='container mx-auto '>
                    <nav className=' text-white md:flex justify-between '>
                        <div className=' md:w-1/2  w-full md:text-start text-center'>
                        <a href="/" className=' font-bold text-2xl'>audiophile</a>
                        </div>
                        <div className='md:w-1/2 mx-auto items-center text-center my-4 mt-4 md:mt-0 w-full'>
                            <ul className='md:flex mx-auto md:space-x-6 w-full'>
                                <li className='hover:text-lightDeep hover:font-bold py-3 '>HOME</li>
                                <li className='hover:text-lightDeep hover:font-bold py-3 '>HEADPHONES</li>
                                <li className='hover:text-lightDeep hover:font-bold py-3 '>SPEAKERS</li>
                                <li className='hover:text-lightDeep hover:font-bold py-3 '>EARPHONES</li>
                            </ul>
                        </div>
                    </nav>
                    <div className='md:flex justify-between mt-10'>
                        <div className='text-gray-500 md:w-[45%] md:text-start text-center'>
                            <small className=''>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                            </small>
                            <div className='text-gray-500 mt-10' >
                                <p className=''>Copyright 2021. All Rights Reserved</p>
                            </div>
                        </div>
                        <ul className='flex text-white space-x-4 mt-12'>
                            <li className='hover:text-lightDeep hover:font-bold '><i class="fa-brands fa-square-facebook"></i></li>
                            <li className='hover:text-lightDeep hover:font-bold '><i class="fa-brands fa-twitter"></i></li>
                            <li className='hover:text-lightDeep hover:font-bold '><i className='fa-brands fa-instagram'></i></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer