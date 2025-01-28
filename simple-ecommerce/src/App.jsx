import React from 'react'
import Navigation from './Navigation/Nav'
import Recommended from './Recommended/Recommended'
import Products from './Products/Products'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
  return (
    <>
    <Sidebar />
    <Navigation />
    <Recommended/>
    <Products/>
    </>
   
  )
}

export default App