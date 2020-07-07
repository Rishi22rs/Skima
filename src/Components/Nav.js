import React, { useState } from 'react'
import Sidenav from './Sidenav'
import { Link } from 'react-router-dom'
import { cardColorTheme } from './ColorTheme'

const Nav=({
    title="Attendance"
})=>{

    const [styles,setStyles]=useState({marginLeft:0,width:0})


    function closeNav() {
        setStyles({...styles,marginLeft:0,width:0})
    }

    const triggerNav=()=>{
        setStyles({...styles,marginLeft:250,width:250})
      }

    const logout=()=>{
        localStorage.clear()
      }

    return(
    <div style={{position:"fixed"}}>
    <div id="mySidenav" className="sidenav" style={{width:styles.width,backgroundImage:"linear-gradient(to bottom right,#EC79C4,#A183F1)"}}>
        <Sidenav closeNav={closeNav}/>
    </div>
    <div className='main-name-container'>
        <span style={{fontSize:'30px',cursor:'pointer',left:0}} onClick={triggerNav}>&#9776;</span>
        <h1>{title}</h1>
        <Link className='main-logout' onClick={logout} to='/'>🚪</Link>
    </div>
    </div>
    )
}

export default Nav