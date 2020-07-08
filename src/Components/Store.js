import React, { useState } from 'react';
import {cardColorTheme} from './ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"
import PalettePreview from './UI/PalettePreview.js'
import Nav from './Nav';

const Store = () => {

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
      }],
      DarkColorful: [{
        backgroundColor: '#150C29',
        color: '#FFFFFF'
      }, {
          backgroundColor: 'white',
          color: 'black'
      }, {
          backgroundColor: '#121212',
          color: '#FFFFFF'
      }, {
          backgroundColor: '#313131',
          color: '#FFFFFF'
      }],
      
  }
  
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const [active, setActive] = useState(localStorage.getItem('theme'));

  const palette = cardColorTheme[theme]
  return (
    <div className="main-container" style={palette.background}>
        <Nav title='Themes'/>
        <div className='cards'>
        <h2 className="store-head" style={palette.heading}>Customize with themes</h2>
        <div className='row'>
            <PalettePreview name='Default' palette={paletteStrip['Default']} selected={active} hasSelected={(selection)=>{setActive(selection); localStorage.setItem('theme', 'Default');setTheme('Default')}}/>
            <PalettePreview name='Dark' palette={paletteStrip['Dark']} selected={active} hasSelected={(selection)=>{setActive(selection); localStorage.setItem('theme', 'Dark');setTheme('Dark')}}/>
            <PalettePreview name='Light' palette={paletteStrip['Light']} selected={active} hasSelected={(selection)=>{setActive(selection); localStorage.setItem('theme', 'Light');setTheme('Light')}}/>
            <PalettePreview name='DarkColorful' palette={paletteStrip['DarkColorful']} selected={active} hasSelected={(selection)=>{setActive(selection); localStorage.setItem('theme', 'DarkColorful');setTheme('DarkColorful')}}/>
        </div>
        <h2 className="store-head" style={palette.fontColor}>Preview</h2>
        <div className="flip-card" style={palette.frontCard}>
        <div className="flip-card-inner" style={palette.flipCardInner}>
          <div className="flip-card-front" style={Object.assign({}, palette.fontColor, palette.safe)}>
          <h3 className='main-heading'>Probability and Queuing Theory</h3>
            <h5 className='main-heading'>18JCS502</h5>
              <div className="center-container">
                <div className="center">
                  <div className='hours'>
                  <div className='in-card-hours-detail'><p>Conducted</p><p>30</p></div>
                  <div className='in-card-hours-detail'><p>Present </p><p>28</p></div>
                  <div className='in-card-hours-detail'><p>Absent</p><p>2</p></div>
                  <div className='in-card-hours-detail'><p className='bold'>Bunk</p><p>4</p></div>
                  <div className="in-card-hours-detail"><p>101TP</p></div>  
                </div>
              </div>
            </div>
            <div className='progress-bar'>
            <Progress
              percent={'85'}
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
            <p className='percent'>85%</p>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>Faculty Name: Muthuswamy</h1> 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Store;
