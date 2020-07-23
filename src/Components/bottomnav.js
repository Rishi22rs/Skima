import React, { useState } from 'react'
import { cardColorTheme } from './ColorTheme'
import Main from '../Components/Main'
import Grades from '../Components/Grades'
import Store from '../Components/Store'
import Planner from '../Components/Planner'
import Nav from './Nav'


const BottomNav = () => {

    const palette = cardColorTheme[localStorage.getItem('theme')]

    return (
        <>
            <Nav/>
            <ul className="tabs">
                <li className="tab"><a href="#test1"><i className="material-icons" style={palette.heading}>perm_identity</i></a></li>
                <li className="tab"><a href="#test2" className="active"><i className="material-icons" style={palette.heading}>show_chart</i></a></li>
                <li className="tab"><a href="#test3"><i className="material-icons" style={palette.heading}>format_paint</i></a></li>
            </ul>
            <div id="test1" className="col s12"><Planner/></div>
            <div id="test2" className="col s12"><Main/></div>
            <div id="test3" className="col s12"><Store/></div>
        </>
    )
}

export default BottomNav