import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { BrowserRouter , Routes, Route } from "react-router-dom";

const App = () => {
  return (
 <div>
 





 <BrowserRouter>
 <Navbar/>
 <Routes>

 <Route path='/' element={<Home/>}/>
 <Route path='/project' element={ <Portfolio/>}/>
 <Route path='/about' element={  <About/>}/>
 <Route path='/skills' element={   <Experience/>}/>
 <Route path='/contact' element={   <Contact/>}/>
 </Routes>
 
 
 </BrowserRouter>
 </div>
  )
}

export default App