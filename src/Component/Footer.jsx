import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className='py-10 bg-gray-800 shadow-md'>
      <div>
        <div className='flex items-center justify-center space-x-6'>
        <a href="https://www.facebook.com/dipak.badu.524?mibextid=ZbWKwL"   target='_blank'>
                    <FaSquareFacebook className='hover:scale-105 duration-300 text-yellow-500' size={30}/>
                  </a>
                  <a href="https://www.instagram.com/dipak.badu22/" target='_blank'>
                    <FaSquareInstagram className='hover:scale-105 duration-300 text-yellow-500' size={30}/>
                  </a>
                  <a href="https://www.linkedin.com/in/dipak-b-244184260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                    <FaLinkedin className='hover:scale-105 duration-300 text-yellow-500' size={30}/>
                  </a>
                  <a href="https://github.com/dipak-badu" target='_blank'>
                    <FaGithubSquare className='hover:scale-105 duration-300 text-yellow-500' size={30}/>
                  </a>
        </div>
        <div className='h-[2px] w-[440px] bg-gray-100 px-20 mt-6 text-center m-auto rounded-lg mb-4'></div>
        <div className='text-center'>
            <p>&copy;  2024  All rights reserved |</p>
            <p>Suppoted with ❤ Dipak</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
