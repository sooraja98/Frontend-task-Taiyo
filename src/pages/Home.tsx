import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import UserView from '../components/userview/UserView';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row'>
    <div>
      <SideBar />
    </div>
    <div className='flex justify-center '>
     <UserView/>
    </div>
  </div>
  );
};

export default Home;
