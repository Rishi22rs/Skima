import React, { useState } from 'react';
import {cardColorTheme} from './ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"
import PalettePreview from './UI/PalettePreview.js'
import Nav from './Nav';

const Store = ( match ) => {

  const paletteStrip = {
      Default: [{
          backgroundColor: '#121212',
          color: '#FFFFFF'
      }, {
          backgroundColor: '#FFFFFF',
          color: '#000000'
      }, {
          backgroundColor: '#121212',
          color: '#FFFFFF'
      }, {
          backgroundColor: '#313131',
          color: '#FFFFFF'
      }],
      Dark: [{
          backgroundColor: '#FFFFFF',
          color: '#000000'
      }, {
          backgroundColor: '#212121',
          color: '#FFFFFF'
      }, {
          backgroundColor: '#FFFFFF',
          color: '#000000'
      }, {
          backgroundColor: '#EEEEEE',
          color: '#000000'
      }],
      Light: [{
          backgroundColor: '#121212',
          color: '#FFFFFF'
      }, {
          backgroundColor: '#FFFFFF',
          color: '#000000'
      }, {
          backgroundColor: '#121212',
          color: '#FFFFFF'
      }, {
          backgroundColor: '#313131',
          color: '#FFFFFF'
      }]
  }
  
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const [active, setActive] = useState(localStorage.getItem('theme'));

  const palette = cardColorTheme[theme]
  return (
      <>
        {/* <Nav className='blue' title='Themes'/> */}
        {(match.isFragment)?'':<Nav title='Store'/>}
        <div className="main-container" style={Object.assign({}, palette.background)}>
          <div style={{padding: '0 12px 0 12px'}}>
          <h4 className="store-head" style={palette.heading}>Customize with themes</h4>
          <div className='row'>
              <PalettePreview name='Default' palette={paletteStrip['Default']} selected={active} hasSelected={(selection)=>{setActive(selection); localStorage.setItem('theme', 'Default');setTheme('Default')}}/>
              <PalettePreview name='Dark' palette={paletteStrip['Dark']} selected={active} hasSelected={(selection)=>{setActive(selection); localStorage.setItem('theme', 'Dark');setTheme('Dark')}}/>
              <PalettePreview name='Light' palette={paletteStrip['Light']} selected={active} hasSelected={(selection)=>{setActive(selection); localStorage.setItem('theme', 'Light');setTheme('Light')}}/>
          </div>
          <h4 className="store-head" style={palette.heading}>Preview</h4>
          <div className='row'>
            <div className='col l3 m6 s12'>
              <div className="card" style={Object.assign({}, palette.fontColor, palette.frontCard, palette.safe)}>
                  <div className="card-content" style={Object.assign({}, palette.fontColor, {padding: '1px 8px 4px 8px'})}>
                    <h5 className="center-align truncate">Data Structures</h5>
                    <div className='center-align'><span>18TOT103J</span></div>
                  </div>
                  <div className="card-action" style={Object.assign({}, palette.fontColor, {backgroundColor: 'rgba(0,0,0,0)'} )}>
                    <div className='row'>
                      <div className='col s3 center' style={palette.fontColor}><span>Conducted</span><br/><span>40</span></div>
                      <div className='col s3 center' style={palette.fontColor}><span>Present </span><br/><span>38</span></div>
                      <div className='col s2 center' style={palette.fontColor}><span>Absent</span><br/><span>2</span></div>
                      <div className='col s2 center' style={palette.fontColor}><span className='bold'>Bunk</span><br/><span>4</span></div>
                      <div className='col s2 center' style={palette.fontColor}><span>TP 101</span><br/><span className='hide-on-med-and-up'>-</span></div>
                    </div>
                    <div className='row' style={{marginBottom: '0'}}>
                      <Progress
                        className='col s10'
                        style={{color: 'white'}}
                        percent={85}
                        theme={{
                          success: {
                            symbol:' ',
                            color: '#FCC709'
                          },
                          active: {
                            symbol:' ',
                            color: '#6970DD',
                          },
                          default: {
                            symbol: '😱',
                            color: '#4565D3'
                          }
                        }}
                      />
                      <div className='col s2 percent'>{85}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Store;
