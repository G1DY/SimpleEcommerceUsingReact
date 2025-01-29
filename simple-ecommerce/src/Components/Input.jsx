import React from 'react'

const Input = ({handleChange, value, title, color, name}) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" onChange={handleChange} value={value} name={name} />
      <span className="checkmark" style={{backgroundClip: color}}>{title}</span>
    </label>
  )
}

export default Input;