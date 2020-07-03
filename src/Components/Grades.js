import React, { useEffect, useState } from 'react'
import { getGrades } from '../Api/Api'
import {cardColorTheme} from './ColorTheme'

const Grades=({match})=>{

	const [result,setResult]=useState()
	const grades = []
	
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
			setResult(await getGrades(match.params.id))
		}
		if(localStorage.getItem('result')!=='K'){
			getResultData()
			console.log('i am calling')
		}
		else
			setResult(JSON.parse(localStorage.getItem('result')))
	},[])

	if(localStorage.getItem('result')!==null&&result!==undefined)
		localStorage.setItem('result',JSON.stringify(result))
	
	result&&result.Grades.map((x) => grades.push(x["Grade"]))
	const rating = getRating(grades)
	let medals = []
	for (let i = 0; i < Math.floor(rating); i++){
		medals.push(<img key={i} className="medal" src="/assests/images/medal.svg" />)
		if(i == Math.floor(rating)-1 && rating - Math.floor(rating) >= 0.5)
		medals.push(<img key={i} className="medal" style={{opacity: 0.5}} src="/assests/images/medal.svg"/>)
	}
	return(
		<div className="main-container">
			<h1 className="inline-block">Grades-<span className="rating">{rating}</span></h1>
			<h1 className="inline-block right">{medals}</h1>
			<div>
				{result&&result.Grades.map((x,key)=>
				<div key={key} className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front" style={x['Grade']==='O'?{backgroundImage: `linear-gradient(${cardColorTheme.safest})`}:x['Grade']==='A+'||x['Grade']==='A'?{backgroundImage: `linear-gradient(${cardColorTheme.safe})`}:x['Grade']==='B+'||x['Grade']==='B'?{backgroundImage: `linear-gradient(${cardColorTheme.warning})`}:{backgroundImage: `linear-gradient(${cardColorTheme.danger})`}}>
							<h2 className='main-heading'>{x['Course Title']}</h2>
							<div className="center-container">
								<div className="center">
									<div className='hours'>
										<div className='in-card-hours-detail'><p>Semester </p><p>{x.Sem}</p></div>
										<div className='in-card-hours-detail'><p>Grade </p><p>{x.Grade}</p></div>
										<div className='in-card-hours-detail'><p>Result </p><p>{x.Result}</p></div>
										<div className='in-card-hours-detail'><p>Academic year </p><p>{x['Academic Year'].replace('AY','')}</p></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>)}
			</div>
		</div>
	)
}

export default Grades