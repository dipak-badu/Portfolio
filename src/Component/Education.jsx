import { data } from 'autoprefixer'
import React from 'react'

function Education() {
  const eduaction =[
    {
      date: '2022-Present',
    degree: 'Bachelor in Computer Science and Information Technology (BSc.CSIT)',
    university: 'TRIBHUWAN UNIVERSITY',
    },
    {
      date:'2020-2022',
      degree: '+2 In Science',
      university: 'KAILALI MULTIPLE CAMPUS'
    },
    {
      date: '2017-1019',
      degree:'Secondary Education',
      university:'PANCHODAYA SECONDARY SCHOOL'

    },
    {
      date:' 2009-2016',
      degree:'Primary Education',
      university:'SHREE SHOVA S. SCHOOL'
    }
  ]
  return (
  <>
  <div name="Education" className='max-w-screen-2xl container px-4 m-auto md:px-10 mb-10'>
    <div className='h-1  w-full bg-yellow-200 rounded-sm'></div>
    <h1 className='font-bold text-2xl md:text-3xl text-center mt-2 mb-6'>Education</h1>

   <div className='grid gap-6 md:grid-cols-2  md:px-14'>
    {
      eduaction.map((edu, index)=>(
        <div key={index} className='h-auto w-auto border rounded-md px-6 py-3 bg-gray-800 shadow-md hover:scale-105 duration-300'> 
        <h1 className='font-semibold text-xl md:text-2xl'> {edu.date}</h1>
        <h1 className='font-semibold text-xl md:text-2xl'>{edu.degree}</h1>
        <h1 className='mt-4 text-yellow-500 font-semibold text-lg md:text-xl'>{edu.university}</h1>
        </div>
      ))
    }
   </div>
   <div className='h-1  w-full bg-yellow-200 rounded-sm mt-10'></div>
  </div>
  </>
  )
}

export default Education
