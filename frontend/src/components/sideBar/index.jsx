import React from 'react'
import './style.css'
import {AiOutlinePlus} from "react-icons/ai"
const SideBar = ({openProfile,openCreate}) => {
  return (
    <div className='sideBar flex center'>
      <div className='flex center'>
        <button className='profile-button' onClick={openProfile}>Your Profile</button>
        <AiOutlinePlus className='pointer' onClick={handleCreate}/>
      </div>
    </div>
  )
}

export default SideBar