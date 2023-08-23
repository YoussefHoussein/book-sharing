import React from 'react'
import './style.css'
const Navbar = ({name}) => {
  return (
    <div className='navbar flex spaceBetween'>
      <div className='navbar-name'>{name}</div>
      <div className='navbar-search-container flex'>
        <input type="text" className='navbar-search-input' placeholder='Search'/>
      </div>
    </div>
  )
}

export default Navbar