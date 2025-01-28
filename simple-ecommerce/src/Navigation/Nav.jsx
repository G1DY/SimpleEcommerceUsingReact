import { FiHeart } from "react-icons/fi";//<FiHeart />
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";//<AiOutlineShoppingCart /> <AiOutlineUserAdd />
import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
        <div className="nav-container">
            <input className='input' type="text" name='search' placeholder='search' />
        </div>
        <div className="profile-container">
            <a href="">
            <FiHeart className="nav-icons" />
            </a>
            <a href="">
            <AiOutlineShoppingCart className="nav-icons"/>   
            </a>
            <a href="">
            <AiOutlineUserAdd className="nav-icons"/>    
            </a>
        </div>
    </nav>
  )
}

export default Nav;