
import './style.css'
import {AiOutlinePlus} from "react-icons/ai"
import UserBar from '../userBar'
const SideBar = ({openProfile,openCreate}) => {
  
  return (
    <div className='sideBar flex column center spaceEvenly'>
      <div className='flex center'>
        <button className='profile-button' onClick={openProfile}>Your Profile</button>
        <AiOutlinePlus className='pointer' onClick={openCreate}/>
      </div>
      <div className="users flex column">
        <div className='header-section'>Users</div>
        <div className="user-bar-sidebar flex center">
          <UserBar name={"Youssef"} following={false}/>
        </div>
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