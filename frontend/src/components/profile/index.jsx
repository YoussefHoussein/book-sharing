import React, { useEffect, useState } from 'react'
import BookCard from '../bookCard'
import axios from 'axios'
import './style.css'
const Profile = ({user_id = null}) => {
  const [data,setData] = useState([])
  useEffect(()=>{
    const getBooks = async() => {
      try{
        const config = {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
      };
        const response = await axios.post('http://127.0.0.1:8000/books/getBooks',null,config)
        setData(response.data)
        
      }
      catch(err){
        console.log(err)
      }
    }
    if(user_id){
      const getUsersBooks = async () => {
        try{
          const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        };
        const data = {
          poster_id : user_id
        }
          const response = await axios.post('http://127.0.0.1:8000/users/getBooks',data,config)
          setData(response.data)
          
          console.log(response.data);
        }
        catch(err){
          console.log(err)
        }
      }
      getUsersBooks()
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
          user_id={user_id}
        />
      ))}
    </div>
  )
}

export default Profile