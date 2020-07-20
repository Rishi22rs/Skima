import React,{useState} from 'react'
import {cardColorTheme} from './ColorTheme'
import {Link} from 'react-router-dom'

class Sidenav extends React.Component {
    constructor(props) {
        super(props)
        this.palette = cardColorTheme[localStorage.getItem('theme')]
    }
    componentDidMount() {
        this.close = () => {
            window.sidenav.close()
        }
    }
    render() {
        return(
        <React.Fragment>
            <ul id="slide-out" className="sidenav sidenav-fixed" style={this.palette.background}>
                <li><a class="subheader" style={this.palette.heading}><h5>Skima</h5></a></li>
                <li><a href={`/HeyWasup/${localStorage.getItem('cookie')}`} onClick={this.close} className='waves-effect' style={this.palette.heading}><i class="material-icons" style={this.palette.heading}>perm_identity</i>Attendance</a></li>
                <li><a href={`/HeyWasup/grades/${localStorage.getItem('cookie')}`} className='waves-effect' style={this.palette.heading}><i class="material-icons" style={this.palette.heading}>grade</i>Grades</a></li>
                <li><a href={`/HeyWasup/timetable/${localStorage.getItem('cookie')}`} className='waves-effect' style={this.palette.heading}><i class="material-icons" style={this.palette.heading}>schedule</i>Timetable</a></li>
                <li><a href={`/HeyWasup/analytics/${localStorage.getItem('cookie')}`} className='waves-effect' style={this.palette.heading}><i class="material-icons" style={this.palette.heading}>show_chart</i>Analytics</a></li>
                <li><div class="divider" style={{ marginBottom: '12px' }}></div></li>
                <li><a href={`/HeyWasup/themes/${localStorage.getItem('cookie')}`} className='waves-effect' style={this.palette.heading}><i class="material-icons" style={this.palette.heading}>format_paint</i>Themes</a></li>
                <div style={{ position: 'absolute', bottom: '60px', width: '100%' }}><li><a href={`/HeyWasup/themes/${localStorage.getItem('cookie')}`} className='waves-effect' style={this.palette.heading}><i class="material-icons" style={this.palette.heading}>exit_to_app</i>Logout</a></li></div>
            </ul>
            </React.Fragment>
        )
    };
}
 
export default Sidenav