import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import ResumeSlid from './ResumeSlid'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'

export default function Resume() {
    return (
        <>
            <div className='mx-auto  max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-screen-2xl'>
                <Navbar />
                <Home/>
                <About/>
                <Portfolio/>
                <ResumeSlid/>
                <Experience/>
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}
