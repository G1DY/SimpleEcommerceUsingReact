import React from 'react'
import {BsFillBagFill} from "react-icons/bs";
import "../Products/Products.css"

const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <>
    <section className="card">
      <img src={img} alt="title" className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="star">
          {star}{star}{star}{star}
          <span className="card-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>{newPrice}
          </div>
          <div className="bag">
          <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
    </>
  )
}

export default Card