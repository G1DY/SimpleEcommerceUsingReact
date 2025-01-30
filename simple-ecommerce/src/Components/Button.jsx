import React from 'react'

const Button = ({handleClick, value, title}) => {
  return (
   <button className='btns' onClick={handleClick} value={value}>{title}</button>
  )
}

export default Button