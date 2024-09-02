import React from 'react'
import NavBar from './NavBar'
import speakk from '../assets/speakk.png'

// import head from '../assets/01.png'
import Footer from './Footer'
import human from '../assets/human.jpg'
import bit from '../assets/Bit.png'
import headphone from '../assets/Bitmap.jpg';
import header from '../assets/headphone.png'
import white from '../assets/white.png'
import speaker from '../assets/speaker.png'
import speak from '../assets/speak.png'
import Bitmap01 from '../assets/Bitmap01.png'
import Bitmap02 from '../assets/Bitmap02.png'
import Bitmap11 from '../assets/Bitmap11.png'
import earphone from '../assets/earphone.png'
import ee from '../assets/1.png'
import phone from '../assets/2.png'
import ear from '../assets/3.png'






const EarPhoneDetails = () => {
    return (
        <div>
            <NavBar />


            <div className='container mx-auto mt-[4em] px-3'>
                <a href='/EarPhone' className='text-black '>Go Back</a>

                <div className='md:flex grid grid-cols-1 gap-9 justify-between mt-[2em] px-5'>
                    <div className='w-full bg-gray-100 text-center mx-auto'>
                    <img src={earphone} alt='Headphone' className='object-cover  mx-auto text-center ' />

                    </div>
                    <div className=' w-full rounded-xl'>
                        <div className='md:px-20 px-12 md:mt-24'>
                            <small className='text-lightDeep md:w-full'> NEW PRODUCT</small>
                            <p className='font-bold  text-4xl w-full  '>
                                XX99 Mark II Headphones
                            </p>
                            <div className="  md:w-full mt-4">
                                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                            </div>
                            <p className='font-bold text-xl'>$ 2,999</p>
                            <button className="mt-10 p-2 mb-[4em] bg-lightDeep md:text-white text-xl font-semibold">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-5'>
                <div className='md:flex grid grid-flow-cols-1 justify-between mt-[3em] px-5'>
                    <div className='md:w-full mb-10'>
                        <h1 className='font-bold text-2xl mb-6'>FEATURES</h1>
                        <p >
                            As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
                        </p>
                        <p>
                            From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
                        </p>
                    </div>
                    <div className='w-full md:mt-9'>
                        <div className='md:px-[8em] w-full  '>
                            <h1 className='font-bold text-2xl mb-5'>IN THE BOX</h1>
                            <p> <span className='text-yellow-500 font-bold mr-3'>1x</span><span>Headphone Unit</span></p>
                            <p> <span className='text-yellow-500 font-bold mr-3'>2x</span><span>Replacement Earcups</span></p>
                            <p> <span className='text-yellow-500 font-bold mr-3'>3x</span><span>User Manual</span></p>
                            <p> <span className='text-yellow-500 font-bold mr-3'>4x</span><span>3.5mm 5m Audio Cable</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto'>
                <div className='md:flex grid grid-flow-cols-1 justify-between mt-[4em]'>
                    <div className='w-full'>
                        <div className='px-5 py-3'>
                            <img src={ee} alt='human' className=' object-cover' />
                        </div>
                        <div className='w-full px-5 py-1'>

                            <img src={phone} alt='human' className='w-full object-cover' />
                        </div>
                    </div>
                    <div className='w-full p-3'>
                        <img src={ear} alt='human' className='object-cover md:h-full' />
                    </div>
                </div>
            </div>

            <div className='container mx-auto mt-[3em] px-5'>
                <h1 className='text-center font-bold mb-5 text-2xl'>YOU MAY ALSO LIKE</h1>
                <div className='md:grid grid-cols-3 gap-10'>

                <div className='grid grid-flow-cols-2 text-center'>    
                    <div className=' w-full  bg-gray-100 text-center mx-auto md:py-9 py-6'>
                    <img src={header} alt='Head' className='object-cover h-36   mx-auto text-center' />
                    </div>
                     <p className='my-3 font-bold'>ZX9 SPEAKER</p>
                     <button className='py-2 w-1/2 mx-auto md:mb-0 mb-10 my-2 bg-lightDeep text-white'>SEE PROJECT</button>

                </div>

                <div className='grid grid-flow-cols-2 text-center'>    
                    <div className=' w-full  bg-gray-100 text-center mx-auto md:py-9 py-6'>
                    <img src={white} alt='Head' className='object-cover h-36   mx-auto text-center' />
                    </div>
                     <p className='my-3 font-bold'>XX99 MARK I</p>
                     <button className='py-2 w-1/2 mx-auto md:mb-0 mb-10 my-2 bg-lightDeep text-white'>SEE PROJECT</button>

                </div>

                <div className='grid grid-flow-cols-2 text-center'>    
                    <div className=' w-full  bg-gray-100 text-center mx-auto md:py-9 py-6'>
                    <img src={speaker} alt='Head' className='object-cover h-36   mx-auto text-center' />
                    </div>
                     <p className='my-3 font-bold'>XX59</p>
                     <button className='py-2 w-1/2 mx-auto md:mb-0 mb-10 my-2 bg-lightDeep text-white'>SEE PROJECT</button>

                </div>
                </div>
            </div>




            <div className='container mx-auto md:flex  md:gap-10  justify-center px-5 mt-[7em]'>
                <div className=' w-full  mt-[6em] mb-10'>
                    <h1 className='font-bold text-3xl  sm:mb-8'>BRINGING YOU THE <br /> BEST AUDIO GEAR</h1>
                    <small className='text-gray-500 w-full '>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </small>
                </div>
                <div className=' w-full '>
                    <img src={human} alt="human" className='h-[60vh] object-cover  ml-auto' />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default EarPhoneDetails