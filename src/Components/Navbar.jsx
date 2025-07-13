
import React from 'react'
import logo from "../assets/images/logo.svg"
import Button from './Button';
import { Link } from "react-router-dom"

const Navbar = () => {
    const navbar = ['Home', 'Services', 'Projects', 'Testimonials'];
    


  return (
    <nav className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-white shadow-sm'>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className='h-8' />
      </div>
      
      <div className=' flex justify-center'>
        <ul className='flex items-center space-x-8'>
          {navbar.map((item) => {
            return (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase()}`}
                  className='text-gray-900 hover:text-blue-500 font-medium transition-colors duration-200'
                >
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      
      <div>
        <Button 
          text="Contact Us"
          className="bg-orange-600  text-white font-bold py-2 px-6 rounded transition-colors duration-200"
        />
      </div>
    </nav>
  )
}

export default Navbar
