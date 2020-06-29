import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Main from '../Components/Main'
import Landing from '../Components/Landing'

const Routes=()=>(
    <Router>
        <Switch>
            <Route path='/' exact component={Landing}/>
        </Switch>
        <Switch>
            <Route path='/HeyWasup/:id' component={Main}/>
        </Switch>
    </Router>
)

export default Routes