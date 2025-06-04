import React, { useEffect, useState } from 'react';
import { data, Link } from 'react-router-dom';
import Temp1 from './Temp1';
import Temp2 from './Temp2';
import Temp3 from './Temp3';
import Temp4 from './Temp4';
import Temp5 from './Temp5';
import Temp1design from './Temp1design';


export default function Corosal() {
    const [ChangeData, setChangeData] = useState({});
    const [ChangeData2, setChangeData2] = useState({});
    const [ChangeData3, setChangeData3] = useState({});
    const [ChangeData4, setChangeData4] = useState({});
    const [ChangeData5, setChangeData5] = useState({});

    const [activeIndex, setActiveIndex] = useState(0);

    const mergedData = { ...ChangeData, ...ChangeData2, ...ChangeData3, ...ChangeData4, ...ChangeData5 };


    const slides = [
        { id: 1, component: <Temp1 onSubmitForm={setChangeData}/>},
        { id: 2, component: <Temp2 onSubmitForm={setChangeData2}/>},
        { id: 3, component: <Temp3 onSubmitForm={setChangeData3}/>},
        { id: 4, component: <Temp4 onSubmitForm={setChangeData4}/>},
        { id: 5, component: <Temp5 onSubmitForm={setChangeData5}/>},

        // Add more slides here...
    ];


    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    return (
        <>
            <div className=''>
                <div className='p-5 font-bold  bg-gray-500'>
                    <nav className='flex justify-between'>
                        <div className='flex justify-center items-center gap-1'>
                            <img src="/resumelogo.jpg" className='h-[50px] w-[50px]  rounded-full' alt="" />
                            <h1 className=''><span className='text-emerald-500'>Res</span>ume buil<span className='text-red-700'>ding</span></h1>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <img src="/profileimg.jpg" className='h-[50px] w-[50px] rounded-full' alt="" />
                            <h1 className=''>rakesh</h1>
                        </div>
                    </nav>
                </div>
                <div className='flex flex-col md:flex-row'>

                    <div className="w-full  md:w-1/2 ">

                        {/* Carousel wrapper */}
                        <div className="relative h-screen overflow-hidden rounded-lg">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 flex items-center justify-center duration-700 ease-in-out transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        } ${slide.bgColor}`}
                                >
                                    {slide.component}
                                </div>
                            ))}
                        </div>

                        {/* Controls */}
                        <div className='flex justify-between fixed w-full md:w-1/2 bottom-11'>
                            <button
                                type="button"
                                onClick={handlePrev}
                                className=" top-0 start-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white focus:outline-none">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="top-0 end-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white focus:outline-none">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className='md:w-1/2'>
                        <Temp1design data={mergedData}/>
                        <div className='flex justify-center'>
                            <Link to="/Preview" state={{ data: mergedData }}><button type='button'
                                className='m-1 p-1 rounded-2xl bg-amber-300'>preview & Download</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
