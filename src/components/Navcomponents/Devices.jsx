import React from "react";

function Devices() {
  return (
    <>
    <div  className="flex justify-center items-center h-screen"
    style={{ backgroundColor: "#d4d4d4", minHeight: "100vh" }}>  
      
        <form action="" className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4 flex flex-wrap">
            <label htmlFor="name" className="m-1">
              Device Model:
            </label>
            <input
              type="text"
              autoComplete="off"
              name="device_model"
              id="device_model"
              placeholder="device_model"
              className="appearance-none border rounded-lg w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex flex-wrap">
            <label htmlFor="name" className="m-1">
              Serial Number:
            </label>
            <input
              type="numbers"
              autoComplete="off"
              name="serial_number"
              id="serial_number"
              placeholder="serial_number"
              className=" appearance-none border rounded-lg w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4 flex flex-wrap">
            <label htmlFor="name" className="m-1">
              ICCID Number:
            </label>
            <input
              type="numbers"
              autoComplete="off"
              name="iccid_number"
              id="iccid_number"
              placeholder="ICCID Number"
              className="appearance-none border rounded-lg w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex flex-wrap">
            <label htmlFor="name" className="m-1">
              IMEI Number:
            </label>
            <input
              type="numbers"
              autoComplete="off"
              name="imei_number"
              id="imei_number"
              placeholder="  IMEI Number"
              className=" appearance-none border rounded-lg w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
      </div>
  
    </>
  );
}

export default Devices;
