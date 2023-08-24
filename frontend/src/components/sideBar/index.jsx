import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import {AiOutlinePlus} from "react-icons/ai"
import UserBar from '../userBar'
const SideBar = ({openProfile,openCreate}) => {
  const [users_names,setUserName] = useState([])
  const [following_names,setFollowingName] = useState([])
  useEffect(()=>{
    const getUsers = async () => {
      try{
          const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        };
          const response = await axios.post('http://127.0.0.1:8000/users/getAllUsers',null,config)
          const response1 = await axios.post('http://127.0.0.1:8000/users/getFollowings',null,config)
          setUserName(response.data)
          setFollowingName(response1.data)
      }
      catch(err){
        console.log(err)
      }
      
    }
    getUsers()
  },[])

  const handleFollowToggle = (userId) => {
    const userToToggle = users_names.find(user => user._id === userId);

    if (userToToggle) {
      const updatedUsers = users_names.filter(user => user._id !== userId);
      const updatedFollowing = [...following_names, userToToggle];
      setUserName(updatedUsers);
      setFollowingName(updatedFollowing);
    } else {
      
      const updatedFollowing = following_names.filter(user => user._id !== userId);
      const updatedUsers = [...users_names,userToToggle]
      setFollowingName(updatedFollowing);
      setUserName(updatedUsers)

    }

  };

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
              <UserBar id={user._id} name={user.name} following={false} onFollowToggle={()=>handleFollowToggle(user._id)}/>
            </div>
          ))}
      </div>
      <div className="followings flex column">
        <div className='header-section'>Following</div>
        {
        following_names.map((user) => (
            <div key={user._id} className="user-bar-sidebar flex center">
              <UserBar id={user._id} name={user.name} following={true} onFollowToggle={()=>handleFollowToggle(user._id)}/>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SideBar