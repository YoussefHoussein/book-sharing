import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import SideBar from '../sideBar'
import './style.css'
import Profile from '../profile'
import Create from '../create'
const Home = () => {
  const [active,setActive]=useState(null)
  return (
    <div className='flex column'>
        <Navbar name={"name"}/>
        <div className='body-container flex spaceBetween'>
          <div className='sidebar-container flex'>
          <SideBar openProfile={() => setActive("profile")} openCreate={()=>setActive("create")}/>
          </div>
          <div className='profile-container flex center'>
            {active === "profile" ? <Profile /> : ""}
            {active === "create" ? <Create /> : ""}
          </div>
          
        </div>
    </div>
  )
}

export default Home