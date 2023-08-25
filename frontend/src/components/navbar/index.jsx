import React from 'react'
import './style.css'
import Search from '../search'
const Navbar = ({name}) => {
  return (
    <div className='navbar flex spaceBetween'>
      <div className='navbar-name'>{name}</div>
      <div className='navbar-search-container flex'>
        <Search />
      </div>
    </div>
  )
}

export default Navbar