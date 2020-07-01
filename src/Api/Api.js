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
    console.log(response)
    return response.data
}