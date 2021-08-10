import React, { useState, useEffect } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {getContent,getKeys,getCookie,getGrades} from '../Api/Api'
import {cardColorTheme} from './ColorTheme'
import AttendanceCard from './UI/AttendanceCard'
import "react-sweet-progress/lib/style.css"
import Sidenav from './Sidenav'
import BottomNav from './BottomNav'
import Nav from './Nav'
import LoaderIcon from './UI/LoaderIcon'


const Attendance = ( match ) => {

  const [content,setContent]=useState()
  const [styles,setStyles]=useState({transform:0})
  const [result,setResult]=useState()
  const grades = []

  const getRating=(grades)=> {
		let gradeArr = ["F", "C", "C+", "B", "B+", "A", "A+", "O"];
		let maxScore = 7 * grades.length
		const scoreArr = grades.map(grade => gradeArr.indexOf(grade));
		var sum = scoreArr.reduce(function (a, b) {
			return a + b;
		}, 0);
		return (sum / maxScore * 5).toFixed(1)
	}

  //test feature
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const cookie = localStorage.getItem('cookie');
  
  if(theme === null)localStorage.setItem('theme', 'Default')

  useEffect(()=>{
    const getContentData = async()=>{
      setContent(await getContent(cookie))
    }  
    getContentData()
    const getKey=async()=>{
      await getKeys(cookie)
    }
    getKey()
    const getGrade=async()=>{
      setResult(await getGrades(cookie))
    }
    getGrade()
  },[])

  result&&result.Grades.map((x) => grades.push(x["Grade"]))
  const rating = getRating(grades)
  
  localStorage.setItem('rate',rating)

  // if(timetable.length)
  //   localStorage.setItem('batch',timetable[0].Student_Details[2]['Batch:'])

  const palette = cardColorTheme[localStorage.getItem('theme')]
  return (
    <div style={Object.assign({},palette.background, {minHeight: '100vh'})}>
      {(match.isFragment)?'':<Nav title='Attendance'/>}
      {content&&content[0]?<div className='main-container' style={Object.assign({}, {paddingBottom: '18px'})}>
        <div className="row" style={{margin: '0'}}>
          {content && content[1]['Attendance'].map((x, key) =>
            <div key={key} className="col s12 m6 l3">
              <AttendanceCard data={x} />
            </div>
          )}
        </div>
      </div>:<LoaderIcon />}
      <BottomNav/>
    </div>
  );
}

export default Attendance;
