import React,{useState} from 'react'
import {cardColorTheme} from './ColorTheme'
import {Link} from 'react-router-dom'

const Sidenav = ({closeNav}) => {

    const palette = cardColorTheme[localStorage.getItem('theme')]
    return (
        <>
        <a className="closebtn" onClick={closeNav} style={palette.fontColor}>&times;</a>
        <Link onClick={closeNav} style={palette.fontColor} to={`/HeyWasup/${localStorage.getItem('cookie')}`} >Home</Link>
        <Link onClick={closeNav} style={palette.fontColor} to={`/HeyWasup/grades/${localStorage.getItem('cookie')}`} >Grades</Link>
        <Link onClick={closeNav} style={palette.fontColor} to={`/HeyWasup/timetable/${localStorage.getItem('cookie')}`} >Timetable</Link>
        <Link onClick={closeNav} style={palette.fontColor} to={`/HeyWasup/themes/${localStorage.getItem('cookie')}`} >Themes</Link>
        </>
    );
}
 
export default Sidenav