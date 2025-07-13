import React from "react";
import aboutmid from "../assets/images/about-mid.svg"
import aboutleft from "../assets/images/about-left.svg"
import aboutright from "../assets/images/about-right.svg"

const AboutUs = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-50 px-4 py-20 overflow-hidden min-h-screen">
      {/* Background Shapes */}
      <div className="w-auto h-full bg-gray-500 flex gap-16">

        89+-<div className="bg-red-300 w-[20%] h-full%">
          <img src={aboutleft} />        </div>
        <div className="bg-green-300 w-[60%] h-full"><img src={aboutmid} />   </div>
        <div className="bg-blue-300 w-[20%] h-full object-cover"><img src={aboutright} />   </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl mt-40">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">
          About Us
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12 rounded"></div>
        <p className="text-gray-600 text-center mb-12 leading-relaxed text-lg">
          Fifteen years of experience in real estate, excellent customer service
          and a commitment to work hard, listen and follow through. We provide
          quality services to build relationships with clients and, more
          importantly, maintain those relationships by communicating effectively.
        </p>
        <div className="text-center">
          <button className="border border-blue-500 text-blue-600 px-12 py-3 rounded bg-white hover:bg-blue-50 font-semibold transition-colors duration-200 text-sm uppercase tracking-wide">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;