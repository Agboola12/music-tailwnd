import React from 'react'
import NavBar from './NavBar'
import head from '../assets/01.png'
import headphone from '../assets/headphone.png'
import white from '../assets/white.png'
import headphon from '../assets/headphone.png'
import earphone from '../assets/earphone.png'
import speaker from '../assets/speaker.png'
import human from '../assets/human.jpg'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const HeadPhone = () => {
    return (
        <div>
            <NavBar />

            <div className='bg-black  text-white'>
                <h1 className='text-center p-[2em] text-3xl font-bold'>HEADPHONES</h1>
            </div>

            <div className='container md:flex grid grid-cols-1 gap-9 justify-between mx-auto mt-[4em] px-5'>
                <div className='w-full bg-gray-100 text-center mx-auto'>
                    <img src={head} alt='Yone' className=' object-cover mx-auto text-center ' />
                </div>
                <div className=' w-full rounded-xl'>
                    <div className='md:px-20 px-12 md:mt-24'>
                        <small className='text-lightDeep md:w-full'> NEW PRODUCT</small>
                        <p className='font-bold  text-4xl w-full  '>
                            XX99 Mark II Headphones
                        </p>
                        <div className="  md:w-full mt-4 mb-8">
                            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                        </div>

                        <Link to="/headdetails" className="mt-[10em] p-2 mb-[4em] bg-lightDeep md:text-white text-xl font-semibold">
                            SEE PRODUCT
                        </Link>
                    </div>
                </div>
            </div>


             <div className='container grid grid-cols-1 md:grid-cols-2 gap-9 justify-between mx-auto mt-[9em] mb-[7em] px-5'>
             <div className=' w-full  bg-gray-100 text-center p-10 mx-auto md:hidden block'>
                    <img src={headphone} alt='Headphone' className='object-cover mx-auto text-center ' />
                </div>
                <div className='w-full rounded-xl'>
                    <div className='md:px-20 px-12 md:mt-24'>
                        <p className='font-bold text-4xl'>
                            XX99 Mark I Headphones
                        </p>
                        <div className='md:w-full mt-4'>
                            As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                        </div>
                        <button className='mt-10 p-2 mb-[4em] bg-lightDeep md:text-white text-xl font-semibold'>
                            SEE PRODUCT
                        </button>
                    </div>
                </div>

                <div className=' w-full bg-gray-100 md:flex justify-center items-center hidden '>
                    <img src={headphone} alt='Headphone' className='object-cover h-44 mx-auto text-center ' />
                </div>
            </div> 



            <div className='container md:flex grid grid-cols-1 gap-9 justify-between mx-auto mt-[4em] px-5'>
                <div className='w-full bg-gray-100 text-center mx-auto'>
                    <img src={white} alt='Yone' className=' object-cover mx-auto text-center ' />
                </div>
                <div className=' w-full rounded-xl'>
                    <div className='md:px-20 px-12 md:mt-24'>
                        <p className='font-bold  text-4xl w-full  '>
                            XX59 Headphones
                        </p>
                        <div className=" w-full mt-4">
                            Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                        </div>

                        <button className="mt-10 p-2 mb-[4em] bg-lightDeep md:text-white text-xl font-semibold">
                            GET PRODUCT
                        </button>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4   items-center justify-center  mt-20 mb-[5em]">
                <div className="flex flex-wrap -mx-4 justify-center">

                    <div className="w-full md:w-1/3 px-4 mb-4 relative flex justify-center">
                        <img src={headphon} alt='headphone' className='mx-auto text-center absolute top-0' />
                        <div className="max-w-sm rounded w-[100%] overflow-hidden bg-gray-100 mt-[6em] pt-[3em]">
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
                        <div className="max-w-sm rounded w-[100%] overflow-hidden bg-gray-100 mt-[6em] pt-[3em]">
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
                        <div className="max-w-sm rounded w-[100%] overflow-hidden bg-gray-100 mt-[6em] pt-[3em]">
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

export default HeadPhone