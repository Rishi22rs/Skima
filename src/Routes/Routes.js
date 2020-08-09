import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom'
import Landing from '../Components/Landing'
import Grades from '../Components/Grades'
import Timetable from '../Components/Timetable'
import Store from '../Components/Store'
import Planner from '../Components/Planner'
import Analytics from '../Components/Analytics'
import Attendance from '../Components/Attendance'
import ReactGA from 'react-ga'

const Routes=()=>{

    useEffect(()=>{
        ReactGA.initialize('UA-175012236-1')
        ReactGA.pageview(window.location.pathname + window.location.search)
    })
    return(
    <Router>
        <Switch>
            <Route path='/' exact component={Landing}/>
        </Switch>
        {/* <Switch>
            <Route path='/HeyWasup' exact component={Main}/>
        </Switch> */}
        <Switch>
            <Route path='/HeyWasup/attendance' exact component={Attendance} />
        </Switch>
        <Switch>
            <Route path='/HeyWasup/grades' exact component={Grades}/>
        </Switch>
        <Switch>
            <Route path='/HeyWasup/timetable' exact component={Timetable}/>
        </Switch>
        <Switch>
            <Route path='/HeyWasup/themes' exact component={Store}/>
        </Switch>
        <Switch>
            <Route path='/HeyWasup/planner' exact component={Planner} />
        </Switch>
        <Switch>
            <Route path='/HeyWasup/analytics' exact component={Analytics} />
        </Switch>
    </Router>
    )
}

export default Routes