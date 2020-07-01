import React, { useState, useEffect } from 'react'
import {getContent} from '../Api/Api'
import { Link } from 'react-router-dom'
import {cardColorTheme} from './ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"

const Main = ({match}) => {

  const [content,setContent]=useState()
  const [styles,setStyles]=useState({transform:0})

  useEffect(()=>{
    const getContentData = async()=>{
      setContent(await getContent(match.params.id))
    }  
    getContentData()
  },[])

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
      {content&&content[1]['Attendance'].map((x,key)=>
      <div key={key} className="flip-card" onClick={handleFlips}>
        <div className="flip-card-inner" style={{transform:`rotateX(${styles.transform}deg)`}}>
          <div className="flip-card-front" style={parseInt(x['%'])<50?{backgroundImage: `linear-gradient(${cardColorTheme.danger})`}:parseInt(x['%'])<75?{backgroundImage: `linear-gradient(${cardColorTheme.warning})`}:parseInt(x['%'])<100?{backgroundImage: `linear-gradient(${cardColorTheme.safe})`}:{backgroundImage: `linear-gradient(${cardColorTheme.safest})`}}>
            <h2 className='main-heading'>{x['Course Title']}</h2>
            <div className='hours'>
              <div className='in-card-hours-detail'><p>Hours Absent </p><p>{x['Hours Absent']}</p></div>
              <div className='in-card-hours-detail'><p>Hours Conducted </p><p>{x['Hours Conducted']}</p></div>
              <div className='in-card-hours-detail'><p>Total Hours </p><p>{parseInt(x['Hours Conducted'])+parseInt(x['Hours Absent'])}</p></div>
            </div>
            <div className='progress-bar'>
            <Progress
              percent={x['%']}
              theme={{
                success: {
                  symbol:' ',
                  color: '#FCC709'
                },
                active: {
                  symbol:' ',
                  color: '#6970DD',
                },
                default: {
                  symbol: '😱',
                  color: '#4565D3'
                }
              }}
            />
            <p style={{color:'white',marginLeft:-30}}>{x['%']}%</p>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>Faculty Name: {x['Faculty Name']}</h1> 
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default Main;
