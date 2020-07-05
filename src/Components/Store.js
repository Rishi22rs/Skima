import React, { useState, useEffect } from 'react'
import {getContent,getKeys} from '../Api/Api'
import { Link } from 'react-router-dom'
import {cardColorTheme} from './ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"

const Store = ({match}) => {

  const [content,setContent]=useState()
  const [styles,setStyles]=useState({transform:0})

  //test feature
  const [theme,setTheme]=useState(localStorage.getItem['theme'])

  const palette = cardColorTheme[localStorage.getItem('theme')]
  return (
    <div className="main-container" style={palette.background}>
        <h1 className='center-container' style={palette.fontColor}>Store</h1>
        <h2 className="store-head" style={palette.fontColor}>Customize with themes</h2>
        <div className='theme-preview-card-c'>
            <div className='theme-preview-card' style={palette.frontCard}>
                <div className='palette-preview-c'>
                    <div className='palette-preview' style={{backgroundColor: '#FFFFFF', color: '#000000'}}>Background</div>
                    <div className='palette-preview' style={{backgroundColor: '#FFFFFF', color: '#000000'}}>Font</div>
                    <div className='palette-preview' style={{backgroundColor: '#2DCCFB', color: '#FFFFFF'}}>Safe</div>
                    <div className='palette-preview' style={{backgroundColor: '#FF5A15', color: '#FFFFFF'}}>Warning</div>
                </div>
                <div className="palette-head" style={palette.fontColor}>
                    Default
                </div>
            </div>
        </div>
        <div className='theme-preview-card-c'>
            <div className='theme-preview-card' style={palette.frontCard}>
                    <div className='palette-preview' style={{backgroundColor: '#121212', color: '#FFFFFF'}}>Background</div>
                    <div className='palette-preview' style={{backgroundColor: '#FFFFFF', color: '#000000'}}>Font</div>
                    <div className='palette-preview' style={{backgroundColor: '#121212', color: '#FFFFFF'}}>Safe</div>
                    <div className='palette-preview' style={{backgroundColor: '#313131', color: '#FFFFFF'}}>Warning</div>
                <div className="palette-head" style={palette.fontColor}>
                    Dark
                </div>
            </div>
        </div>
        <div className='theme-preview-card-c'>
            <div className='theme-preview-card' style={palette.frontCard}>
                <div className='palette-preview' style={{backgroundColor: '#FFFFFF', color: '#000000'}}>Background</div>
                    <div className='palette-preview' style={{backgroundColor: '#212121', color: '#FFFFFF'}}>Font</div>
                    <div className='palette-preview' style={{backgroundColor: '#FFFFFF', color: '#000000'}}>Safe</div>
                    <div className='palette-preview' style={{backgroundColor: '#EEEEEE', color: '#000000'}}>Warning</div>
                <div className="palette-head" style={palette.fontColor}>
                    Light
                </div>
            </div>
        </div>
    </div>
  );
}

export default Store;
