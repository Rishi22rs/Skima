import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {cardColorTheme} from '../ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"


const TimetableCard = ({ data }) => {

  const palette = cardColorTheme[localStorage.getItem("theme")];

  return (
    <div className="card" style={Object.assign({}, palette.fontColor, palette.frontCard, palette.safest)}>
        <div className="card-content" style={Object.assign({}, palette.fontColor, {padding: '1px 8px 4px 8px'})}>
            <h5 className="center-align truncate">{data['Course Title']}</h5>  
        </div>
        <div className="card-action" style={Object.assign({}, palette.fontColor, {backgroundColor: 'rgba(0,0,0,0)'} )}>
            <div className='row'>
                <div className='col s4 center' style={palette.fontColor}><span>Time</span><br/><span>{data.time}</span></div>
                <div className='col s4 center' style={palette.fontColor}><span>Slot</span><br/><span>{data.Slot}</span></div>
                {/* <div className='col s4 center' style={palette.fontColor}><span></span><br/><span>{data['Room No.']}</span></div> */}
                <div className='col s4 center' style={palette.fontColor}><span>GCR Code.</span><br/><span>{data['GCR Code']}</span></div>
            </div>
        </div>
    </div>
  );
};

export default TimetableCard;
