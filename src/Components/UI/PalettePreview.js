import React, { useState } from 'react';
import {cardColorTheme} from '../ColorTheme'
import "react-sweet-progress/lib/style.css"

const PalettePreview = (props) => {


const palette = cardColorTheme[localStorage.getItem('theme')]
  return (
        <div className='theme-preview-card-c col-4' onClick={()=>props.hasSelected(props.name)}>
            <div className='theme-preview-card' style={palette.frontCard}>
                <div className='palette-preview-c'>
                    <div className='palette-preview' style={props.palette[0]}>Background</div>
                    <div className='palette-preview' style={props.palette[1]}>Font</div>
                    <div className='palette-preview' style={props.palette[2]}>Safe</div>
                    <div className='palette-preview' style={props.palette[3]}>Warning</div>
                </div>
                <div className="palette-head" style={palette.fontColor}>
                    {props.name}
                </div>
              <div className={'palette-overlay ' + ((props.name == props.selected)?'ol-visible':'ol-hidden')}><img className='icon-done' src='/assests/images/done.svg'/></div>
            </div>
        </div>
    );
}

export default PalettePreview;
