import { useState} from "react";
import CryptoJS from 'crypto-js';
import axios from 'axios';

const Login = () => {
   const [error,setError]=useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data before SHA-256", formData);
    const pass = formData.password;
    const hash = CryptoJS.SHA256(pass).toString(CryptoJS.enc.Hex);
    console.log(hash);
  
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        email: formData.email,
        password: hash,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.status);
      if (response.status === 200) {
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
        setError(true);
      console.error('Network error:', error);
    }
  
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4 text-center">
            <span className="font-bold text-xl">Login</span>
          </div>
          <div className="mb-4 flex flex-wrap">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 w-full sm:w-1/4"
            >
              Email:
            </label>
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
            <label
              htmlFor="password"
              className="block  text-gray-700 font-bold mb-2 w-full sm:w-1/4"
            >
             Password:
            </label>
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
          <div className="flex flex-wrap mb-2">
          {error && <span className=" text-red-600">* Invalid Email or Password</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
