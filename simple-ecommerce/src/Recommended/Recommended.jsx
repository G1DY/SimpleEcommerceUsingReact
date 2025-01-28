import React from 'react'
import "./Recommended.css"

const Recommended = () => {
  return (
    <>
    <div className='recommended-flex'>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-btns">
            <button className='btns'>All</button>
            <button className='btns'>Nike</button>
            <button className='btns'>Adidas</button>
            <button className='btns'>Sandals</button>
            <button className='btns'>Vans</button>
        </div>
    </div>
    </>
  )
}

export default Recommended