import React,{useState} from 'react'
import {cardColorTheme} from './ColorTheme'
import {Link} from 'react-router-dom'

class Sidenav extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.initSidenav();
    }
    render() {
        let palette = cardColorTheme[localStorage.getItem('theme')]
        return(
        <React.Fragment>
            <ul id="slide-out" className="sidenav sidenav-fixed" style={palette.background}>
                <li><a class="subheader" style={palette.heading}><h5>Skima</h5></a></li>
                <li><a href={`/HeyWasup/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i class="material-icons" style={palette.heading}>perm_identity</i>Attendance</a></li>
                <li><a href={`/HeyWasup/grades/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i class="material-icons" style={palette.heading}>grade</i>Grades</a></li>
                <li><a href={`/HeyWasup/timetable/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i class="material-icons" style={palette.heading}>schedule</i>Timetable</a></li>
                <li><a href={`/HeyWasup/planner/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i class="material-icons" style={palette.heading}>event</i>Planner</a></li>
                <li><a href={`/HeyWasup/analytics/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i class="material-icons" style={palette.heading}>show_chart</i>Analytics</a></li>
                <li><div class="divider" style={{ marginBottom: '12px' }}></div></li>
                <li><a href={`/HeyWasup/themes/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i class="material-icons" style={palette.heading}>format_paint</i>Themes</a></li>
                <div style={{ position: 'absolute', bottom: '60px', width: '100%' }}><li><a href={`/HeyWasup/themes/${localStorage.getItem('cookie')}`} className='waves-effect' style={palette.heading}><i class="material-icons" style={palette.heading}>exit_to_app</i>Logout</a></li></div>
            </ul>
            </React.Fragment>
        )
    };
}
 
export default Sidenav