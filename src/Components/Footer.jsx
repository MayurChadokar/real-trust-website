import React from 'react';
import logo from "../assets/images/logo.svg"
import footerImg from "../assets/images/Rectangle.svg"
import facebook from "../assets/icons/Frame.svg"
import linkedin from "../assets/icons/Linkedin.svg"
import twitter from "../assets/icons/Group-1.svg"
import instagram from "../assets/icons/Group.svg"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Footer = () => {
    const {register,handleSubmit,reset}=useForm();
    const  onSubmit= async(data)=>{
       
     try{   const res=await fetch("http://15.206.178.245:5000/api/subscriber/createSubscriber",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        if (!res.ok) {
            alert('Failed to add email');
          } else {
            alert('email sends');
            reset();
          }
        } catch (err) {
          console.error('Submission error:', err);
          alert('Something went wrong. Please try again.');
        }

    }
  return (
    <footer className="bg-gray-800 text-white">

      <div className="relative">
        <div 
          className="w-full h-64 flex flex-col items-center justify-center relative"
          style={{
            backgroundImage: `url(${footerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl  font-bold mb-6 text-white">
              Learn more about our listing process, as well as our additional staging and design work.
            </h2>
            <button className="bg-white text-gray-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between">
          <nav className="flex flex-wrap space-x-8 text-sm">
            <Link to="#" >Home</Link>
            <Link to="#" >Services</Link>
            <Link to="#" >Projects</Link>
            <Link to="#" >Testimonials</Link>
            <Link to="#" >Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-md font-semibold">Subscribe to</span>
            <form onSubmit={handleSubmit(onSubmit)} className="flex">
            <input 
                type="email" 
                {...register("email")}
                placeholder="Enter email address"
                className="px-3 py-2 text-gray-800 text-sm rounded-l-md border-0 "
              />
  <button type="submit " className="bg-white text-black text-sm px-3 py-2 rounded-r-md ">Subscribe</button>
</form>

          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between">
            <span className="text-md font-semibold ">© 2023 Real Estate</span>
              <span>
                <img src={logo} className="h-8 " />
              </span>
          
       
          <div className="flex space-x-4 items-center">
            <Link to="#" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
             <img   src={twitter}></img>
            </Link>
            <Link to="#" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
            <img   src={instagram}></img>
            </Link>
            <Link to="#" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
            <img   src={facebook}></img>
            </Link>
            <Link to="#" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
            <img   src={linkedin}></img>
            </Link>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;