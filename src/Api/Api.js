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
    localStorage.setItem('regno',response.data[0]['Academic Status'][0]['Registration Number'])
    localStorage.setItem('degree',response.data[0]['Academic Status'][2]['Program'])
    localStorage.setItem('dept',response.data[0]['Academic Status'][3]['Department'])
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
        localStorage.setItem('academicPlannerKey',res.data.Keys.AcademicPlannerKey)
        getTimetable(localStorage.getItem('cookie'),res.data.Keys.AcademicPlannerKey)
    })
}

export const getTimetable= async (cookie,timetabableKey)=>{
    const response=await axios({
        method: 'post',
        url: `${path}timetable.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            Cookie:cookie,
            TimeTableKey:"My_Time_Table_2020_21_Odd"
        }
    })
    console.log(response.data)
    return response.data
    /localStorage.setItem('attendance',JSON.stringify(response.data))
    // localStorage.setItem('batch',response.data[0].Student_Details[2]['Batch:'])
}

export const getSchedule= async (cookie,scheduleKey)=>{
    const response=await axios({
        method: 'post',
        url: `${path}schedule.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            Cookie:cookie,
            ScheduleKey:`Virtual_Class_Time_Table`
        }
    })
    return response.data
}

export const getPlanner = async (cookie) => {
    const academicPlannerKey = localStorage.getItem('academicPlannerKey')
    const response=await axios({
        method: 'post',
        url: `${path}schedule.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            Cookie:cookie,
            ScheduleKey:`${academicPlannerKey}`
        }
    })
    return response.data
}

export const getRanks = async (regno,section,degree,stream,rating) => {
    const academicPlannerKey = localStorage.getItem('academicPlannerKey')
    const response=await axios({
        method: 'post',
        url: `${path}rank.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            regno,
            section,
            degree,
            stream,
            rating
        }
    })
    return response.data
}