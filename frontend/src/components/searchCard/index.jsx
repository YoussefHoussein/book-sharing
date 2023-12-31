import React, { useRef } from 'react'
import './style.css'
const SearchCard = ({name,author,picture}) => {
    console.log(name)
    const pictureHolder = useRef(null);
    if (pictureHolder.current) {
        pictureHolder.current.style.backgroundImage = `url(${picture})`;
      }
  return (
    <div className='search-card-container flex center spaceEvenly'>
        <div className="search-card-picture" ref={pictureHolder}></div>
        <div className="search-card-name">{name}</div>
        <div className="search-card-author">{author}</div>
    </div>
  )
}

export default SearchCard