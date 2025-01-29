import React from 'react'
import "./Categories.css"

const Categories = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Categories</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" value="" name='categories' onChange={handleChange} />
          <span className="checkmark"></span>All
        </label>
        <input onChange={handleChange} value="flats" title='Flats' name='categories'/>
        <input onChange={handleChange} value="sneakers" title='Sneakers' name='categories'/>
        <input onChange={handleChange} value="sandals" title='Sandals' name='categories'/>
        <input onChange={handleChange} value="heels" title='Heels' name='categories'/>
      </div>
    </div>
  )
}

export default Categories;