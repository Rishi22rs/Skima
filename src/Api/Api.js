import axios from 'axios'

const path='https://srmacademia20.000webhostapp.com/' 

export const getCookie= async (email,password)=>{
    const response=await axios({
        method: 'post',
        url: `${path}cookie.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            username:email, 
            password:password
        }
    })
    return response.data.Cookie
}

export const getContent= async (cookie)=>{
    const response=await axios({
        method: 'post',
        url: `${path}attendance.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            Cookie:cookie
        }
    })
    return response.data
}

export const getGrades= async (cookie)=>{
    const response=await axios({
        method: 'post',
        url: `${path}grades.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            Cookie:cookie
        }
    })
    return response.data
}

export const getKeys= async (cookie)=>{
    const response=await axios({
        method: 'post',
        url: `${path}keys.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            Cookie:cookie
        }
    }).then(res=>{
        localStorage.setItem('day',res.data.Keys.DayOrder)
        localStorage.setItem('key',res.data.Keys.TimeTableKey)
        getTimetable(localStorage.getItem('cookie'),res.data.Keys.TimeTableKey)
    })
}

export const getTimetable= async (cookie,timetabableKey)=>{
    const response=await axios({
        method: 'post',
        url: `${path}timetable.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            Cookie:cookie,
            TimeTableKey:timetabableKey
        }
    })
    localStorage.setItem('attendance',JSON.stringify(response.data))
    localStorage.setItem('batch',response.data[0].Student_Details[2]['Batch:'])
}

export const getSchedule= async (cookie,scheduleKey)=>{
    const response=await axios({
        method: 'post',
        url: `${path}schedule.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            Cookie:cookie,
            ScheduleKey:`Common_Time_Table_Batch_${scheduleKey}`
        }
    })
    return response.data
}