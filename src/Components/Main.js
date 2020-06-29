import React, { useState, useEffect } from 'react'
import {getContent} from '../Api/Api'
import { Link, Redirect } from 'react-router-dom'

const Main = ({match}) => {

  const [content,setContent]=useState()
  const [styles,setStyles]=useState({transform:0})

  useEffect(()=>{
    const getContentData = async()=>{
      setContent(await getContent(match.params.id))
    }  
    getContentData()
  },[])

  if(content!==undefined){
    console.log(content)
    console.log(content[0]['Academic Status'][0]['Registration Number'])
  }

  const handleFlips=()=>{
    if(styles.transform===0)setStyles({...styles,transform:180})
    else setStyles({...styles,transform:0})
  }

  const logout=()=>{
    localStorage.clear()
  }

  return (
    <div className="main-container">
      <div className='main-name-container'>
        {content===undefined?<h1>Loading</h1>:<h1>Welcome, {content[0]['Academic Status'][1]['Name']}</h1>}
        <Link className='main-logout' onClick={logout} to='/'>&#x262D;</Link>
      </div>
      {content&&content[1]['Attendance'].map(x=>
      <div class="flip-card" onClick={handleFlips}>
        <div class="flip-card-inner" style={{transform:`rotateX(${styles.transform}deg)`}}>
          <div class="flip-card-front">
            <h1>{x['Course Title']}</h1>
            <h2>{x['%']}%</h2>
          </div>
          <div class="flip-card-back">
            <h1>Faculty Name: {x['Faculty Name']}</h1> 
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default Main;
