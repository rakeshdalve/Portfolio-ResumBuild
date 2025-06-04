import React from 'react'

export default function About() {
  return (
    <>
       <div name="About" className='bg-slate-100 max-w-screen-2xl container mx-auto px-4 py-4 md:px-10 md:py-5'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 mt-12 md:mt-10 space-y-2 order-2 md:order-1'>
            <h1 className='text-3xl font-bold mb-5'>
              About
            </h1>
            <p> 
              Hellow, I am Rakesh, a passionate web devloper with a keen eye for MERN
              Stack. with a background in IT, I strive to create a impactful and
              visually stunning Software solution that leave a lasting impression.
            </p>
            <br />
            <br />
            {/* All Education */}
            <h1 className='text-green-600 font-semibold text-xl'>
              Education
            </h1>
            <span>
              [degree/certification],[institution],[year] [degree/certification],
              [institution], [year] [relevant course], [plaform/institution],[year]
            </span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>
              Skills & expertise
            </h1>
            <span>
              Proficient in C Language Experienced with MERN
            </span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>
              Achivements & Awards
            </h1>
            <span>
              [degree/certification],[institution],[year] [degree/certification],
              [institution], [year] [relevant course], [plaform/institution],[year]
            </span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>
              Mission Statement
            </h1>
            <p>
              My Mission is to leverage my Skills and creativity to deliver
              innovative web solutions that exceed client expectation and
              contribute positively to the digital landscape. I am committed to
              continuous learning and growth, always seeking new challenges and
              opportunities to expand my horizons.
            </p>
          </div>
          <div className='md:w-1/2 md:ml-50 mt-4 md:mt-5 order-1'>
               <img src="profileimg.jpg" className='bg-cover rounded-full' alt="" />
           </div>
        </div>
      </div>
      <hr /> 
    </>
  )
}
