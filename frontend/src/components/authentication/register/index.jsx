import React, { useState } from 'react'
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const [data,setData] = useState({
    name: "",
    email: "",
		password: "",
  })
  const [error,setError] =useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const location = useLocation();
  const navigate = useNavigate();

  const openLogin = () =>{
    navigate('/')
  }
  const checkData = () => {
    const name = data.name
    const email =data.email
    const password = data.password

    if(!name || !email || !password){
      setError("Please fill all fields")
    }
    else if(password.length < 6 ){
      setError("Password should be more than 6 characters")
    }
    else{
      handleRegister()
    }
  }
  const handleRegister = async () => {
    try{
      const response = await axios.post('http://127.0.0.1:8000/auth/register',data)
      openLogin()
        setData({
          name: "",
          email: "",
          password: "",
        })
        
    }
    catch(error){
      setError("email or passowrd invalid")
      setData({
        name: "",
        email: "",
        password: "",
      })
    }
    
    
    
  }
  return (
    <div className='register-container flex'>
      <div className="register-left"></div>
      <div className="register-right flex column spaceEvenly">
        {error ? <h2 className='register-warning'>{error}</h2> : <h2 className='register-welcome'>Welcome to Book Sharing</h2>}
        <div className="register-input-container flex column spaceEvenly">
          <input type="text" name='name' placeholder='Name'  className='register-input register-input-text' onChange={handleChange} value={data.name}/>
          <input type="text" name='email' placeholder='Email'  className='register-input register-input-text' onChange={handleChange}value={data.email}/>
          <input type="password" name='password' placeholder='Password'  className='register-input register-input-text' onChange={handleChange}value={data.password}/>
          <button className='register-input create-button' onClick={checkData}>Create</button>
        </div>
        <span>
          already have an accout? 
          <button className='login-register-button' onClick={openLogin}>Login</button>
        </span>
      </div>
    </div>
  )
}

export default Register