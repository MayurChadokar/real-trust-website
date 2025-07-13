import React from "react";
import img1 from "../assets/images/Ellipse11.svg"; // Replace with your actual image paths
import img2 from "../assets/images/Ellipse 12.svg";
import img3 from "../assets/images/Ellipse 13.svg";
import leftcurve from "../assets/shapes/leftcurve.svg"
import bluedot from "../assets/shapes/bluedot.svg"
import lightbluedot from "../assets/shapes/lightblue.svg"
import orangedot from "../assets/shapes/orangedot.svg"
import group from "../assets/shapes/Group 1.svg"
import rightcurve from "../assets/shapes/Ellipse 8.svg"
import homeIcon from "../assets/icons/home.svg";
import paintbrushIcon from "../assets/icons/paintbrush-2.svg";
import dollarIcon from "../assets/icons/circle-dollar-sign.svg";

const WhyChoose = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center py-32 pb-48 bg-white relative overflow-hidden">
        <div className="max-w-7xl w-full gap-10 flex flex-row items-center justify-between z-10">
          {/* left text */}
          <div className="w-full px-8">
            <img src={lightbluedot} className="absolute top-16 left-24 w-[3rem] opacity-100 z-0" />
            <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4">Not Your Average Realtor</h2>
            <p className="text-gray-600 text-lg">Real results are a mix of strategic property advice, smart marketing design, and effective maneuvering to get homeowners top dollar on the market.</p>
            <img src={group} className="absolute bottom-20 left-24 opacity-100 z-0" />
            <img src={rightcurve} className="absolute w-32 bottom-0 left-24 opacity-100 z-0" />
          </div>
          {/* right image */}
          <div className="w-full flex flex-col items-center relative">
            {/* Position the leftcurve as background decoration */}
            <img src={leftcurve} alt="curve" className="absolute -rotate-45 -top-10 -left-10 w-[400px] opacity-100 z-0" />
            <img src={bluedot} className="absolute top-7 -left-10 w-[3rem] opacity-100 z-0" />
            <img src={orangedot} className="absolute bottom-7 -left-8 w-[2rem] opacity-100 z-0" />
            <img src={bluedot} className="absolute -bottom-[5.5rem] left-48 w-[1rem] opacity-100 z-0" />
            {/* Foreground content */}
            <div className="flex flex-row items-center justify-center space-x-6 z-10">
              <img src={img1} className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg" />
              <div className="flex flex-col space-y-6">
                <img src={img2} className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg" />
                <img src={img3} className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="relative w-full bg-white pb-24 -mt-32">
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Why Choose Us?</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-12 rounded"></div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-0">
            {/* Card 1 */}
            <div className="flex-1 flex flex-col items-center px-4">
              <span className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                <img src={homeIcon} alt="Potential ROI" className="w-8 h-8" />
              </span>
              <h3 className="text-blue-600 font-bold text-lg mb-2">Potential ROI</h3>
              <p className="text-gray-500 text-sm text-center">
                Whether you are looking to buy or to reinvest, our team helps you maximize your returns as well as what you should plan for after the process.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex-1 flex flex-col items-center px-4">
              <span className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                <img src={paintbrushIcon} alt="Design" className="w-8 h-8" />
              </span>
              <h3 className="text-blue-600 font-bold text-lg mb-2">Design</h3>
              <p className="text-gray-500 text-sm text-center">
                Our strategic, tech-forward design ensures the project guidelines, stylish design approach, and event-ready construction to complete the home upgrade.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex-1 flex flex-col items-center px-4">
              <span className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                <img src={dollarIcon} alt="Marketing" className="w-8 h-8" />
              </span>
              <h3 className="text-blue-600 font-bold text-lg mb-2">Marketing</h3>
              <p className="text-gray-500 text-sm text-center">
                Staying current, creative, and relevant means a sophisticated digital marketing plan, contemporary event hosting, to match today’s buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;