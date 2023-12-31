import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import SideBar from '../sideBar'
import './style.css'
import Profile from '../profile'
import Create from '../create'
const Home = () => {
  const [active,setActive]=useState(null)
  const [selectedUser,setSelectedUser] = useState(null)
  const handleUserClick = (user_id) =>{
    setSelectedUser(user_id);
    setActive("userBooks")
  }
  console.log(active)
  return (
    <div className='flex column'>
        <div className='navbar-container flex center'>
          <Navbar name={"name"}/></div>  
        <div className='body-container flex spaceBetween'>
          <div className='sidebar-container flex center'>
          <SideBar openProfile={() => setActive("profile")} openCreate={()=>setActive("create")} onUserClick={handleUserClick}/>
          </div>
          <div className='profile-container flex center'>
            {active === "profile" ? <Profile /> : ""}
            {active === "create" ? <Create /> : ""}
            {active === "userBooks" ? <Profile user_id={selectedUser}/> : ""}
          </div>
          
        </div>
    </div>
  )
}

export default Home