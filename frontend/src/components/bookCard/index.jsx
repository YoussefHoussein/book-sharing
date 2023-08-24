import React, { useRef } from 'react'
import './style.css'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
const BookCard = ({user_id = null,name,author,review,picture}) => {
    const imageContainerRef = useRef(null);

    if (imageContainerRef.current) {
        imageContainerRef.current.style.backgroundImage = `url(${picture})`;
      }
  return (
    <div className='card-container'>
        <div className="image-container" ref={imageContainerRef}></div>
        <div className="card-text name">{name}</div>
        <div className="card-text author">{author}</div>
        <div className="card-text review">{review}</div>
        <div className="card-text heart pointer">{user_id ? <AiOutlineHeart /> : ""}</div>
    </div>
  )
}

export default BookCard