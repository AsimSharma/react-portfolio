import React from 'react'
import asimcv from "./Asimcv.pdf"
const About = () => {
  return (
   <div className="w-full h-screen bg-gradient-to-b from-black to bg-gray-800 via-black text-white flex flex-col justify-cente py-8 px-6 ">
   <div className="">
   
   <div>
   <h1 className='capitalize font-bold text-4xl inline border-b-4 border-gray-500'>about</h1>
   </div>
   <div className='mt-7'>
   <p>Hi there! I'm Asim Sharma, a 22-year-old passionate student pursuing a Bachelor's in Computer Application at Birendra Multiple Campus in Bharatpur, Chitwan. From a young age, I have been fascinated by the world of technology and computers, and my academic journey reflects my dedication to mastering the digital realm.I am excited about the endless possibilities that the digital world offers, and I'm committed to making a difference through my work.</p>
  
   In my spare time, I enjoy exploring the latest technological advancements, participating in hackathons, and contributing to open-source projects. 
   <br />
   <p>if you'd like to connect, collaborate, or discuss anything tech-related, feel free to reach out. Let's build a better, more connected future together!</p>
   <br />
   <p className='font-bold text-red-600 underline'>You can visit my Resume by clicking ta Download cv button.</p>
   
   
   </div>
   </div>
   <div className='mt-10'>
   <a
        href={asimcv}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
   <button className='bg-gradient-to-r from-cyan-500 to-purple-900 font-bold px-6 py-2 flex items-center rounded-md'>Download Cv</button>
   </a>
   </div>
   
   
   
   </div>
  )
}

export default About