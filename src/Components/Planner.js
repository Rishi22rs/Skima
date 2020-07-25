import React, { useState } from 'react'
import Calendar from 'react-calendar';
import { getPlanner } from '../Api/Api'
import { cardColorTheme } from './ColorTheme'
import 'react-calendar/dist/Calendar.css';
import Nav from './Nav'

const Planner = ( match )=> {
    const [date, setDate] = useState(new Date())
    const mark = [
        '3-08-2020',
        '23-07-2020'
    ]

    const palette = cardColorTheme[localStorage.getItem('theme')]
    return (
        <>
            {(match.isFragment)?'':<Nav title='Planner'/>}
            <div className='main-container' style={Object.assign({}, palette.background, palette.heading)}>
            <Calendar
            value={date}
            className='r-calendar white-text'
            tileClassName={({ date, view }) => {
                if (mark.find(x => x === (date.getDate() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear()))) {
                    return 'mark'
                }
            }}
        />
        </div>
        </>
    )
}
export default Planner;