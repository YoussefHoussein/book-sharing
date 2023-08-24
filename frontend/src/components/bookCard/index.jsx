import React, { useRef, useState } from 'react'
import './style.css'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import axios from 'axios'
const BookCard = ({user_id = null,id,name,author,review,picture}) => {
    const imageContainerRef = useRef(null);
    const [like,setLike] = useState(false)
    if (imageContainerRef.current) {
        imageContainerRef.current.style.backgroundImage = `url(${picture})`;
    }
    const handleLike = async () => {
      try{
        const config = {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
      };
      const data = {
        book_owner : user_id,
        book_id : id
      }
      const response = await axios.post('http://127.0.0.1:8000/books/like',data,config)
      if(response.data === "liked"){
        setLike(true)
      }
      else{
        setLike(false)
      }
      }
      catch(err){
        console.log(err)
      }
    }
  return (
    <div className='card-container'>
        <div className="image-container" ref={imageContainerRef}></div>
        <div className="card-text name">{name}</div>
        <div className="card-text author">{author}</div>
        <div className="card-text review">{review}</div>
        <div className="card-text heart pointer" onClick={handleLike}>{user_id ? like ? <AiFillHeart /> : <AiOutlineHeart />  : ""}</div>
    </div>
  )
}

export default BookCard