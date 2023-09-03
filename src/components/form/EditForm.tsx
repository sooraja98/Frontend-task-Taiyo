import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import { Contact } from '../../store/Slice/ContactSlice'

interface EditFormProps {}

const EditForm: React.FC<EditFormProps> = () => {
  const { id } = useParams<{ id: string }>(); // Get the id from the URL parameter
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Correctly access the contacts array from the Redux store
  const contacts = useSelector((state: any) => state.contacts.contacts);
  const contact = contacts.find((data: Contact) => data.id === Number(id));
  
  const [firstname, setFirstname] = useState(contact.firstName||"");
  const [lastname, setLastname] = useState(contact.lastName||"");
  const [status, setStatus] = useState(contact.status||"");

  // Ensure that contacts is an array
  if (!Array.isArray(contacts)) {
    console.error("Contacts is not an array:", contacts);
    return null; // You can handle this error gracefully
  }



  // Initialize state variables with default values inside a useEffect

  // Initialize state variables with default values

  const handleTheFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedContact = {
      id: Number(id),
      firstName: firstname,
      lastName: lastname,
      status: status,
    };

    dispatch(editContact(updatedContact));

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center md:pl-96 md:mt-28 mt-20">
      <div></div>
      <div className="border-2 shadow-lg border-gray-300 rounded-lg p-8 w-full md:w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="md:text-6xl text-4xl font-semibold mb-6 text-center">
              Edit Contact
            </h1>

            <label className="block text-gray-600 text-sm font-semibold mb-1">
              First Name
            </label>
            <input
              className="border border-gray-400 rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your first name"
              onChange={handleTheFirstName}
              value={firstname}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Last Name
            </label>
            <input
              className="border border-gray-400 rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your last name"
              onChange={handleLastName}
              value={lastname}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Status
            </label>
            <div className="flex items-center">
              <label className="inline-flex items-center mr-4">
                <input
                  checked={status === "active"}
                  onChange={handleStatus}
                  type="radio"
                  className="form-radio text-blue-600"
                  name="status"
                  value="active"
                />
                <span className="ml-2">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  checked={status === "inactive"}
                  onChange={handleStatus}
                  type="radio"
                  className="form-radio text-red-600"
                  name="status"
                  value="inactive"
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
