import React from "react";
import { NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="text-white rounded-2xl mt-1 flex justify-center">
        <ul className="flex gap-x-35 pt-2 pb-2  text-xl ">
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
        </ul>
      </div>
    </>
  );
};

export default Navbar;
