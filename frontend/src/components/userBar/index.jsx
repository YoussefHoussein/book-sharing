import React from 'react'
import {AiOutlineLike, AiFillLike} from 'react-icons/ai'
import './style.css'
const UserBar = ({name,following}) => {
  return (
    <div className='userbar flex center'>
        <div className="userbar-name">{name}</div>
        {following ? <AiFillLike /> : <AiOutlineLike />}
    </div>
  )
}

export default UserBar