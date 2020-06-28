import React, { useState } from 'react'
import '../Styles/styles.css'

function Landing() {

  const [styles,setStyles]=useState({
    top:100,
    fontSize:50,
    topText:-10
  })

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
          <div style={{display:'flex'}}><span>&#9821;</span><input className="inpL" type='email' placeholder='Email'/></div>
          <div style={{display:'flex'}}><span>&#9797;</span><input className="inpL" type='password' placeholder='Password'/></div>
          <button className='btn'>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Landing;
