import React, { useState } from 'react'
import Navigation from './Navigation/Nav'
import Recommended from './Recommended/Recommended'
import Products from './Products/Products'
import Sidebar from './Sidebar/Sidebar'
import "./index.css"
import data from "./db/data"
import Card from './Components/Card'

const App = () => {
  const [selectedcategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('');

  // input filter
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  // filter through all items on the db
  const filteredItems = data.filter((data) => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // radio filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }  

  // Button filtering
  const handleClick = (e) => {
    selectedcategory(e.target.value)
  }

  // filtereddata
  const filteredData = (data, selected, query) => {
    let filtereddata = data;

    if (query) {
      filtereddata = filteredItems
    }
    if (selected) {
      filtereddata = filtereddata.filter(({category, color, company, newPrice, title}) => 
      (category === selected || color === selected || company === selected || newPrice === selected || title === selected));
    }
    return filtereddata.map(({img, title, star, reviews, prevPrice, newPrice}) => (<Card key={Math.random()} img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice}/>));
  };

  const result = filteredData(data, selectedcategory, query);
  return (
    <>
    <Sidebar handleChange={handleChange} />
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleChange={handleChange}/>
    <Products result={result}/>
    </>
    
  )
}

export default App