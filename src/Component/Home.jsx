import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import pic from '../photos/logo.jpg' 
import { ReactTyped } from "react-typed";


function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container px-4 m-auto md:px-10 my-20 mt-20 '>


        <div className=' flex flex-col md:flex-row justify-center items-center'>
            <div className='md:w-1/2 font-serif mt-20 order-2 md:order-1 md:ml-14'>
            <div className=' flex flex-col space-y-2'>
                 
             <h1 className=' font-bold text-3xl md:text-4xl text-center'>Hi, I'm Dipak Badu</h1> 
             {/* <span className='  '>Web Devloper</span> */}
             <ReactTyped
          
          strings={[" Web Developer" , 'Coder', 'programmer']}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
          className='text-2xl font-semibold md:text-3xl text-yellow-300 text-shadow-custom text-center '
          />
             <br />
             <p className=' text-base text-justify    font-semibold  md:text-lg'>Welcome to my portfolio! I'm a passionate and aspiring web developer excited to create engaging and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I'm eager to apply my skills to real-world projects and continuously learn and grow in this dynamic field.</p>
             <br />



                  {/* sccial media  */}

                <div className=' flex flex-col  gap-6  items-center  md:flex-row md:justify-around md:items-center'>
                  {/* available  */}
                   
                <div  className=' space-y-2'> 
                <p  className=' font-sans font-bold  font-lg md:text-xl'>Available On</p>
                <ul className=' flex space-x-4 text-2xl md:text-3xl text-gray-400'>
                  <a href="https://www.facebook.com/dipak.badu.524?mibextid=ZbWKwL"   target='_blank'>
                    <FaSquareFacebook className='hover:scale-105 duration-300 text-yellow-500'/>
                  </a>
                  <a href="https://www.instagram.com/dipak.badu22/" target='_blank'>
                    <FaSquareInstagram className='hover:scale-105 duration-300 text-yellow-500'/>
                  </a>
                  <a href="https://www.linkedin.com/in/dipak-b-244184260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                    <FaLinkedin className='hover:scale-105 duration-300 text-yellow-500'/>
                  </a>
                </ul>
                </div>
                {/* working on  */}

                <div className=' space-y-2'>
                  <p   className=' font-sans font-bold text-lg md:text-xl'>Working On</p>
                  <ul className='flex space-x-4 text-2xl md:text-3xl text-gray-400'>
                  <SiJavascript className='hover:scale-105 duration-300 text-yellow-500'/>
                   <BiLogoTailwindCss className='hover:scale-105 duration-300 text-yellow-500'/>
                   <FaReact className='hover:scale-105 duration-300 text-yellow-500'/>
                   
                  </ul>
                </div>

                </div>
                       
            </div>
            </div> 

            {/* right  */}
            <div className=' md:w-1/2 md:ml-20 md:mt-20 order-1'>
                <img src={pic} alt="" className='rounded-full Md: w-[450px] md:h-[450px]' />
            </div>
        </div>
    </div>
    <br />

    </>
  )
}

export default Home;
