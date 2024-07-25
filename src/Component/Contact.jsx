import React from 'react';
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitStatus, setSubmitStatus] = React.useState('');

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    };

    try {
      await axios.post("https://getform.io/f/blljqdvb", userInfo);
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error(error);
    }
  };

  return (
    <div name='Contact' className='max-w-screen-2xl container px-4 m-auto md:px-10 mb-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>Contact me</h1>
      <div className='flex flex-col justify-center items-center gap-20 md:flex-row'>
        <div className='md:text-2xl'>
          <div className='flex flex-col justify-center gap-10 items-center'>
            <div className='flex space-x-6 items-center'>
              <IoCall className='w-[60px] h-[60px] p-2 rounded-full text-yellow-500 bg-gray-600' />
              <h1>+977 9769848906</h1>
            </div>
            <div className='flex space-x-6 items-center'>
              <BiLogoGmail className='w-[60px] h-[60px] p-2 rounded-full text-yellow-500 bg-gray-600 text-base' />
              <h1>dipbadu0@gmail.com</h1>
            </div>
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='h-auto w-auto py-8 px-6 border bg-gray-600 rounded-lg'
          >
            <h1 className='text-center font-bold text-xl md:text-3xl'>Send your message</h1>
            <div className='flex flex-col space-y-4'>
              <div>
                <label className='text-lg md:text-xl'>Full Name:</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  placeholder='Enter your full name'
                  className='w-full rounded-lg px-6 py-2 text-lg md:text-xl'
                  {...register("name", { required: true })}
                />
                {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div>
                <label className='text-lg md:text-xl'>Email:</label>
                <input
                  type="email"
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  className='w-full rounded-lg px-6 py-2 text-lg md:text-xl'
                  {...register("email", { required: true })}
                />
                {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
              <div>
                <label className='text-lg md:text-xl'>Message:</label>
                <textarea
                  id='msg'
                  name="message"
                  placeholder='Enter the message'
                  className='w-full rounded-lg px-6 py-5 text-lg md:text-xl'
                  {...register("message", { required: true })}
                />
                {errors.message && <span className='text-red-500'>This field is required</span>}
              </div>
            </div>
            <button className='px-4 py-2 h-auto w-auto border rounded-lg bg-gray-800 text-yellow-500 mt-8 hover:scale-105 duration-300' type='submit'>
              Send
            </button>
          </form>
          {submitStatus && <p className='mt-4 text-center text-lg'>{submitStatus}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
