import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2'
import { getRanks } from '../Api/Api'
import { cardColorTheme } from './ColorTheme'
import Nav from './Nav'

const Analytics = () => {

    const [rank,setRank]=useState()
    const [isLoading,setIsLoading]=useState(true)
    const[data,setData]=useState()
    useEffect(()=>{
        const getRank=async()=>{
            setRank(await getRanks("RA1811003010534","A2","Btech","Computer Science and Technology",3.2))
        }
        getRank()
    },[])

    console.log(rank)
    const palette = cardColorTheme[localStorage.getItem('theme')]

    return ( 
        <>
        <Nav title="Analytics report" />
        <div className="main-container" style={Object.assign({}, palette.background, {minHeight: '100vh'})}>
            {rank!==undefined?
            <div style={{padding: '12px 0 0 12px'}}>
            <h4 style={palette.heading}>Section wise</h4>
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
            <h4 style={palette.heading}>Strean report</h4>
            <div style={{paddingLeft: '8px'}}>
                <h6 style={palette.heading}>Average: </h6><p style={palette.heading}>{rank.analysis.stream.average}</p>
                <h6 style={palette.heading}>Count: </h6><p style={palette.heading}>{rank.analysis.stream.count}</p>
                <h6 style={palette.heading}>Max: </h6><p style={palette.heading}>{rank.analysis.stream.max}</p>
                <h6 style={palette.heading}>Your rank: </h6><p style={palette.heading}>{rank.analysis.stream.rank}</p>
            </div>
            </div>:<h1>Loading</h1>
            }
        </div>
        </>
    );
}
 
export default Analytics;