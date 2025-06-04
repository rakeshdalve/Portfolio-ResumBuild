import React, { useState } from 'react'
import { MdMenuOpen } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';

export default function Navbar() {
    const [menu, setmenu] = useState(true);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Resumebuild"
        },
        {
            id: 5,
            text: "Experience"
        },
        {
            id: 6,
            text: "Contact"
        }
    ]
    return (
        <>
            <div className='max-w-screen-2xl z-1 container mx-auto bg-white px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0'>
                <div className='flex justify-between h-16 items-center'>
                    <div className='flex'>
                        <img src="/profileimg.jpg" alt="" className='h-12 w-12 rounded-full m-2' />
                        <h1 className='font-semibold text-xl cursor-pointer '>rakesh
                            <p className='text-sm'>web developer</p>
                        </h1>
                    </div>
                    {/* dekstop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-7'>
                            {
                                navItems.map(({ id, text }) => (

                                    <li className="hover:scale-125 duration-500 cursor-pointer group transition-all ease-in-out" key={id} href="#">
                                        <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-pink-500 bg-[length:0%_2px]
                             bg-no-repeat group-hover:bg-[length:100%_2px] transition-all 
                             duration-500 ease-out">
                                            <Link to={text}
                                                smooth={true}
                                                duration={400}
                                                offset={-70}
                                                activeClass='active'>
                                                {text}
                                            </Link>
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div onClick={() => setmenu(!menu)} className='md:hidden'>
                            {menu ? <MdMenuOpen className='text-4xl' /> : <MdClose className='text-4xl' />}
                        </div>
                    </div>
                </div>
                {/* mobile navbar */}
                {
                    !menu && (
                        <div className='bg-white'>
                            <ul className='md:hidden flex flex-col h-screen justify-center items-center space-y-5'>
                                {
                                    navItems.map(({ id, text }) => (
                                        <li className='hover:scale-100 duration-200 font-bold cursor-pointer text-2xl' key={id}>
                                            <Link
                                                onClick={() => setmenu(!menu)}
                                                to={text}
                                                smooth={true}
                                                duration={400}
                                                offset={-70}
                                                activeClass='active'>
                                                {text}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}
