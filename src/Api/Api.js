import axios from 'axios'

const path='https://srmacademia20.000webhostapp.com/' 

export const getContent= async (email,password)=>{
    const reponse=await axios({
        method: 'post',
        url: `${path}api2.php`,
        headers: {'Content-Type' : 'text/plain'}, 
        data: {
            username:email, 
            password:password
        }
    })
    return reponse.data
}