import React from "react";
import TextArea from "./TextArea";


const Report = () => {
  return (
    <>
      <div className=" flex justify-evenly  ">
        <div className=" m-1 bg-slate-800 rounded-xl">
        <TextArea head="head" text="dummy Report "/>
        </div>
        <div className="  m-1 bg-slate-800 rounded-xl">
        <TextArea head="head" text="dummy Report  "/>
        </div>
        <div className="  m-1 bg-slate-800 rounded-xl">
        <TextArea head="head" text="dummy Report "/>
        </div>
        
      </div>
      <span className=" flex justify-center text-xl text-white"> Device Report </span>
    </>
  );
};
export default Report;
