import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import CovidLineGraph from '../components/covidLIneGraph/CovidLineGraph'


const ChartAndMap : React.FC=()=>{
    return(
        <div className='flex flex-col md:flex-row'>
        <div>
          <SideBar />
        </div>
        <div className='flex justify-center  '>
          <CovidLineGraph/>
        </div>
      </div>
    )
}

export default ChartAndMap