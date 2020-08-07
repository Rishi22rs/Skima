import React, { useState,useEffect } from 'react'
import '../Styles/landing.css'
import '../Styles/styles.css'
import {getCookie} from '../Api/Api'
import { Redirect } from 'react-router-dom'
import SpinnerPage from './SpinnerPage'

function Landing() {

  const [styles,setStyles]=useState({
    top:100,
    fontSize:50,
    topText:-10
  })

  const [input,setInput]=useState({email:'',password:''})

	const [cookie,setCookie]=useState()

  useEffect(()=>{
    if(localStorage.getItem('theme')===null){
      localStorage.setItem('theme','Default')
    }
    setCookie(localStorage.getItem('cookie'))
  })

  const getContentData = async(e)=>{
    e.preventDefault()
    setCookie(await getCookie(input.email,input.password))
  }

  if(cookie!==undefined&&cookie!==null){
    localStorage.setItem('cookie',cookie)
    return <Redirect to={`/HeyWasup/attendance`} />
  }
  

  const handleClick=()=>{
    setStyles({top:10,fontSize:20,topText:-40})
  }

  return (
    <div className='master-containeri'>
      <div className="containeri">
        <h1 className="texti" style={{top:`${styles.topText}%`,fontSize:`${styles.fontSize}px`}} onClick={()=>setStyles({top:100,fontSize:50,topText:-10})}>Skima</h1><br />
        <button className='btni' style={window.innerWidth>600?{display:'none'}:{}} onClick={handleClick}>Login</button>
      </div>
      <div className="form-containeri" style={{top:`${styles.top}%`}}>
        <form className="formi">
          <div style={{display:'flex'}}><span>&#9821;</span><input type='email' placeholder='Email' onChange={e=>setInput({...input,email:e.target.value})}/></div>
          <div style={{display:'flex'}}><span>&#9797;</span><input style={{marginBottom:20}} type='password' placeholder='Password' onChange={e=>setInput({...input,password:e.target.value})}/></div>
          <button className='btni' type='submit' onClick={e=>getContentData(e)}>Sign In</button>
          <SpinnerPage />
        </form>
      </div>
    </div>
  );
}

export default Landing;
