import React from 'react'
import './Sidebar.css'
import Categories from './Categories/Categories'
import Prices from './Prices/Prices'
import Colors from './Colors/Colors'

const Sidebar = () => {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
        <Categories/>
        <Prices/>
        <Colors/>
    </section>
    </>
  );
};

export default Sidebar;