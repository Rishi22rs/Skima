import React, { useEffect, useState } from 'react'
import { getGrades } from '../Api/Api'
import {cardColorTheme} from './ColorTheme'
import Nav from './Nav'

const Grades=()=>{

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
			console.log('i am calling')
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
	return(
		<>
			<Nav title={`Grades-${isNaN(rating)?'':rating}`} medals={medals}/>
			<div className='main-container' style={palette.background}>
				<div className="row" style={{marginBottom: '0'}}>
					{result&&result.Grades.map((x,key)=>
						<div key={key} className="col s12 m6 l3">
						<div className="card" style={Object.assign({}, palette.fontColor, x['Grade']==='O'?palette.safest:x['Grade']==='A+'||x['Grade']==='A'?palette.safe:x['Grade']==='B+'||x['Grade']==='B'?palette.warning:palette.danger)}>
							<div className="card-content" style={Object.assign({}, palette.fontColor, {padding: '1px 8px 4px 8px'})}>
							<h5 className="center-align truncate">{x['Course Title']}</h5>
							</div>
							<div className="card-action" style={Object.assign({}, palette.fontColor, {backgroundColor: 'rgba(0,0,0,0)'} )}>
							<div className='row'>
								<div className='col s3 center' style={palette.fontColor}><span>Semester </span><br/><span>{x.Sem}</span></div>
								<div className='col s3 center' style={palette.fontColor}><span>Grade </span><br/><span>{x.Grade}</span></div>
								<div className='col s3 center' style={palette.fontColor}><span>Result </span><br/><span>{x.Result}</span></div>
								<div className='col s3 center' style={palette.fontColor}><span>Year </span><br/><span>{x['Academic Year'].replace('AY','')}</span></div>
							</div>
							</div>
						</div>
						</div>
					)}
					</div>
				</div>
		</>
	)
}

export default Grades