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
        <span className="checkmark all"></span>All
      </label>

    <Input handleChange={handleChange} value="black" title='Black' name='colors' color='black'/>
    <Input handleChange={handleChange} value="blue" title='Blue' name='colors' color='blue'/>
    <Input handleChange={handleChange} value="red" title='Red' name='colors' color='red'/>
    <Input handleChange={handleChange} value="green" title='Green' name='colors' color='green'/>

      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} title='White' value="white" name='colors' />
        <span className="checkmark" style={{ background: "white", border: "2px solid black" }}></span>
        White
      </label>
    </div>
   </>
  )
}

export default Colors;