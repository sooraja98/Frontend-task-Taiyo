import React from "react";
import SideBar from "../components/sidebar/SideBar";
import EditForm from "../components/form/EditForm";

const EditContact: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <SideBar />
      </div>
      <div className="flex justify-center ">
        <EditForm />
      </div>
    </div>
  );
};

export default EditContact;
