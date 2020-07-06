import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom'
import Main from '../Components/Main'
import Landing from '../Components/Landing'
import Grades from '../Components/Grades'
import Timetable from '../Components/Timetable'
import {cardColorTheme} from '../Components/ColorTheme'

const Routes=()=>{

    const [styles,setStyles]=useState({marginLeft:0})

    useEffect(()=>{
        if(localStorage.getItem('theme')===null)localStorage.setItem('theme',0)
    },[])

    const triggerNav=()=>{
        document.getElementById("mySidenav").style.width = "250px";
        setStyles({...styles,marginLeft:250})
      }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        setStyles({...styles,marginLeft:0})
    }

    const logout=()=>{
        localStorage.clear()
      }

    return(
        <>
        <Router>
            <div id="mySidenav" className="sidenav" style={cardColorTheme[localStorage.getItem('theme')].safest}>
                <a className="closebtn" onClick={closeNav}>&times;</a>
                <Link onClick={closeNav} to={`/HeyWasup/${localStorage.getItem('cookie')}`} >Home</Link>
                <Link onClick={closeNav} to={`/HeyWasup/grades/${localStorage.getItem('cookie')}`} >Grades</Link>
                <Link onClick={closeNav} to={`/HeyWasup/timetable/${localStorage.getItem('cookie')}`} >Timetable</Link>
            </div>
            <div className='sidenav-btn'>
                <span style={{'fontSize':'30px','cursor':'pointer'}} onClick={triggerNav}>&#9776;</span>
                <Link className='main-logout' onClick={logout} to='/'>🚪</Link>
            </div>
            <Switch>
                <Route path='/' exact component={Landing}/>
            </Switch>
            <Switch>
                <Route path='/HeyWasup/:id' exact component={Main}/>
            </Switch>
            <Switch>
                <Route path='/HeyWasup/grades/:id' exact component={Grades}/>
            </Switch>
            <Switch>
                <Route path='/HeyWasup/timetable/:id' exact component={Timetable}/>
            </Switch>
        </Router>
        </>
    )
}

export default Routes