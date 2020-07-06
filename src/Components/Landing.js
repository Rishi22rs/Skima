import React, { useState,useEffect } from 'react'
import '../Styles/styles.css'
import {getCookie} from '../Api/Api'
import { Redirect } from 'react-router-dom'

function Landing() {

  const [styles,setStyles]=useState({
    top:100,
    fontSize:50,
    topText:-10
  })

  const [input,setInput]=useState({email:'',password:''})

	const [cookie,setCookie]=useState()

  useEffect(()=>{
    localStorage.setItem('theme',0)
    setCookie(localStorage.getItem('cookie'))
  })

  const getContentData = async(e)=>{
    e.preventDefault()
    setCookie(await getCookie(input.email,input.password))
  }

  if(cookie!==undefined&&cookie!==null){
    localStorage.setItem('cookie',cookie)
    return <Redirect to={`/HeyWasup/${cookie}`} />
  }
  

  const handleClick=()=>{
    setStyles({top:10,fontSize:20,topText:-40})
  }

  return (
    <div className='master-container'>
      <div className="container">
        <h1 className="text" style={{top:`${styles.topText}%`,fontSize:`${styles.fontSize}px`}} onClick={()=>setStyles({top:100,fontSize:50,topText:-10})}>Academia</h1><br />
        <button className='btn hide' onClick={handleClick}>Login</button>
      </div>
      <div className="form-container" style={{top:`${styles.top}%`}}>
        <form className="form">
          <div style={{display:'flex'}}><span>&#9821;</span><input className="inpL" type='email' placeholder='Email' onChange={e=>setInput({...input,email:e.target.value})}/></div>
          <div style={{display:'flex'}}><span>&#9797;</span><input className="inpL" type='password' placeholder='Password' onChange={e=>setInput({...input,password:e.target.value})}/></div>
          <button className='btn' type='submit' onClick={e=>getContentData(e)}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Landing;
