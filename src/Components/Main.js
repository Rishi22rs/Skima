import React, { useState } from 'react'
import { cardColorTheme } from './ColorTheme'
import Attendance from './Attendance'
import Grades from './Grades'
import Store from './Store'
import Planner from './Planner'
import Nav from './Nav'


const BottomNav = () => {

    const palette = cardColorTheme[localStorage.getItem('theme')]
    const [navTitle, setNavTitle] = useState('Attendance')

    return (
        <>
            <Nav title={navTitle}/>
            <ul className="tabs hide-on-med-and-up" style={Object(palette.background, palette.heading)}>
                <li className="tab"><a href="#test1" onClick={()=>setNavTitle('Info')} style={{paddingTop: '6px'}}><i className="material-icons" style={Object.assign(palette.heading)}>event</i></a></li>
                <li className="tab"><a href="#test2" onClick={() => setNavTitle('Attendance')} className="active" style={{paddingTop: '6px'}}><i className="material-icons" style={Object.assign(palette.heading)}>perm_identity</i></a></li>
                <li className="tab"><a href="#test3" onClick={()=>setNavTitle('Themes')} style={{paddingTop: '6px'}}><i className="material-icons" style={Object.assign(palette.heading)}>format_paint</i></a></li>
            </ul>
            <div id="test1" className="col s12"><Planner isFragment={true}/></div>
            <div id="test2" className="col s12"><Attendance isFragment={true}/></div>
            <div id="test3" className="col s12"><Grades isFragment={true}/></div>
        </>
    )
}

export default BottomNav