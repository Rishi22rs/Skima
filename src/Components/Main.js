import React, { useState, useEffect } from 'react'
import {getContent} from '../Api/Api'

const Main = () => {

	const [content,setContent]=useState()

  useEffect(()=>{
		const getContentData = async()=>{
			setContent(await getContent('Rishiraj_ra@srmuniv.edu.in','helloacademia'))
		}
		getContentData()
  },[])  

	console.log(content)

  return (
    <div className="App">
      Main
    </div>
  );
}

export default Main;
