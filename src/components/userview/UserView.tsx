import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../store"; // Import the deleteContact action

interface UserViewProps {}

const UserView: React.FC<UserViewProps> = () => {
  const dispatch = useDispatch(); // Get the dispatch function
  const contacts = useSelector((state: any) => state.contacts.contacts);

  // Define a function to handle contact deletion
  const handleDeleteContact = (contactId: number) => {
    // Dispatch the deleteContact action with the contactId
    dispatch(deleteContact(contactId));
  };

  return (
    <div className="container flex flex-col">
      <div className="md:pl-5 md:mt-2 pl-5 mt-2">
        <Link to="/create-contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
            Create Contact
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap md:flex-row flex-col mt-8 md:p-10 p-20">
        {contacts.length === 0 ? (
          <p>No contacts to display.</p>
        ) : (
          contacts.map((contact: any) => (
            <div
              key={contact.id}
              className="w-full bg-slate-700 md:w-64 rounded-lg overflow-hidden shadow-lg m-2"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-4">
                <h2 className="text-2xl font-semibold">
                  {contact.firstName}
                </h2>
              </div>
              <div className="p-4">
                <p className="text-white text-sm">
                  First Name: {contact.firstName}
                </p>
                <p className="text-white text-sm">
                  Last Name: {contact.lastName}
                </p>
                <p className="text-white text-sm">Status: {contact.status}</p>
              </div>
              <div className="p-4 flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
                  <Link to={`/edit-contact/${contact.id}`}>Edit</Link>
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserView;
