import React, { useEffect, useState } from 'react'
import { getSchedule } from '../Api/Api'
import {cardColorTheme} from './ColorTheme'
import nowork from '../Graphics/nowork.jpg'
import Nav from './Nav'

const Timetable = ({match}) => {

    if(localStorage.getItem('theme') === null)localStorage.setItem('theme', 'Default')
    const [schedule,setSchedule]=useState()    
    const [shift,setShift]=useState(0)    

    let arrangedTimetable=[]

    useEffect(()=>{
        const getScheduleData=async()=>{
            setSchedule(await getSchedule(match.params.id,localStorage.getItem('batch')))
        }
        getScheduleData()
        if(localStorage.getItem('day')==='No Day Order')setShift(-window.innerWidth*5+44)
        else setShift(-window.innerWidth*(parseInt(localStorage.getItem('day'))-1)+(10*(parseInt(localStorage.getItem('day'))-1.5)))
    },[])

    const arrageTimetable=()=>{
        let timeIndex=0
        let timetable=[]
        for(let i=1;i<6;i++){
            schedule&&schedule.Schedule[`Day ${i}`].map(s=>{
                JSON.parse(localStorage.getItem('attendance'))[1].TimeTable.map(x=>{
                    if(x.Slot!==undefined){
                        if(s===x.Slot.split('-')[0]){
                            timetable.push({...x,time:schedule.Schedule['FROM'][timeIndex]})
                        }
                    }
                })
                timeIndex+=1
            })
            arrangedTimetable.push(timetable)
            timetable=[]
            timeIndex=0
        }
        localStorage.setItem('timetable',JSON.stringify(arrangedTimetable))
    }
    
    arrageTimetable()
    const palette = cardColorTheme[localStorage.getItem('theme')]
    console.log(arrangedTimetable)
    console.log(schedule)

    return ( 
        <div className='main-container' style={palette.background}>
            <Nav title='Timetable'/>
            <div className='cards'>
            <div className='btn-container'>
                <button className='btn' onClick={()=>setShift(-6)} style={{marginRight:10,marginLeft:-10}}>1</button>
                <button className='btn' onClick={()=>setShift(-window.innerWidth+4)}>2</button>
                <button className='btn' onClick={()=>setShift(-window.innerWidth*2+14)} style={{marginLeft:10,marginRight:10}}>3</button>
                <button className='btn' onClick={()=>setShift(-window.innerWidth*3+24)} style={{marginRight:10}}>4</button>
                <button className='btn' onClick={()=>setShift(-window.innerWidth*4+34)} style={{marginRight:10}}>5</button>
                <button className='btn' onClick={()=>setShift(-window.innerWidth*5+44)} style={{marginRight:10}}>Chill</button>
            </div>
            <div className='timetable'>
                <div className='day-order-container' style={{transform:`translate(${shift}px,0)`}}>
                    
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[0].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner" style={palette.flipCardInner}>
						<div className="flip-card-front" style={Object.assign({}, palette.fontColor, palette.safest)}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
                                <div className="center-container">
                                    <div className="center">
                                        <p>{x['Faculty Name']}</p>
                                        <div className='hours'>
                                            <div className='in-card-hours-detail'><h2>{x.time.trim()}</h2></div>
                                            <div className='in-card-hours-detail' style={{marginTop:5}}><p>{x['Room No.']}</p></div>
                                        </div>
                                        <h2>{x.Slot}</h2>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[1].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner" style={palette.flipCardInner}>
						<div className="flip-card-front" style={Object.assign({}, palette.fontColor, palette.safest)}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
                                <div className="center-container">
                                    <div className="center">
                                        <p>{x['Faculty Name']}</p>
                                        <div className='hours'>
                                            <div className='in-card-hours-detail'><h2>{x.time.trim()}</h2></div>
                                            <div className='in-card-hours-detail' style={{marginTop:5}}><p>{x['Room No.']}</p></div>
                                        </div>
                                        <h2>{x.Slot}</h2>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[2].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner" style={palette.flipCardInner}>
						<div className="flip-card-front" style={Object.assign({}, palette.fontColor, palette.safest)}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
                                <div className="center-container">
                                    <div className="center">
                                        <p>{x['Faculty Name']}</p>
                                        <div className='hours'>
                                            <div className='in-card-hours-detail'><h2>{x.time.trim()}</h2></div>
                                            <div className='in-card-hours-detail' style={{marginTop:5}}><p>{x['Room No.']}</p></div>
                                        </div>
                                        <h2>{x.Slot}</h2>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[3].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner" style={palette.flipCardInner}>
						<div className="flip-card-front" style={Object.assign({}, palette.fontColor, palette.safest)}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
                                <div className="center-container">
                                    <div className="center">
                                        <p>{x['Faculty Name']}</p>
                                        <div className='hours'>
                                            <div className='in-card-hours-detail'><h2>{x.time.trim()}</h2></div>
                                            <div className='in-card-hours-detail' style={{marginTop:5}}><p>{x['Room No.']}</p></div>
                                        </div>
                                        <h2>{x.Slot}</h2>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[4].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner" style={palette.flipCardInner}>
						<div className="flip-card-front" style={Object.assign({}, palette.fontColor, palette.safest)}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
                                <div className="center-container">
                                    <div className="center">
                                        <p>{x['Faculty Name']}</p>
                                        <div className='hours'>
                                            <div className='in-card-hours-detail'><h2>{x.time.trim()}</h2></div>
                                            <div className='in-card-hours-detail' style={{marginTop:5}}><p>{x['Room No.']}</p></div>
                                        </div>
                                        <h2>{x.Slot}</h2>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className='day-order img'>
                    <img src={nowork} width={window.innerWidth-20} height={400} alt='no work'/>
                </div>
                </div>
            </div>
            </div>
        </div>    
    )
}
 
export default Timetable