import React from 'react'

const Button = ({ text, onClick, className = "button" }) => {
  return (
    <button 
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  )
}

export default Button
