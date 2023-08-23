import React, { useRef } from 'react'
import './style.css'
const BookCard = ({name,author,review,image}) => {
    const imageContainerRef = useRef(null);

    if (imageContainerRef.current) {
        imageContainerRef.current.style.backgroundImage = `url(${image})`;
      }
  return (
    <div className='card-container'>
        <div className="image-container" ref={imageContainerRef}></div>
        <div className="card-text name">{name}</div>
        <div className="card-text author">{author}</div>
        <div className="card-text review">{review}</div>

    </div>
  )
}

export default BookCard