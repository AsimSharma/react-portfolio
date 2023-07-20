import React from 'react'
import bgimage from "../components/assets/resize-16896634701287024831HeaderImage.jpg"
import bgimage1 from "./assets/download.png"
import bgimage2 from "./assets/images.png"
const Portfolio = () => {
  return (
    <>
    <div className='w-full h-screen bg-gradient-to-b from-black  to-gray-800 text-white via-black px-4 py-2 flex flex-col justify-center items-start md:h-screen '>
    <h1 className='mx-9 font-bold inline border-b-4 border-gray-500 text-4xl'>My Projects</h1>
    <div className='py-4 m-4 flex justify-between items-center '>
   
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white py-6 pb-5 mx-6 cursor-pointer hover:scale-105 duration-150 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
    <img className="" src={bgimage} alt="" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">title</div>
      <p className="text-gray-700 text-base">Nepali Market</p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
       Buy and sell 
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
       visit
      </span>
    </div>
    </div>
 
  <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white py-6 pb-5 cursor-pointer hover:scale-105 duration-150 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
  <img className="" src={bgimage1} alt="" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">title</div>
    <p className="text-gray-700 text-base">Food garage</p>
  </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      Delivered food
    </span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
     visit
    </span>
  </div>
</div>

<div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white py-6  mx-6 cursor-pointer hover:scale-105 duration-150 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  ">
<img className="" src={bgimage2} alt="" />
<div className="px-6 py-4">
  <div className="font-bold text-xl mb-2">title</div>
  <p className="text-gray-700 text-base">Attendance System</p>
</div>
<div className="px-6 py-4">
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    for School attendance
  </span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
   visit
  </span>
</div>

</div>
<div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white py-6 pb-5 cursor-pointer hover:scale-105 duration-150 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
  <img className="" src={bgimage1} alt="" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">title</div>
    <p className="text-gray-700 text-base">Food garage</p>
  </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      Delivered food
    </span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
     visit
    </span>
  </div>
</div>
</div>
  </div>
  </>
  )
}

export default Portfolio