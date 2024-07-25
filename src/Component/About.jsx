import React from 'react'

function About() {
  return (
   <>
   <div name='About' className='max-w-screen-2xl container px-8 m-auto md:px-20 font-sans mb-20'>
   <h1 className=' text-2xl font-semibold text-center mb-10 md:mb-20 md:text-3xl'>About Me</h1>

    <div className=' flex flex-col gap-8 md:flex-row md:justify-between '>
       
        
        <div className='md:ml-28'>
            <div className=' space-y-5 font-serif font-semibold text-2xl md:text-3xl'>
             <h1> Name:  Dipak Badu</h1>
             <h1> Job Role: Web Development</h1>
             <h1>Experience: 1 + Year </h1>
             <h1>Address: Dhangadhi, Nepal</h1>
            </div>
        </div>
        <div className='md:w-1/2 text-justify font-semibold text-lg text-gray-400 font-serif
         md:text-xl md:mr-14'>
        <p>I'm a passionate and aspiring web developer excited to create engaging and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I'm eager to apply my skills to real-world projects and continuously learn and grow in this dynamic field. </p>
        </div>
    </div>
   </div>
   </>
  )
}

export default About
