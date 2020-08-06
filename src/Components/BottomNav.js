import React, { useState } from 'react'
import { cardColorTheme } from './ColorTheme'
import Attendance from './Attendance'
import Grades from './Grades'
import Timetable from './Timetable'
import Store from './Store'
import Planner from './Planner'
import {Link} from 'react-router-dom'
import Nav from './Nav'


const BottomNav = () => {

    const palette = cardColorTheme[localStorage.getItem('theme')]
    // const [navTitle, setNavTitle] = useState('Attendance')
    const clearTab = ()=>{
        localStorage.setItem('actTab', '')
    }
    return (
        <>
            <ul className="tabs tabs-a hide-on-med-and-up" style={Object(palette.background, palette.heading)}>
                <Link onClick={clearTab} to="/HeyWasup/timetable" style={{paddingTop: '6px'}} className='tab'><i className="material-icons" style={Object.assign(palette.heading)}>schedule</i></Link>
                <li className='tab'><Link onClick={clearTab} to="/HeyWasup/attendance" style={{paddingTop: '6px'}}><i className="material-icons" style={Object.assign(palette.heading)}>perm_identity</i></Link></li>
                <Link onClick={clearTab} to="/HeyWasup/planner"  style={{paddingTop: '6px'}} className='tab'><i className="material-icons" style={Object.assign(palette.heading)}>event</i></Link>
            </ul>
        </>
    )
}

export default BottomNav