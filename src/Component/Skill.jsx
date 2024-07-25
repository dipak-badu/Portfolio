import React from 'react'
import { SiHtmx } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";



function Skill() {
  const skills = [
    { language: 'JavaScript', percentage: 70 },
    { language: 'HTML', percentage: 90 },
    { language: 'CSS', percentage: 80 },
    { language: 'React', percentage: 60 },
    
  ];
  return (
    <>
      <div name='Skills'
      className='max-w-screen-2xl container px-4 m-auto md:px-10'>
        <div>
            <h1 className='text-center text-2xl md:text-3xl font-semibold'>Skills</h1>
            <p className='text-yellow-400 text-center'>My technical skills</p>
        </div>
        
        <div className=' flex flex-col mt-12 justify-center items-center  gap-28 md:flex-row '>
            <div className='  flex flex-col space-y-6 '>
             <div className='flex font-sans  space-x-4 hover:scale-105 duration-300'>
               <SiHtmx className='text-4xl'/>
               <span>
                <h1 className='text-2xl font-semibold'>Frontend Developer</h1>
                <p className='text-yellow-400'>1+ year experience</p>
               </span>
             </div>
              
             {/* backend  */}
             <div  className='flex font-sans  space-x-4 hover:scale-105 duration-300'>
              <FaDatabase className='text-4xl'/>
              <span>
                <h1 className='text-2xl font-semibold'>Backend developer</h1>
                <p className='text-yellow-400'>Just started</p>
              </span>
             </div>
             </div>
             
             <div className=" box-shadow">
      <div className="w-auto h-auto border rounded p-4 shadow-md hover:scale-105 duration-300">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">Programming Language Knowledge</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1 text-lg md:text-xl">
              <span>{skill.language}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-yellow-600 h-4 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>

        <div className='text-center my-10 hover:scale-105 duration-200'>
          <a href="" className='border px-4 py-2 rounded-md text-gray-300 bg-yellow-600  '> Download CV 
            
          </a>
        </div>
      </div>

    
    </>
  )

}

export default Skill
