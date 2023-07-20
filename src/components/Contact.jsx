import React from 'react'

const Contact = () => {
  return (
    
    <div className='w-full h-screen flex flex-col justify-between  bg-gradient-to-b from-black to-gray-800 text-white px-6 py-8'>
    <div>
    <h1 className='capitalize font-bold text-4xl inline border-b-4 border-gray-500'>contact information</h1>
    </div>
    
    
          <div name ="contact" className='flex-1 my-8 py-8 bg-gradient-to-b from-cyan-500 to-purple-900 rounded-xl   justify-between items-center '>
          

          
             <form action='https://getform.io/f/ea0d2615-cb77-49b9-8cd3-992ee466bfce' method='post'>
             <div className=' flex flex-col justify-center items-center py-12 my-12 m-4 rounded-xl'>
    
                     <div className=' rounded-xl '>
    
                            <div className=''>

                            <h1 className=''>Name</h1>
   
                            <input name='fullname' className='rounded focus:outline-none text-black ' type="text" placeholder='Enter your name' />
    
    
                            </div>
    
                            <div className='py-4'>
    
                            <h1>Email</h1>
    
                            <input name='email' className='rounded focus:outline-none text-black' type="text" placeholder='Enter your email' />
    
   
                            </div>
    
                            <div>
   
                            <h1>Phone</h1>
    
                            <input name='phone' className='rounded  border-transparen my-2 focus:outline-none text-black ' type="text" placeholder='Enter your phone' />
    
    
                            </div>
                                                       
                    </div>
             
                   
             <button className='hover:scale-125 duration-300 cursor-pointer capitalize font-bold  inline border-b-2 border-green-500'>Lets talk</button>
              
   
                 </div>
           
                 </form>
                 
          
                
             </div>
            
         </div>
      
  )
}

export default Contact