import React, { useState } from 'react'
import Sidenav from './Sidenav'
import { Link } from 'react-router-dom'
import { cardColorTheme } from './ColorTheme'

const Nav=({
    title = "Attendance",
    medals = ""
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

      const palette = cardColorTheme[localStorage.getItem('theme')]

    return(
        <>
        <Sidenav/>
        <div className="navbar-fixed">
            <nav style={palette.background}>
            <div class="nav-wrapper"  style={palette.heading}>
            <a href="#" data-target="slide-out" class="sidenav-trigger"><i className="material-icons" style={palette.heading}>menu</i></a>
            <span className="left-align" style={Object.assign({}, palette.heading, { fontSize: '2em', paddingLeft: '8px' })}><i class="material-icons hide-on-med-and-down" style={Object.assign({}, palette.heading, {float: 'left', paddingRight: '8px'})}>arrow_forward</i>{title}</span>
            <div className='right main-medals'>{medals}</div>
            </div>
            </nav>
        </div>
        </>
    )
}

export default Nav