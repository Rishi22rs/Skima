import React, { useState, useEffect } from 'react'
import { Bar,Line,Pie } from 'react-chartjs-2'
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

    console.log()

    return ( 
        <div>
            <Nav title="Analytics report" />
            {rank!==undefined?
            <>

            <h2>Section</h2>
            <Line
                data={{
                    labels:rank.analysis.section.ratings,
                    datasets:[
                        {
                            label:"Rating",
                            data:rank.analysis.section.ratings
                        }
                    ],
                    backgroundColor:'red'
                }}
                options={{ }}
            />
            </>:<h1>Loading</h1>
            }
        </div>
    );
}
 
export default Analytics;