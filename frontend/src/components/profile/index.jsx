import React, { useEffect, useState } from 'react'
import BookCard from '../bookCard'
import axios from 'axios'
import './style.css'
const Profile = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    console.log(localStorage.getItem('token'))
    const getBooks = async() => {
      try{
        const config = {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
      };
        const response = await axios.post('http://127.0.0.1:8000/books/getBooks',null,config)
        setData(response.data)
        console.log(response.data);
      }
      catch(err){
        console.log(err)
      }
    }
    getBooks();
  },[])

  return (
    <div className='profile flex column'>
       {data.map(book => (
        <BookCard
          key={book.id}
          name={book.name}
          author={book.author}
          review={book.review}
          picture={book.picture}
        />
      ))}
    </div>
  )
}

export default Profile