import React from 'react'

const Button = ({onclickHandler, value, title}) => {
  return (
    <button className="btns" onClick={onclickHandler} value={value}>{title}</button>
  )
}

export default Button