import React, { useState } from 'react';

function Mycustomer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4 flex flex-wrap">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2 w-full sm:w-1/4">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="appearance-none border rounded-lg w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your first name"
          />
        </div>
        <div className="mb-4 flex flex-wrap">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2 w-full sm:w-1/4">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="appearance-none border rounded-lg w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your last name"
          />
        </div>
        <div className="mb-4 flex flex-wrap">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2 w-full sm:w-1/4">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="appearance-none border rounded-lg w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4 flex flex-wrap">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2 w-full sm:w-1/4">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="appearance-none border rounded-lg w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Mycustomer