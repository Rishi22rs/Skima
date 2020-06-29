import axios from 'axios'

const path='https://srmacademia20.000webhostapp.com/' 

export const getCookie= async (email,password)=>{
    const reponse=await axios({
        method: 'post',
        url: `${path}cookie.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            username:email, 
            password:password
        }
    })
    return reponse.data.Cookie
}

export const getContent= async (cookie)=>{
    const reponse=await axios({
        method: 'post',
        url: `${path}attendance.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            Cookie:cookie
        }
    })
    return reponse.data
}