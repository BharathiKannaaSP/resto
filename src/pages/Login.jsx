import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import loginvideo from '../assets/coffee.mp4'
import '../styles/login.css'
function Login() {
  
  const [user,setUser]=useState(false)

  const navigate=useNavigate()
  function handleClick(){
    alert('Welcome to Resto!')
      navigate('/home')
      setUser(true)
      console.log('Logged in!')
  }
  function handleSignup(){
    navigate('/signup')
  }
  return (
    <div>
      {/* background video */}
        
        <div className='video'>
        <video src={loginvideo} autoPlay loop muted className='loginvideo'/>
        </div>
      
      {/******* Login Form *********** */}
        <h1 className='logo'>Resto</h1>

        <div className='container'>
          <div className='content'>
            <h2  className='loginheading'>
              Login
            </h2>
            <form onSubmit={handleClick}  >
            <h3 id='email' >Email</h3>
            <input type='email' required/>
            <h3>Password</h3>
            <input type='password' required/><br/>
            <button type='submit' >Login</button>
            <div style={{padding:'5px'}}/>
            <h4 style={{fontFamily:'cursive',color:'grey'}}>Create an account?<p className='signup' onClick={handleSignup}>Sign up!</p></h4>
            </form>
          </div>

        </div>
    </div>
  )
}

export default Login