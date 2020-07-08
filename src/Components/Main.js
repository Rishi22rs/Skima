import React, { useState, useEffect } from 'react'
import {getContent,getKeys} from '../Api/Api'
import { Link } from 'react-router-dom'
import {cardColorTheme} from './ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"
import Nav from './Nav'

const Main = ({match}) => {

  const [content,setContent]=useState()
  const [styles,setStyles]=useState({transform:0})


  //test feature
  const [lux,setLux]=useState()

  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  
  if(theme === null)localStorage.setItem('theme', 'Default')

  useEffect(()=>{
    const getContentData = async()=>{
      setContent(await getContent(match.params.id))
    }  
    getContentData()
    getKeys(match.params.id)
    window.addEventListener("devicelight", function (event) {
      // Read out the lux value
      var lux = event.value;
      setLux(lux)
  });
  },[])

  // if(timetable.length)
  //   localStorage.setItem('batch',timetable[0].Student_Details[2]['Batch:'])

  const handleFlips=()=>{
    if(styles.transform===0)setStyles({...styles,transform:180})
    else setStyles({...styles,transform:0})
  }

  const palette = cardColorTheme[localStorage.getItem('theme')]
  return (
    <div className='main-container' style={palette.background}>
      <Nav title={lux}/>
      <div className='cards'>
      {content&&content[1]['Attendance'].map((x,key)=>
      <div key={key} className="flip-card" style={palette.frontCard}>
        <div className="flip-card-inner" style={palette.flipCardInner}>
          <div className="flip-card-front" style={Object.assign({}, palette.fontColor, parseInt(x['%'])<50?palette.danger:parseInt(x['%'])<75?palette.warning:parseInt(x['%'])<100?palette.safe:palette.safest)}>
          <h3 className='main-heading'>{x['Course Title']}</h3>
            <h5 className='main-heading'>{x['Course Code']}</h5>
              <div className="center-container">
                <div className="center">
                  <div className='hours' style={palette.fontColor}>
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
      </div>
    </div>
  );
}

export default Main;
