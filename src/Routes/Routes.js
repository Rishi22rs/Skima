import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom'
import Main from '../Components/Main'
import Landing from '../Components/Landing'
import Grades from '../Components/Grades'
import Timetable from '../Components/Timetable'
import Store from '../Components/Store'

const Routes=()=>(
    <Router>
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
        <Switch>
            <Route path='/HeyWasup/store/:id' exact component={Store}/>
        </Switch>
    </Router>
)

export default Routes