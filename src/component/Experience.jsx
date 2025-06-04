import React from 'react'

export default function Experience() {
    const cardItems = [
        {
            id: 1,
            name: "HTML",
            logo: "html-logo.jpg"
        },
        {
            id: 2,
            name: "CSS",
            logo: "CSS-logo.jpg"
        },
        {
            id: 3,
            name: "JS",
            logo: "JS-logo.jpg"
        },
        {
            id: 4,
            name: "REACT",
            logo: "react-logo.jpg"
        },
        {
            id: 5,
            name: "ExpressJS",
            logo: "ex-logo.jpg"
        },
        {
            id: 6,
            name: "NodeJS",
            logo: "node-logo.jpg"
        },

        {
            id: 7,
            name: "MONGODB",
            logo: "mongo-logo.jpg"
        },
        {
            id: 8,
            name: "C",
            logo: "C-logo.jpg"
        }
    ]
    return (
        <>
            <div name="Experience" className='bg-slate-100 max-w-screen-2xl container mx-auto px-4 md:px-10 py-10'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                    <span className='underline font-semibold'>I have 6 months expperience in below technologies</span>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-3 my-6'>
                        {
                            cardItems.map(({ id, name, logo }) => (
                                <div className='md:w-[300] md:h-[300] rounded-4xl flex flex-col items-center p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
                                    <img src={logo} className='w-[120px] h-[120px] p-1 m-1 rounded-full border-[1px]' alt="" />
                                    <div>
                                        <div className='px-4 font-bold text-xl items-center'>{name}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
