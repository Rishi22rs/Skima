import React, { useEffect, useState } from 'react'
import { getGrades } from '../Api/Api'
import {cardColorTheme} from './ColorTheme'

const Grades=({match})=>{

	const [result,setResult]=useState()

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
	
	return(
		<div className="main-container">
			<h1>Previous sem results</h1>
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