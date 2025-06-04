import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className='py-10'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <FaLinkedin size={40} className='text-blue-600' />
                            <FaInstagram size={40} className='text-red-600' />
                            <FaSquareFacebook size={40} className='text-blue-600' />
                            <FaTwitter size={40} className='text-blue-600' />
                        </div>
                        <div className='mt-8 border-t border-gray-500 flex flex-col pt-5 items-center'>
                            <p>&copy; 2025 your company. All right reserved.</p>
                            <p>&copy; Supportive Partner &#10084; Rakesh</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
