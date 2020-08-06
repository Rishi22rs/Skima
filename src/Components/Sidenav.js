import React,{useState} from 'react'
import {cardColorTheme} from './ColorTheme'
import {Link} from 'react-router-dom'

class Sidenav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {active: 'home'}
    }
    componentDidMount() {
        window.initSidenav();
    }
    // let closeSidenav = () => {
    //     window.closeSidenav();
    // }
    setActive(tab) {
        this.setState({ active: tab }, () => {
            if (tab !== this.state.active)
                window.closeSidenav()
        })
    }
    render() {
        let palette = cardColorTheme[localStorage.getItem('theme')]
        return(
        <React.Fragment>
            <ul id="slide-out" className="sidenav sidenav-fixed" style={palette.background}>
                <li><a className="subheader" style={palette.heading}><h5>Skima</h5></a></li>
                <li onClick={()=>window.closeSidenav()} className='hide-on-large-only'><Link to={`/`} className='waves-effect' style={palette.heading}><i className="material-icons" style={palette.heading}>home</i>Home</Link></li>
                <li onClick={()=>this.setActive('home')} className='hide-on-med-and-down'><Link to={`/HeyWasup/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i className="material-icons" style={palette.heading}>schedule</i>Timetable</Link></li>
                <li onClick={()=>this.setActive('grades')}><Link to={`/HeyWasup/grades/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i className="material-icons" style={palette.heading}>grade</i>Grades</Link></li>
                <li onClick={()=>this.setActive('attendance')} className='hide-on-med-and-down'><Link to={`/HeyWasup/attendance/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i className="material-icons" style={palette.heading}>perm_identity</i>Attendance</Link></li>
                <li onClick={()=>this.setActive('planner')} className='hide-on-med-and-down'><Link to={`/HeyWasup/planner/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i className="material-icons" style={palette.heading}>event</i>Planner</Link></li>
                <li onClick={()=>this.setActive('analytics')}><Link to={`/HeyWasup/analytics/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i className="material-icons" style={palette.heading}>show_chart</i>Analytics</Link></li>
                <li><div className="divider" style={{ marginBottom: '12px' }}></div></li>
                <li onClick={()=>this.setActive('themes')}><Link to={`/HeyWasup/themes/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i className="material-icons" style={palette.heading}>format_paint</i>Themes</Link></li>
                <div onClick={()=>localStorage.clear()} style={{ position: 'absolute', bottom: '60px', width: '100%' }}><li><Link to={`/`} className='waves-effect' style={palette.heading}><i className="material-icons" style={palette.heading}>exit_to_app</i>Logout</Link></li></div>
            </ul>
            </React.Fragment>
        )
    };
}
 
export default Sidenav