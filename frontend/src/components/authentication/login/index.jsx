import React, { useState } from 'react'
import './style.css'
import { redirect, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
const Login = () => {
    const [data,setData] = useState({
        email: "",
        password: "",
    })
    const [error,setError] =useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      }

    const checkData = () => {
        const email = data.email;
        const password = data.password;
        if(!email || !password){
            setError("Please fill all fields")
        }
        else{
            handleLogin()
        }
    }
    const openRegister = () => {
        navigate("/register");
    }
    const openHome = () => {
        navigate("/home");
    }
    const handleLogin = async () => {
        try{
            const response = await axios.post("http://127.0.0.1:8000/auth/login",data)
            localStorage.setItem("token",response.data.token)
            
            setData({
                email: "",
                password: "",
            })
            openHome()
            
        }
        catch(err){
            console.log(err)
            setError("email or passowrd invalid")
            setData({
                email: "",
                password: "",
            })
        }
        
    }
  return (
    <div className='login-container flex'>
        <div className="login-left"></div>
        <div className="login-right flex column">
            {error ? <h2 className='login-warning'>{error}</h2> : <h2 className='head'>Welcome!</h2>}
            <div className="login-input-container flex column">
                <input type="text" name='email' placeholder='email' className="login-input login-input-text" onChange={handleChange} value={data.email}/>
                <input type="password" name='password' placeholder='password' className="login-input login-input-text" onChange={handleChange} value={data.password}/>
                <button className='login-input button-login' onClick={checkData}>Login</button>
            </div>
            <span>
                Don't have an accout?
                <button className='register-login-button' onClick={openRegister}>Register</button>
            </span>
        </div>
        
    </div>
  )
}

export default Login