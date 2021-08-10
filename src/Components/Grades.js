import React, { useEffect, useState } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { getGrades } from '../Api/Api'
import {cardColorTheme} from './ColorTheme'
import Nav from './Nav'
import BottomNav from './BottomNav'
import GradeCard from './UI/GradeCard'
import LoaderIcon from './UI/LoaderIcon'

const Grades=( match )=>{
	if(localStorage.getItem('theme') === null)localStorage.setItem('theme', 'Default')
	const [result,setResult]=useState()
	const grades = []
	const cookie = localStorage.getItem('cookie')
	
	const getRating=(grades)=> {
		let gradeArr = ["F", "C", "C+", "B", "B+", "A", "A+", "O"];
		let maxScore = 7 * grades.length
		const scoreArr = grades.map(grade => gradeArr.indexOf(grade));
		var sum = scoreArr.reduce(function (a, b) {
			return a + b;
		}, 0);
		return (sum / maxScore * 5).toFixed(1)
	}

	useEffect(()=>{
		const getResultData = async()=>{
			setResult(await getGrades(cookie))
		}
		if(localStorage.getItem('result')!=='K'){
			getResultData()
		}
		else
			setResult(JSON.parse(localStorage.getItem('result')))
	},[])

	if(localStorage.getItem('result')!==null&&result!==undefined)
		localStorage.setItem('result',JSON.stringify(result))
	
	result&&result.Grades.map((x) => grades.push(x["Grade"]))
	const rating = getRating(grades)
	const palette = cardColorTheme[localStorage.getItem('theme')]
	let medals = []
	for (let i = 0; i < Math.floor(rating); i++){
		medals.push(<img key={i} className="medal" src="/assests/images/medal.svg" />)
		if(i == Math.floor(rating)-1 && rating - Math.floor(rating) >= 0.5)
		medals.push(<img key={i} className="medal" style={{opacity: 0.5}} src="/assests/images/medal.svg"/>)
	}

	localStorage.setItem('rate',rating)
	return(
		
		<>
			{(match.isFragment)?'':<Nav title={`Grades-${isNaN(rating)?'':rating}`} medals={medals}/>}
			<div className='main-container' style={Object.assign({}, palette.background, {minHeight: '100vh'})}>
				<div className="row" style={{margin: 0}}>
					{result?result.Grades.map((x,key)=>
						<GradeCard data={x} key={key} />
					):<LoaderIcon />}
					</div>
				<BottomNav />
				</div>
		</>
	)
}

export default Grades
