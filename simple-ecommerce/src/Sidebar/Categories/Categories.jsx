import React from 'react'
import "./Categories.css"
import Input from '../../Components/Input'

const Categories = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Categories</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" value="" name='categories' onChange={handleChange} />
          <span className="checkmark"></span>All
        </label>
        <Input onChange={handleChange} value="flats" title='Flats' name='categories'/>
        <Input onChange={handleChange} value="sneakers" title='Sneakers' name='categories'/>
        <Input onChange={handleChange} value="sandals" title='Sandals' name='categories'/>
        <Input onChange={handleChange} value="heels" title='Heels' name='categories'/>
      </div>
    </div>
  )
}

export default Categories;