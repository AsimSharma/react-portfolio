import React, { useState } from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom"
import logo from "./assets/2-removebg-preview (1).png"
const Navbar = () => {
  
  const [open,setopen]=useState(false)
  const handleclick=()=>{
    setopen(!open)
  }
  const links= [
       {
        id:1,
        link:"home",

       },
       {
        id:2,
        link:"about",

       },
       {
        id:3,
        link:"portfolio",

       },
       {
        id:4,
        link:"skill",

       },
       {
        id:5,
        link:"contact"

       },



  ]
  return (
    
  <div className='flex justify-between items-center w-full h-20 bg-black text-white fixed px-7'>
  <div>
  <img className='w-40  ' src={logo} alt="" />
  </div>
  <ul className=' hidden md:flex'>
  
     
    <Link to="/">
       <li  className='px-4 hover:scale-125 duration-300 cursor-pointer capitalize font-medium text-gray-500'>
      home
      </li>
      </Link>
      <Link to="/about">
      <li  className='px-4 hover:scale-125 duration-300 cursor-pointer capitalize font-medium text-gray-500'>
      about
      </li>
      </Link>
      <Link to="/project">
      <li  className='px-4 hover:scale-125 duration-300 cursor-pointer capitalize font-medium text-gray-500'>
      projects
      </li>
      </Link>
      <Link to="/skills">
      <li  className='px-4 hover:scale-125 duration-300 cursor-pointer capitalize font-medium text-gray-500'>
      skills
      </li>
      </Link>
      <Link to='contact'>
      <li  className='px-4 hover:scale-125 duration-300 cursor-pointer capitalize font-medium text-gray-500'>
      contact
      </li>
      </Link>


    
  
  
  
  </ul>
 
{/*  mobile view */}
<div onClick={handleclick} className='cursor-pointer text-gray-500 pr-5 z-10 md:hidden' >
{open? <FaTimes size={30}/>:<FaBars size={30}/>}

</div>
{open &&
<ul className='px-4 flex flex-col justify-center items-center absolute bg-black top-0 left-0 w-full h-screen '>


{

  links.map(({ id,  link})=>{
    return <li key={id} className='px-4 py-6 text-4xl flex justify-center list-none capitalize cursor-pointer hover:scale-125 duration-150'>
   {link}
 
    </li>


  })
}

</ul>
}
  </div>
  )
}

export default Navbar