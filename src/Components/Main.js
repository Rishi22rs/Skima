import React, { useState, useEffect } from 'react'
import {getContent,getKeys} from '../Api/Api'
import { Link } from 'react-router-dom'
import {cardColorTheme} from './ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"

const Main = ({match}) => {

  const [content,setContent]=useState()
  const [styles,setStyles]=useState({transform:0})

  //test feature
  const [theme,setTheme]=useState(localStorage.getItem['theme'])

  useEffect(()=>{
    const getContentData = async()=>{
      setContent(await getContent(match.params.id))
    }  
    getContentData()
    getKeys(match.params.id)
  },[])

  // if(timetable.length)
  //   localStorage.setItem('batch',timetable[0].Student_Details[2]['Batch:'])

  const handleFlips=()=>{
    if(styles.transform===0)setStyles({...styles,transform:180})
    else setStyles({...styles,transform:0})
  }

  const logout=()=>{
    localStorage.clear()
  }

  const triggerTheme=()=>{
    if(localStorage.getItem('theme')==0){
      localStorage.setItem('theme',1)
      setTheme(1)
    }else{
      localStorage.setItem('theme',0)
      setTheme(0)
    }
  }

  return (
    <div className="main-container">
      <div className='main-name-container'>
        {content===undefined?<h1>Loading</h1>:<h1>Welcome, {content[0]['Academic Status'][1]['Name']}</h1>}
        <Link className='main-logout' onClick={logout} to='/'>&#x262D;</Link>
      </div>
      <button className='btn' onClick={triggerTheme}>Trigger theme</button>
      {content&&content[1]['Attendance'].map((x,key)=>
      <div key={key} className="flip-card" onClick={handleFlips}>
        <div className="flip-card-inner" style={{transform:`rotateX(${styles.transform}deg)`}}>
          <div className="flip-card-front" style={parseInt(x['%'])<50?{backgroundImage: `linear-gradient(${cardColorTheme[localStorage.getItem('theme')].danger})`}:parseInt(x['%'])<75?{backgroundImage: `linear-gradient(${cardColorTheme[localStorage.getItem('theme')].warning})`}:parseInt(x['%'])<100?{backgroundImage: `linear-gradient(${cardColorTheme[localStorage.getItem('theme')].safe})`}:{backgroundImage: `linear-gradient(${cardColorTheme[localStorage.getItem('theme')].safest})`}}>
          <h3 className='main-heading'>{x['Course Title']}</h3>
            <h5 className='main-heading'>{x['Course Code']}</h5>
              <div className="center-container">
                <div className="center">
                  <div className='hours'>
                  <div className='in-card-hours-detail'><p>Conducted</p><p>{parseInt(x['Hours Conducted'])}</p></div>
                  <div className='in-card-hours-detail'><p>Present </p><p>{parseInt(x['Hours Conducted']) - parseInt(x['Hours Absent'])}</p></div>
                  <div className='in-card-hours-detail'><p>Absent</p><p>{x['Hours Absent']}</p></div>
                  <div className='in-card-hours-detail'><p className='bold'>Bunk</p><p>{parseInt(x['Hours Conducted'])*0.75 - (parseInt(x['Hours Conducted']) - parseInt(x['Hours Absent']))}</p></div>
                  <div className="in-card-hours-detail"><p>{x["Room No"]}</p></div>  
                </div>
              </div>
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
            <p className='percent'>{x['%']}%</p>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>Faculty Name: {x['Faculty Name']}</h1> 
          </div>
        </div>
      </div>)}
      <Link to={`/HeyWasup/grades/${localStorage.getItem('cookie')}`} >Grades</Link>
      <Link to={`/HeyWasup/timetable/${localStorage.getItem('cookie')}`} >Timetable</Link>
    </div>
  );
}

export default Main;
