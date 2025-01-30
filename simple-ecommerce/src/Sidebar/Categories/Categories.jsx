import React from 'react'
import "./Categories.css"
import Input from '../../Components/Input'

const Categories = ({handleChange}) => {
  return (
    <div >
      <h2 className="sidebar-title">Categories</h2>
      <div className='sidebar-items'>
        <label className="sidebar-label-container">
          <input type="radio" value="" name='categories' onChange={handleChange} />
          <span className="checkmark"></span>All
        </label>
          
      <Input handleChange={handleChange} value="flats" title='Flats' name='categories'/>
      <Input handleChange={handleChange} value="sneakers" title='Sneakers' name='categories'/>
      <Input handleChange={handleChange} value="sandals" title='Sandals' name='categories'/>
      <Input handleChange={handleChange} value="heels" title='Heels' name='categories'/>
      </div>
    </div>
  )
}

export default Categories;