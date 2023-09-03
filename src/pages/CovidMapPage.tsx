import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import CovidMap from '../components/covidmap/CovidMap';

const CovidMapPage: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row'>
    <div>
      <SideBar />
    </div>
    <div className='flex justify-center  '>
      <CovidMap/>
    </div>
  </div>
  );
};

export default CovidMapPage;
