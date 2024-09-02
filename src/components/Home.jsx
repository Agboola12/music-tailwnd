import React from 'react'
import NavBar from './NavBar'
import headphone from '../assets/headphone.png'
import earphone from '../assets/earphone.png'
import speaker from '../assets/speaker.png'
import speak from '../assets/speak.png'
import YOne from '../assets/00.png'
import human from '../assets/human.jpg'
import image from '../assets/Bitmap.jpg';
import Footer from './Footer'


const Home = () => {

    return (
        <div>
            <NavBar />
            <div className='bg-lightBlack h-auto'>

                <div className='hidden lg:block'>

                    <div className=' container mx-auto flex flex-wrap justify-center items-center '>
                        <div className='w-full lg:w-5/12'>
                            <p className='text-gray-400 space-x-2 font-extralight'>NEW PRODUCT</p>
                            <h1
                                className=" text-lightWhite text-5xl font-bold ">
                                XX99 Mark II  <br /> Headphones
                            </h1>
                            <p className=" text-lightGray mt-5">
                                Experience natural, life like audio and exceptional <br /> build quality made for the passionate music <br /> enthusiast.
                            </p>
                            <button className="p-3 text-xl font-semibold mt-10 mx-auto text-lightWhite bg-lightDeep "> SEE PRODUCT</button>
                        </div>
                        <div className='border-none w-full lg:w-7/12 '>
                            <img src={image} alt="" className='border-none mx-auto w-[100%] h-[85vh] ' />
                        </div>
                    </div>
                </div>

                <div className='container header mx-auto lg:hidden'>
                    <div className='mt-[10em]'>
                        <p className='text-center text-gray-400 space-x-2 font-extralight'>NEW PRODUCT</p>
                        <h1
                            className="text-center text-lightWhite text-5xl font-bold ">
                            XX99 Mark II  <br /> Headphones
                        </h1>
                        <p className="text-center  text-lightGray mt-5">
                            Experience natural, life like audio and exceptional <br /> build quality made for the passionate music <br /> enthusiast.
                        </p>
                        <div className='text-center'>
                            <button className="p-3 text-xl  font-semibold mt-10  text-lightWhite bg-lightDeep "> SEE PRODUCT</button>
                        </div>
                    </div>

                </div>
            </div>



            <div className="mx-auto flex bg-pureWhite items-center justify-center  mt-20 mb-[5em]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4 justify-center">

                        <div className="w-full md:w-1/3 px-4 mb-4 relative flex justify-center">
                            <img src={headphone} alt='headphone' className='mx-auto text-center absolute top-0' />
                            <div className="max-w-sm rounded w-[100%] overflow-hidden bg-gray-200 mt-[6em] pt-[3em]">
                                <div className="px-6 py-4 mt-5 text-center">
                                    <div className="font-bold text-xl mb-2 text-center">HEADPHONE</div>
                                    <span className="inline-block px-3 py-1 text-sm font-bold mr-2 mb-2">
                                        SHOP
                                        <a href="" className='ml-5 text-sm font-extrabold text-lightDeep'>&gt;</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 px-4 mb-4 relative flex justify-center">
                            <img src={speaker} alt='speaker' className='mx-auto text-center absolute top-0' />
                            <div className="max-w-sm rounded w-[100%] overflow-hidden bg-gray-200 mt-[6em] pt-[3em]">
                                <div className="px-6 py-4 mt-5 text-center">
                                    <div className="font-bold text-xl mb-2 text-center">SPEAKER</div>
                                    <span className="inline-block px-3 py-1 text-sm font-bold mr-2 mb-2">
                                        SHOP
                                        <a href="" className='ml-5 text-sm font-extrabold text-lightDeep'>&gt;</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 px-4 mb-4 relative flex justify-center">
                            <img src={earphone} alt='earphone' className='mx-auto text-center absolute top-0' />
                            <div className="max-w-sm rounded w-[100%] overflow-hidden bg-gray-200 mt-[6em] pt-[3em]">
                                <div className="px-6 py-4 mt-5 text-center">
                                    <div className="font-bold text-xl mb-2 text-center">EARPHONE</div>
                                    <span className="inline-block px-3 py-1 text-sm font-bold mr-2 mb-2">
                                        SHOP
                                        <a href="" className='ml-5 text-sm font-extrabold text-lightDeep'>&gt;</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-pureWhite px-5'>
                <div className='container bg-lightDeep  mt-[4em] pt-8 md:p-0 mb-[4em] mx-auto'>
                    <div className='md:flex justify-around px-10 mx-auto'>

                        <div className='text-center'>
                            <img src={speaker} alt="speaker" className='md:mt-[87px] w-36  object-cover md:w-[246px] mx-auto md:absolute' />
                        </div>

                        <div className='md:mt-14 md:text-left text-center' >

                            <p className='text-pureWhite font-extrabold md:w-11 text-5xl'>ZX9 SPEAKER</p>
                            <div className="text-pureWhite  md:w-80 mt-4">
                                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable  sound.
                            </div>
                            <div className='py-5'>
                                <button className="mb-10 md:mt-0  p-3 text-md font-semibold text-pureWhite bg-black">
                                    SEE PRODUCT
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <div className='bg-pureWhite px-5'>
                <div className='container mx-auto mb-16  bg-gray-400'>
                    <div className='flex justify-center  items-center'>
                        <div className='md:w-1/2 w-full mb-5 text-center'>
                            <p className='md:font-extrabold font-bold text-2xl md:text-3xl'>ZX7 SPEAKER</p>
                            <button className="mt-5 p-4 text-md font-semibold border-2 border-gray-800">
                                SEE PRODUCT
                            </button>
                        </div>

                        <div className='flex justify-center md:w-full w-2/3 text-start mx-auto'>
                            <img src={speak} alt="speak" className='mx-auto  h-56 object-cover' />
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-pureWhite mb-[7em] px-5 '>
                <div className='container md:flex grid grid-cols-1 gap-9 justify-between mx-auto '>
                    <div className='w-full'>
                        <img src={YOne} alt='Yone' className='w-full h-80 rounded-xl ' />
                    </div>
                    <div className=' w-full  bg-gray-200  rounded-xl'>
                        <div className='md:px-20 px-12'>
                            <p className='md:font-extrabold font-semibold text-3xl w-full mt-24 '>YX1 EARPHONES</p>
                            <button className="mt-5 p-2 mb-[4em] md:bg-black border border-black md:text-white text-xl font-semibold">
                                SEE PRODUCT
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto md:flex  md:gap-10  justify-center px-5'>
                <div className='md:hidden block w-full'>
                    <img src={human} alt="human" className='h-[60vh] object-cover  ml-auto' />
                </div>
                <div className=' w-full  mt-[6em]'>
                    <h1 className='font-bold text-3xl  sm:mb-8'>BRINGING YOU THE <br /> BEST AUDIO GEAR</h1>
                    <small className='text-gray-500 w-full '>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </small>
                </div>
                <div className=' w-full md:block hidden'>
                    <img src={human} alt="human" className='h-[60vh] object-cover  ml-auto' />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home