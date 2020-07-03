import React, { useEffect, useState } from 'react'
import { getSchedule } from '../Api/Api'

const Timetable = ({match}) => {

    const [schedule,setSchedule]=useState()    
    const [shift,setShift]=useState(0)    

    let arrangedTimetable=[]

    useEffect(()=>{
        const getScheduleData=async()=>{
            setSchedule(await getSchedule(match.params.id,localStorage.getItem('batch')))
        }
        getScheduleData()
    },[])

    const arrageTimetable=()=>{
        console.log(schedule)
        let timetable=[]
        for(let i=1;i<6;i++){
            schedule&&schedule.Schedule[`Day ${i}`].map(s=>{
                JSON.parse(localStorage.getItem('attendance'))[1].TimeTable.map(x=>{
                    if(x.Slot!==undefined){
                        if(s===x.Slot.split('-')[0])timetable.push(x)
                    }
                })
            })
            arrangedTimetable.push(timetable)
            timetable=[]
        }
        localStorage.setItem('timetable',JSON.stringify(arrangedTimetable))
    }
    
    arrageTimetable()

    console.log(arrangedTimetable)

    return ( 
        <div className='main-container'>
            <h1>Timetable</h1>
            <div className='btn-container'>
                <button className='btn' onClick={()=>setShift(0)} style={{marginRight:10,marginLeft:-10}}>1</button>
                <button className='btn' onClick={()=>setShift(-window.innerWidth+10)}>2</button>
                <button className='btn' onClick={()=>setShift(-window.innerWidth*2+20)} style={{marginLeft:10,marginRight:10}}>3</button>
                <button className='btn' onClick={()=>setShift(-window.innerWidth*3+30)} style={{marginRight:10}}>4</button>
                <button className='btn' onClick={()=>setShift(-window.innerWidth*4+40)} style={{marginRight:10}}>5</button>
            </div>
            <div className='timetable'>
                <div className='day-order-container' style={{transform:`translate(${shift}px,0)`}}>
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[0].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner">
						<div className="flip-card-front" style={{background:'red'}}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
							<div className='hours'>
								<div className='in-card-hours-detail'><p>Semester </p><p>Sem</p></div>
							</div>
						</div>
					</div>
				</div>)}
                </div>
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[1].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner">
						<div className="flip-card-front" style={{background:'red'}}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
							<div className='hours'>
								<div className='in-card-hours-detail'><p>Semester </p><p>Sem</p></div>
							</div>
						</div>
					</div>
				</div>)}
                </div>
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[2].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner">
						<div className="flip-card-front" style={{background:'red'}}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
							<div className='hours'>
								<div className='in-card-hours-detail'><p>Semester </p><p>Sem</p></div>
							</div>
						</div>
					</div>
				</div>)}
                </div>
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[3].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner">
						<div className="flip-card-front" style={{background:'red'}}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
							<div className='hours'>
								<div className='in-card-hours-detail'><p>Semester </p><p>Sem</p></div>
							</div>
						</div>
					</div>
				</div>)}
                </div>
                <div className='day-order'>
                {arrangedTimetable&&arrangedTimetable[4].map((x,key)=>
                <div key={key} className="flip-card" style={{width:window.innerWidth-20}}>
					<div className="flip-card-inner">
						<div className="flip-card-front" style={{background:'red'}}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
							<div className='hours'>
								<div className='in-card-hours-detail'><p>Semester </p><p>Sem</p></div>
							</div>
						</div>
					</div>
				</div>)}
                </div>
                </div>
            </div>
        </div>    
    )
}
 
export default Timetable