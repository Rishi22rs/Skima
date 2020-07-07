import React,{useState} from 'react'
import {cardColorTheme} from './ColorTheme'
import {Link} from 'react-router-dom'

const Sidenav = ({closeNav}) => {

    return (
        <>
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <Link onClick={closeNav} to={`/HeyWasup/${localStorage.getItem('cookie')}`} >Home</Link>
        <Link onClick={closeNav} to={`/HeyWasup/grades/${localStorage.getItem('cookie')}`} >Grades</Link>
        <Link onClick={closeNav} to={`/HeyWasup/timetable/${localStorage.getItem('cookie')}`} >Timetable</Link>
        </>
    );
}
 
export default Sidenav