import React, { useState, useEffect } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Calendar from 'react-calendar';
import { getPlanner, getDaywisePlanner } from '../Api/Api'
import { cardColorTheme } from './ColorTheme'
import 'react-calendar/dist/Calendar.css';
import Nav from './Nav'
import BottomNav from './BottomNav'

const Planner = ( match )=> {

    const [plannerData,setPlannerData]=useState(null)
    useEffect(()=>{
        const getPlanner=async()=>{
            setPlannerData(await getDaywisePlanner(localStorage.getItem('cookie'),"Academic_Planner_2020_21_ODD"))
        }
        getPlanner()
    },[])
    const months=[`Aug`,`Sep`,`Oct`]
    let mark = []
    let tt=[]
    const arrangeTimetable=()=>{
        for(let i=0;i<months.length;i++){
            tt.push(plannerData[i][`${months[i]} '20`][2])
        }
        for(let i=0;i<months.length;i++){
            if(i<2)tt[i].Events.map((x,index)=>x!=""?mark.push(`${index+1}-0${i+8}-2020`):null)
            else tt[i].Events.map((x,index)=>x!=""?mark.push(`${index+1}-${i+8}-2020`):null)
        }
    }
    let c = -1;
    const incC = (counter) => {
        c = counter;
        return <><br/><h4>{months[counter]}'{new Date().getYear().toString().substr(-2)}</h4></>;
    }

    if(plannerData!=null)arrangeTimetable()

    const [date, setDate] = useState(new Date())

    const palette = cardColorTheme[localStorage.getItem('theme')]
    return (
        <>
        {(match.isFragment)?'':<Nav title='Planner'/>}
        <div className='main-container' style={Object.assign({}, palette.background, palette.heading, {minHeight: '100vh'})}>
            <div style={{padding: '0 18px 60px 18px'}}>
                <Calendar
                    value={date}
                    className='r-calendar white-text'
                    tileClassName={({ date, view }) => {
                        if (mark.find(x => x === (date.getDate() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear()))) {
                            return 'mark'
                        }
                    }}
                />
                {/* <h4><b>Skima</b></h4> */}
                {plannerData?<div>
                {
                    tt.map((x,indexX)=>x.Events.map((y,index)=>y!=""?<h5 key={Math.random()}><b>{(indexX != c)?incC(indexX):''} {index+1} {months[indexX]}:</b> {y}</h5>:<></>))
                }
                </div>:<center><Loader
              type="ThreeDots"
              color="black"
              height={50}
              width={50}
            /></center>}
            </div>
        </div>
        <BottomNav/>
        </>
    )
}
export default Planner;