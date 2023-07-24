import React from 'react'
import bgimage from "../components/assets/resize-16896634701287024831HeaderImage.jpg"
import bgimage1 from "./assets/download.png"
import bgimage2 from "./assets/images.png"
const Portfolio = () => {
  // const projects=[
  //   {
  //     id:1,
  //     Name:"Nepali Market",
  //     Description:"Buy and sell product",
  //     src: bgimage
  //   },
  //   {
  //     id:1,
  //     Name:"Food Garage",
  //     Description:"Delivery food online",
  //     src:bgimage1
  //   },
  //   {
  //     id:1,
  //     Name:"Attendence System",
  //     Description:"Attend student in school online",
  //    src:bgimage1
  //   },
  //   {
  //     id:1,
  //     Name:"Nepali Market",
  //     Description:"Buy and sell product",
  //     src:bgimage
  //   },
  // ]
return(

  <section className="bg-gradient-to-b from-black to-gray-800 w-full h-auto py-8 lg:h-screen">
      <div className="container mx-auto px-4 ">
        <h1 className="text-2xl font-bold mb-4 text-white">my projects</h1>
       
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 py-2 ">
          {/* Add your product cards here */}
          {/* Example card */}
          <div className="bg-gradient-to-b from-slate-600 to-white shadow-md rounded-lg p-4 hover:scale-105 duration-150 cursor-pointer">
           <img
              src={bgimage}
              alt="project"
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold">Nepali Market</h3>
            <p className="text-gray-600">Buy and sell product online.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-slate-600 scale-90 duration-150">
              Visit
            </button>
          </div>
          <div className="bg-gradient-to-b from-slate-600 to-white shadow-md rounded-lg p-4 hover:scale-105 duration-150 cursor-pointer">
          <img
             src={bgimage2}
             alt="project"
             className="w-full h-32 object-cover mb-4 rounded"
           />
           <h3 className="text-xl font-bold">Attendance sytem</h3>
           <p className="text-gray-600">School student attendence system</p>
           <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md  hover:bg-slate-600 scale-90 duration-150">
             Visit
           </button>
         </div>
         <div className="bg-gradient-to-b from-slate-600 to-white shadow-md rounded-lg p-4 hover:scale-105 duration-150 cursor-pointer">
         <img
            src={bgimage1}
            alt="project"
            className="w-full h-32 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-bold">Food garage</h3>
          <p className="text-gray-600">Delivered food online </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md  hover:bg-slate-600 scale-90 duration-150">
            Visit
          </button>
        </div>
        <div className="bg-gradient-to-b from-slate-600 to-white shadow-md rounded-lg p-4 hover:scale-105 duration-150 cursor-pointer">
        <img
           src={bgimage2}
           alt="project"
           className="w-full h-32 object-cover mb-4 rounded"
         />
         <h3 className="text-xl font-bold">Attendance sytem</h3>
         <p className="text-gray-600">School student attendence system</p>
         <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md  hover:bg-slate-600 scale-90 duration-150">
           Visit
         </button>
       </div>
          
          
        </div>
        
      </div>
    </section>

)
}

export default Portfolio
