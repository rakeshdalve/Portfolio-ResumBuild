import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export default function Home() {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-[url('/coderimg.jpg')] bg-cover max-w-md bg-center h-screen md:h-200 w-full">
                <div className='flex flex-col md:flex-row'>
                    <div className='text-white md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome To My Portfolio</span>
                        <div className=' text-2xl md:text-4xl'>
                            <h1>Hellow, I am a _</h1>
                            {/* <span className='text-green-600 font-bold'>Coder</span> */}
                            <h1>
                                <ReactTyped
                                    className='text-green-600 font-bold'
                                    strings={["Coder", "Programmer", "Developer"]}
                                    typeSpeed={40}
                                    loop={true}
                                />
                            </h1>
                        </div>
                        <br />
                        <p className='text-sm md:text-md text text-justify'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, temporibus. Quos voluptates tempora sed aspernatur perferendis aut eveniet provident quo esse. Quia blanditiis,
                            nihil explicabo quos porro reprehenderit beatae eligendi.
                            Nesciunt nobis, eligendi consectetur vero quam tempora dolore nam.
                        </p>
                        <br />
                        {/* social media and work*/}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2 flex flex-col items-center mx-5 py-5'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.facebook.com/login.php" target='_blank'><FaSquareFacebook className='text-2xl cursor-pointer bg-blue-400' /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/home" target='_blank'><FaLinkedin className='text-2xl cursor-pointer  bg-blue-400' /></a>
                                    </li>
                                    <li>
                                        <a href="https://telegram.org/" target='_blank'> <FaTelegramPlane className='text-2xl cursor-pointer  bg-blue-400' /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.whatsapp.com/" target='_blank'><IoLogoWhatsapp className='text-2xl cursor-pointer  bg-green-600' /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2 flex flex-col items-center mx-5 py-5'>
                                <h1 className='font-bold'>Working on</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <SiMongodb className='text-2xl text-green-500 bg-white md:text-3xl hover:scale-110 duration-200 rounded-full' />
                                    </li>
                                    <li>
                                        <SiExpress className='text-2xl md:text-3xl text-gray-500 bg-white hover:scale-110 duration-200 rounded-full' />
                                    </li>
                                    <li>
                                        <FaReact className='text-2xl md:text-3xl bg-black text-blue-400 hover:scale-110 duration-200 rounded-full' />
                                    </li>
                                    <li>
                                        <FaNodeJs className='text-2xl md:text-3xl text-green-400 bg-white hover:scale-110 duration-200 rounded-full' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 mt-8 md:mt-15 order-1'>
                        {/* <img src="coderimg.jpg" className='bg-cover' alt="" /> */}
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
