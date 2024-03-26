import React from "react";

const Card = (props) => {
  return (
    <div className="m-4 ">
      <p className=" text-white">
      {console.log(props)}
        <span>Device Id : {props.details.Device_id}</span><br></br>
        <span>Vehical Id : {props.details.Vehical_id}</span><br></br>
        <span>Serial Number : {props.details.SN}</span><br></br>
        <span>IMEI : {props.details.IMEI}</span><br></br>
      </p>
    </div>
  );
};

export default Card;
