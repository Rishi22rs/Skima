import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {cardColorTheme} from '../ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"


const TimetableCard = ({ data }) => {

  const palette = cardColorTheme[localStorage.getItem("theme")];

  return (
    <div className="col s12 m6 l3">
	<div className="card" style={Object.assign({}, palette.fontColor, palette.frontCard, data['Grade']==='O'?palette.safest:data['Grade']==='A+'||data['Grade']==='A'?palette.safe:data['Grade']==='B+'||data['Grade']==='B'?palette.warning:palette.danger)}>
		<div className="card-content" style={Object.assign({}, palette.fontColor, {padding: '1px 8px 4px 8px'})}>
		<h5 className="center-align truncate">{data['Course Title']}</h5>
		</div>
		<div className="card-action" style={Object.assign({}, palette.fontColor, {backgroundColor: 'rgba(0,0,0,0)'} )}>
		<div className='row'>
			<div className='col s3 center' style={palette.fontColor}><span>Semester </span><br/><span>{data.Sem}</span></div>
			<div className='col s3 center' style={palette.fontColor}><span>Grade </span><br/><span>{data.Grade}</span></div>
			<div className='col s3 center' style={palette.fontColor}><span>Result </span><br/><span>{data.Result}</span></div>
			<div className='col s3 center' style={palette.fontColor}><span>Year </span><br/><span>{data['Academic Year'].replace('AY','')}</span></div>
		</div>
		</div>
	</div>
	</div>
  );
};

export default TimetableCard;
