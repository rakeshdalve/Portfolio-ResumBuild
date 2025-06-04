import React from 'react'

export default function Portfolio() {
  const cardItems = [
        {
          id: 1,
          name: "ReactJS",   
          logo: "react-logo.jpg"
        },
        { 
          id: 2,
          name: "Express",
          logo: "ex-logo.jpg"
        },
        {
          id: 3,
          name: "MongoDB",
          logo: "mongo-logo.jpg"
        },
        {
          id: 4,
          name: "NodeJS",
          logo: "node-logo.jpg"
        },
        {
          id: 5,
          name: "C",
          logo: "C-logo.jpg"
        }
      ]
  return (
    <>
         <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-5'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                    <span className='underline font-semibold'>Featured Projects</span>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-6'>
                       {
                        cardItems.map(({id,name,logo})=>(
                            <div className='md:w-[300] md:h-[300] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 hover:bg-slate-100 duration-300' key={id}>
                              <img src={logo} className='w-[120px] h-[120px] p-1 m-1 rounded-full border-[1px]' alt="" />
                              <div>
                                <div className='px-4 font-bold text-xl'>{name}</div>
                                <p className='text-gray-800'>Lorem ipsum dolor sit amet</p>
                              </div> 
                              <div className='space-x-4 justify-around px-4 py-4'>
                                <button className='bg-blue-400 hover:bg-blue-800 text-white font-bold rounded-xl m-2 px-4 py-2'>Video</button>
                                <button className='bg-blue-400 hover:bg-blue-800 text-white font-bold rounded-xl m-2 px-4 py-2'>Source Code</button>
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
