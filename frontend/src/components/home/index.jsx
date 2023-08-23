import React from 'react'
import Navbar from '../navbar'
import SideBar from '../sideBar'
import './style.css'
const Home = () => {
  return (
    <div className='flex'>
        <Navbar name={"name"}/>
        <div className='sidebar-container flex'>
        <SideBar />
        </div>
        
    </div>
  )
}

export default Home