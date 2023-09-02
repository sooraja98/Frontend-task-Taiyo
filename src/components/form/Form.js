import React, {useState} from 'react';

const Form: React.FC = (props) => {
    const value = props
    console.log(value)
    const [firstname, setFirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [status, setStatus] = useState('active')
    const handleTheFirstName = (e : React.ChangeEvent < HTMLInputElement >) => {
        setFirstname(e.target.value)
    }
    const handleLastName = (e : React.ChangeEvent < HTMLInputElement >) => {
        setlastname(e.target.value)
    }
    const handleStatus = (e : React.FormEvent < HTMLFormElement >) => {
        setStatus(e.target.value)

    }
    return (
        <div className='flex flex-col items-center md:pl-60 mt-20'>
            <div>
                <h1 className='md:text-6xl text-4xl font-semibold mb-6 text-center'>Create Contact</h1>
            </div>
            <div className='border-2 shadow-lg border-gray-300 rounded-lg p-8 w-full md:w-4/5'>
                <div className='mb-4'>
                    <label className="block text-gray-600 text-sm font-semibold mb-1">First Name</label>
                    <input className="border border-gray-400 rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500" type="text" placeholder="Enter your first name"
                        onChange={handleTheFirstName}
                        value={firstname}/>
                </div>

                <div className='mb-4'>
                    <label className="block text-gray-600 text-sm font-semibold mb-1">Last Name</label>
                    <input className="border border-gray-400 rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500" type="text" placeholder="Enter your last name"
                        onChange={handleLastName}
                        value={lastname}/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-1">Status</label>
                    <div className="flex items-center">
                        <label className="inline-flex items-center mr-4">
                            <input checked={
                                    status === 'active'
                                }
                                onChange={handleStatus}
                                type="radio"
                                className="form-radio text-blue-600"
                                name="status"
                                value="active"/>
                            <span className="ml-2">Active</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input checked={
                                    status === 'inactive'
                                }
                                onChange={handleStatus}
                                type="radio"
                                className="form-radio text-red-600"
                                name="status"
                                value="inactive"/>
                            <span className="ml-2">Inactive</span>
                        </label>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
