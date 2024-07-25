
import React from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Skill from './Component/Skill'
import Education from './Component/Education'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import toast from 'react-hot-toast'
function App() {
  

  return (
    <>
   <div>
   <Navbar/>
     <Home/>
     <About/>
     <Skill/>
     <Education/>
     <Contact/>
     <Footer/>
   </div>
   <toast/>
    </>
  )
}

export default App
