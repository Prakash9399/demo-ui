import React from "react";
import TextArea from "./TextArea";

const Report = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="bg-slate-600 w-40 h-40 rounded-xl">
          <TextArea head="Device Report" text="dummy Report" />
        </div>
        <div className="bg-slate-600 w-40 rounded-xl">
          <TextArea head="Theft Report" text="dummy Report" />
        </div>
        <div className="bg-slate-600 w-40 rounded-xl">
          <TextArea head="Other Report" text="dummy Report" />
        </div>
      </div>
      <span className="flex justify-center text-xl text-white">Device Report</span>
    </>
  );
};

export default Report;
