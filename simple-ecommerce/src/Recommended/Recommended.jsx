import React from 'react'
import "./Recommended.css"
import Button from '../Components/button'

const Recommended = ({handleClick}) => {
  return (
    <>
    <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button className="btns" handleClick={handleClick} value="" title="All Products"/>
          <Button className="btns" handleClick={handleClick} value="Nike" title="Nike" />
          <Button className="btns" handleClick={handleClick} value="Adidas" title="Adidas" />
          <Button className="btns" handleClick={handleClick} value="Puma" title="Puma" />
          <Button className="btns" handleClick={handleClick} value="Vans" title="Vans" />
        </div>
    </div>
    </>
  )
}

export default Recommended