import React, { useState } from 'react'
import { cardColorTheme } from './ColorTheme'
import Main from './Main'
import Grades from './Grades'
import Store from './Store'
import Planner from './Planner'
import Nav from './Nav'


const BottomNav = () => {

    const palette = cardColorTheme[localStorage.getItem('theme')]
    const [navTitle, setNavTitle] = useState('Planner')

    return (
        <>
            <Nav title={navTitle}/>
            <ul className="tabs hide-on-med-and-up">
                <li className="tab"><a href="#test1" onClick={()=>setNavTitle('Attendance')}><i className="material-icons" style={palette.heading}>perm_identity</i></a></li>
                <li className="tab"><a href="#test2" onClick={()=>setNavTitle('Info')} className="active"><i className="material-icons" style={palette.heading}>show_chart</i></a></li>
                <li className="tab"><a href="#test3" onClick={()=>setNavTitle('Themes')}><i className="material-icons" style={palette.heading}>format_paint</i></a></li>
            </ul>
            <div id="test1" className="col s12"><Main isFragment={true}/></div>
            <div id="test2" className="col s12"><Planner isFragment={true}/></div>
            <div id="test3" className="col s12"><Store isFragment={true}/></div>
        </>
    )
}

export default BottomNav