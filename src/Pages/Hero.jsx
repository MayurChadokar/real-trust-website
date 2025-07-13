import React from 'react'
import heroImg from "../assets/images/hero.svg"
import { useForm } from 'react-hook-form';

const Hero = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('http://15.206.178.245:5000/api/contact/createContactForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        alert('Failed to submit form');
      } else {
        alert('Form submitted!');
        reset();
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div 
      className='w-full flex items-center justify-center  p-16 h-[91vh] bg-gray-900'
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='hero-text  px-10 py-16 w-1/2'>
        <h1 className='text-7xl font-bold text-white'>Consultation, Design and Marketing</h1>
      </div>
      <div className="flex justify-end items-center w-full h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-blue-900/80 rounded-lg shadow-lg px-8 py-10 w-full max-w-sm ">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Get a Free Consultation</h2>
          <div className="mb-4">
            <input
              {...register('fullName')} 
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 rounded border border-white/40 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <input
              {...register('email')} 
              type="email"
              required
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 rounded border border-white/40 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <input
              {...register('mobile')} 
              type="tel"
              required
              placeholder="Mobile Number"
              className="w-full px-4 py-2 rounded border border-white/40 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-6">
            <input
              {...register('city')} 
              type="text"
              placeholder="City"
              required
              className="w-full px-4 py-2 rounded border border-white/40 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Get Quick Quote
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero
