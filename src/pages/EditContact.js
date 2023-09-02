import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import Form from '../components/form/Form';

const EditContact: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div>
        <SideBar />
      </div>
      <div className='flex justify-center '>
        <Form type={"edit"} />
      </div>
    </div>
  );
};

export default EditContact;
