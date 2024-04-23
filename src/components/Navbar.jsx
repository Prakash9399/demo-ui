import React from "react";
import { NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="text-white p-1 flex justify-center">
        <ul className="flex gap-x-35 pt-2 pb-2  text-2xl  ">
        <li>
            <NavLink to="/home" 
             className={({isActive}) =>
             ` hover:text-gray-300 m-4 ${isActive ? " text-white" : "text-gray-500"}`
         } >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/intheft"    className={({isActive}) =>
             ` hover:text-gray-300 m-4 ${isActive ? " text-white" : "text-gray-500"}`
         }>
              InTheft
            </NavLink>
          </li>
          <li>
            <NavLink to="/devices"    className={({isActive}) =>
             ` hover:text-gray-300 m-4 ${isActive ? " text-white" : "text-gray-500"}`
         }>
              Devices
            </NavLink>
          </li>
          <li>
            <NavLink to="/vehicle"    className={({isActive}) =>
             ` hover:text-gray-300 m-4 ${isActive ? " text-white" : "text-gray-500"}`
         }>
              Vehicles
            </NavLink>
          </li>
          <li>
            <NavLink to="/mycustomer"    className={({isActive}) =>
             ` hover:text-gray-300 m-4 ${isActive ? " text-white" : "text-gray-500"}`
         }>
              My Customers
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile"    className={({isActive}) =>
             ` hover:text-gray-300 m-4 ${isActive ? " text-white" : "text-gray-500"}`
         }>
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/login"    className={({isActive}) =>
             ` hover:text-gray-300 m-4 ${isActive ? " text-white" : "text-gray-500"}`
         }>
              {/* <img src="src\data\account.svg" alt=""  className=" text-white"/> */}
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
