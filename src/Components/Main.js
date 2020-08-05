import React, { useState } from 'react'
import { cardColorTheme } from './ColorTheme'
import Attendance from './Attendance'
import Grades from './Grades'
import Timetable from './Timetable'
import Store from './Store'
import Planner from './Planner'
import Nav from './Nav'


const BottomNav = () => {

    const palette = cardColorTheme[localStorage.getItem('theme')]
    const [navTitle, setNavTitle] = useState('Attendance')

    return (
        <>
            <Nav title={navTitle}/>
            <ul className="tabs tabs-a hide-on-med-and-up" style={Object(palette.background, palette.heading)}>
                <li className="tab"><a href="#test10" onClick={() => setNavTitle('Attendance')} style={{paddingTop: '6px'}}><i className="material-icons" style={Object.assign(palette.heading)}>perm_identity</i></a></li>
                <li className="tab"><a href="#test11" className='active' onClick={()=>setNavTitle('Info')} style={{paddingTop: '6px'}}><i className="material-icons" style={Object.assign(palette.heading)}>schedule</i></a></li>
                <li className="tab"><a href="#test12" onClick={()=>setNavTitle('Themes')} style={{paddingTop: '6px'}}><i className="material-icons" style={Object.assign(palette.heading)}>event</i></a></li>
            </ul>
            <div id="test10" className="col s12"><Attendance isFragment={true}/></div>
            <div id="test11" className="col s12"><Timetable isFragment={true}/></div>
            <div id="test12" className="col s12"><Planner isFragment={true}/></div>
        </>
    )
}

export default BottomNav