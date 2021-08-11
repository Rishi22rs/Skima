import React, { useEffect, useState } from 'react'
import { getSchedule } from '../Api/Api'
import {cardColorTheme} from './ColorTheme'
import BottomNav from './BottomNav'
import nowork from '../Graphics/nowork.jpg'
import TimetableCard from './UI/TimetableCard'
import Nav from './Nav'
import LoaderIcon from './UI/LoaderIcon'

const Timetable = (match) => {

    if(localStorage.getItem('theme') === null)localStorage.setItem('theme', 'Default')
    const [schedule,setSchedule]=useState()    
    const [shift,setShift]=useState(0)    
    const [arrangedTimetable,setArrangedTimetable]=useState([])

    let arrangedTimetableTemp=[]

    useEffect(()=>{
        const getScheduleData=async()=>{
            // setSchedule(await getSchedule(localStorage.getItem('cookie'),localStorage.getItem('batch')))
            getSchedule(localStorage.getItem('cookie'),localStorage.getItem('batch')).then(res=>{
                setSchedule(res)
                arrageTimetable(res)
                localStorage.setItem("schedule",JSON.stringify(res))

            })

        }
        getScheduleData()
        if(localStorage.getItem('day')==='No Day Order')setShift(-window.innerWidth*5+44)
        else setShift(-window.innerWidth*(parseInt(localStorage.getItem('day'))-1)+(10*(parseInt(localStorage.getItem('day'))-1.5)))
    },[])

    const isActive = (dayOrder) => {
        return (localStorage.getItem('day') == dayOrder)?"active":""
    }

    const arrageTimetable=(scheduleRes)=>{
        let timetable=[]
        for(let i=1;i<6;i++){
            let timeIdx=0
            scheduleRes&&scheduleRes.Schedule[`Day ${i}`].map(s=>{
                JSON.parse(localStorage.getItem('attendance'))[1].TimeTable.map(x=>{
                   if(x.Slot===s){
                       timetable.push({...x,time:scheduleRes.Schedule["FROM"][timeIdx]})
                   }
                })
                timeIdx++
            })
            arrangedTimetableTemp.push(timetable)
            timetable=[]
        }

        setArrangedTimetable(arrangedTimetableTemp)
    }
    
    const palette = cardColorTheme[localStorage.getItem('theme')]

    // console.log(JSON.parse(localStorage.getItem('attendance')))

    return (
        <>
        {(match.isFragment)?'':<Nav title='Timetable'/>}
        <div className='main-container' style={palette.background}>
            <div className=''>
            <div className="row" style={{margin: 0, paddingBottom: '18px'}}>
                <div className="col s12">
                    <ul id="tabs-swipe-demo" className="tabs" style={Object.assign({}, palette.background, {zIndex: 99})}>
                        <li className="tab col s2"><a className={isActive(1)} href="#test-swipe-1">1</a></li>
                        <li className="tab col s2"><a className={isActive(2)} href="#test2">2</a></li>
                        <li className="tab col s2"><a className={isActive(3)} href="#test3">3</a></li>
                        <li className="tab col s2"><a className={isActive(4)} href="#test4">4</a></li>
                        <li className="tab col s2"><a className={isActive(5)} href="#test5">5</a></li>
                    </ul>
                </div>
                <div id="test-swipe-1" className="col s12">
                    {arrangedTimetable.length>0&&arrangedTimetable[0].map((x,key)=>
                    <div className="row" style={{margin: 0}}>
                        <TimetableCard data={x} key={key} />
                    </div>)}
                </div>
                <div id="test2" className="col s12">
                    {arrangedTimetable.length>0&&arrangedTimetable[1].map((x,key)=>
                    <div className="row" style={{margin: 0}}>
                        <TimetableCard data={x} key={key} />
                    </div>)}
                </div>
                <div id="test3" className="col s12">
                    {arrangedTimetable.length>0&&arrangedTimetable[2].map((x,key)=>
                    <div className="row" style={{margin: 0}}>
                        <TimetableCard data={x} key={key} />
                    </div>)}
                </div>
                <div id="test4" className="col s12">
                    {arrangedTimetable.length>0&&arrangedTimetable[3].map((x,key)=>
                    <div className="row" style={{margin: 0}}>
                        <TimetableCard data={x} key={key} />
                    </div>)}
                </div>
                <div id="test5" className="col s12">
                        {arrangedTimetable.length>0&&arrangedTimetable[4].map((x,key)=>
                        <div className="row" style={{margin: 0}}>
                            <TimetableCard data={x} key={key} />
                        </div>)}
                    </div>
                {/* <div id="test6" className="col s12">
                        {arrangedTimetable.length>0&&arrangedTimetable[5].map((x,key)=>
                        <div className="row" style={{margin: 0}}>
                            <TimetableCard data={x} key={key} />
                        </div>)}
                    </div> */}
                </div>
            </div>
        </div> 
        <BottomNav/>   
        </>
    )
}
 
export default Timetable