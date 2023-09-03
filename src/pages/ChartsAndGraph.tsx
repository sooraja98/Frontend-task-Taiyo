import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import CovidLineGraph from '../components/covidLIneGraph/CovidLineGraph'
import GraphData from '../components/graphData/GraphData'

const ChartAndMap : React.FC=()=>{
    return(
        <div className='flex flex-col md:flex-row'>
        <div>
          <SideBar />
        </div>
        <div className='flex flex-col md:pl-28'>
        <div className='flex justify-center  '>
          <CovidLineGraph/>
        </div>
        <div className='flex justify-center md:mt-20 '>
          <GraphData/>
        </div>
        </div>
        
      </div>
    )
}

export default ChartAndMap