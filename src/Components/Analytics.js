import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2'
import { getRanks } from '../Api/Api'
import { cardColorTheme } from './ColorTheme'
import Nav from './Nav'
import BottomNav from './BottomNav'

const Analytics = () => {

    const [rank,setRank]=useState()
    const [isLoading,setIsLoading]=useState(true)
    const[data,setData]=useState()
    useEffect(()=>{
        const getRank=async()=>{
            setRank(await getRanks(localStorage.getItem('regno'),localStorage.getItem('section'),localStorage.getItem('degree').replace('.','').toLowerCase(),localStorage.getItem('dept'),localStorage.getItem('rate')))
        }
        getRank()
    },[])
    const palette = cardColorTheme[localStorage.getItem('theme')]

    return ( 
        <div style={Object.assign({}, palette.background, { minHeight: '100vh' })}>
        <Nav title="Analytics report"/>
        <div className="main-container" >
            {rank!==undefined?
            <div style={{padding: '12px 18px 8px 18px'}}>
            <h4 className="center-align" style={palette.heading}>Section Graph</h4>
            <Line
                data={{
                    labels:rank.analysis.section.ratings,
                    datasets:[
                        {
                            label:"Rating",
                            data:rank.analysis.section.ratings,
                            backgroundColor:'rgba(23,67,88,0.5)'
                        }
                    ],  
                }}
                options={{ }}
            />
            <div className='row'>
                <div className='col s6 center' style={{borderRight: '1px solid lightblue'}}>
                    <h4 style={palette.heading}>Stream Report</h4>
                    <div style={{paddingLeft: '8px'}}>
                        <h6 style={palette.heading}>Average: </h6><p style={palette.heading}>{rank.analysis.stream.average}</p>
                        <h6 style={palette.heading}>Count: </h6><p style={palette.heading}>{rank.analysis.stream.count}</p>
                        <h6 style={palette.heading}>Max: </h6><p style={palette.heading}>{rank.analysis.stream.max}</p>
                        <h6 style={palette.heading}>Your rank: </h6><p style={palette.heading}>{rank.analysis.stream.rank}</p>
                    </div>
                </div>
                <div className='col s6 center'>
                    <h4 style={palette.heading}>Section Report</h4>
                    <div style={{paddingLeft: '8px'}}>
                        <h6 style={palette.heading}>Average: </h6><p style={palette.heading}>{rank.analysis.section.average}</p>
                        <h6 style={palette.heading}>Count: </h6><p style={palette.heading}>{rank.analysis.section.count}</p>
                        <h6 style={palette.heading}>Max: </h6><p style={palette.heading}>{rank.analysis.section.max}</p>
                        <h6 style={palette.heading}>Your rank: </h6><p style={palette.heading}>{rank.analysis.section.rank}</p>
                    </div>
                </div>
            </div>
            </div>:''
            }
        </div>
        <BottomNav/>
        </div>
    );
}
 
export default Analytics;