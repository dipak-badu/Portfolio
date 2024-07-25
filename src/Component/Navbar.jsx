import React from 'react'
import { useState } from 'react'
import pic from '../photos/logo.jpg' 
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-scroll';

function Navbar() {
  const [state, setState] = useState(false)

const navItmes =[
  { 
      id:1,
      text: 'Home'
  },
  {
    id :2,
    text: 'About'
  },
  {
    id:3,
    text:'Education'
  },
  {
    id:4,
    text:"Skills"
  },
  {
    id:5,
    text:'Contact'
  }

]

  return (
    <nav className=' max-w-screen-2xl container px-4 m-auto md:px-10 h-13 shadow-lg bg-gray-800 text-white font-montserrat  sticky top-0'> 
    {/* Desktop namvbar  */}
    <div className='  w-full flex justify-between items-center h-13  '>

     <div className='flex space-x-2 items-center'>
        <img src={pic} alt=""  className=' max-h-10 max-w-10 rounded-full object-fit mb-1 '/>
       <div className='font-bold cursor-pointer'>
       <h1>Dipak Badu</h1>
       <p className='text-[12px] text-yellow-500'>Web Developer</p>
       </div>
     </div >
        <div>
        <ul className='  hidden md:flex space-x-5  
        font-semibold  '>
           {navItmes.map(({id, text})=>(
            <li key ={id} className='transition  ease-in-out hover:text-yellow-500 cursor-pointer hover:scale-105 duration-300 '><Link to={text}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass='active'
            >{text}</Link></li>
           ))}
          </ul>
        </div>
        <div className='md:hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-0 justify-center items-cente font-bold ' onClick={() =>setState(!state)}>
        { state?<MdClose size={24}/>: <FiMenu size={24}/>}
        </div>
    </div>
    {/* mobile navbar  */}
    { state && (   <div >
    <ul className=' md:hidden flex flex-col   items-center justify-center  space-y-4 font-semibold   '>
    {navItmes.map(({id, text})=>(
            <li key ={id} className='transition duration-300 ease-in-out hover:text-yellow-500 cursor-pointer' >
              <Link 
              onClick={() =>setState(!state)}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
             activeClass='active'
              >{text}</Link>
              </li>
           ))}
          </ul>
    </div>)}
 
    </nav>
  )
}

export default Navbar
