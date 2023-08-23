import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import {AiOutlinePlus} from "react-icons/ai"
import UserBar from '../userBar'
const SideBar = ({openProfile,openCreate}) => {
  const [users_names,setUserName] = useState([])
  useEffect(()=>{
    const getUsers = async () => {
      try{
          const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        };
          const response = await axios.post('http://127.0.0.1:8000/users/getAllUsers',null,config)
          setUserName(response.data)
      }
      catch(err){
        console.log(err)
      }
      
    }
    getUsers()
  })
  return (
    <div className='sideBar flex column center spaceEvenly'>
      <div className='flex center'>
        <button className='profile-button' onClick={openProfile}>Your Profile</button>
        <AiOutlinePlus className='pointer' onClick={openCreate}/>
      </div>
      <div className="users flex column">
        {
        users_names.map((user) => (
            <div key={user._id} className="user-bar-sidebar flex center">
              <UserBar name={user.name} following={false} />
            </div>
          ))}
      </div>
      <div className="followings flex column">
        <div className='header-section'>Following</div>
        <div className="user-bar-sidebar flex center">
          <UserBar name={"Hi"} following={true}/>
        </div>
      </div>
    </div>
  )
}

export default SideBar