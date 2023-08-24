import React from 'react'
import {AiOutlineLike, AiFillLike} from 'react-icons/ai'
import axios from 'axios'
import './style.css'
const UserBar = ({id,name,following,onFollowToggle}) => {
  const handleFollow = async () => {
    try{
      const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
    };
    const data = {
      followed_id : id
    }
      const response = await axios.post("http://127.0.0.1:8000/users/follow",data,config)
      onFollowToggle()
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='userbar flex center'>
        <div className="userbar-name">{name}</div>
        <div onClick={handleFollow}>{following ? <AiFillLike /> : <AiOutlineLike />}</div>
        
    </div>
  )
}

export default UserBar