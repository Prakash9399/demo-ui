import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="text-white rounded-2xl mt-1 flex justify-center">
        <ul className="flex gap-x-35 pt-2 pb-2  text-xl ">
          <li>
            <a href="#" className="text-white hover:text-gray-300 m-4">
              InTheft
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 m-4">
              Devices
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 m-4">
              Vehicles
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 m-4 ">
              My Customers
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 m-4">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
