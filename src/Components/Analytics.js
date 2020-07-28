import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2'
import { getRanks } from '../Api/Api'
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

    return ( 
        <>
        <Nav title="Analytics report" />
        <div className="main-container">
            {rank!==undefined?
            <>
            <h4>Section wise</h4>
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
            <h4>Strean report</h4>
            <h6>Average: </h6><p>{rank.analysis.stream.average}</p>
            <h6>Count: </h6><p>{rank.analysis.stream.count}</p>
            <h6>Max: </h6><p>{rank.analysis.stream.max}</p>
            <h6>Your rank: </h6><p>{rank.analysis.stream.rank}</p>
            </>:<h1>Loading</h1>
            }
        </div>
        </>
    );
}
 
export default Analytics;