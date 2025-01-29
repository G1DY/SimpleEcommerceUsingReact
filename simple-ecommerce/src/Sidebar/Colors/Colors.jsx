import React from 'react'
import "./Colors.css"
import Input from '../../Components/Input'

const Colors = ({handleChange}) => {
  return (
    <>
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" name='colors' />
        <span className="checkmark all">All</span>
      </label>
      <Input onChange={handleChange} value="black" title='Black' name='colors' color='black'/>
      <Input onChange={handleChange} value="blue" title='Blue' name='colors' color='blue'/>
      <Input onChange={handleChange} value="red" title='Red' name='colors' color='red'/>
      <Input onChange={handleChange} value="green" title='Green' name='colors' color='green'/>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="White" name='colors' />
        <span className="checkmark all" style={{ background: "white", border: "2px solid black" }}></span>
        White
      </label>
    </div>
    </>
  )
}

export default Colors;