import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from './Portfolio'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
const Home = () => {
  return (
    <>
    <div className='w-full h-screen bg-gradient-to-b from-black  to-gray-800 text-white via-black'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
    <div className='flex flex-col justify-center h-full mt-11'>
    
    <h2 className='text-5xl font-bold sm:text-7xl py-4 '>Hi i am web developer</h2>
    <p className='text-gray-500 py-4 max-w-md'>Hey there,its me Asim sharma beginner mern stack web developer.You can visit my project by clicking the portfolio button.if you really like my skills then lets talk send me a message or email by fillup contact information</p>
    <div>
    <Link to="/project"  >
    <button className=' bg-gradient-to-r from-cyan-500 to-purple-800 font-bold px-6 py-2 flex items-center rounded-md '>portfolio</button>
    </Link>
    </div>
    
    </div>

    <div className='flex flex-col justify-center h-full mt-11'>
    
    
    
    </div>
   
    </div>
    
    
    </div>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home