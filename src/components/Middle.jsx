import React from "react";
import SearchBar from "./SearchBar";

const Middle = () => {
  return (
    <>
      <div>
        <ul class="flex justify-evenly m-2  ">
          <li>
            <SearchBar />
          </li>
          <li className="text-white ml-8">
            Status
            <select className="ml-4 bg-slate-800 font-thin rounded-xl">
              <option value="active/in">active/in</option>
              <option value="theft/Theft">theft/Theft</option>
              <option value="ended">ended</option>
            </select>
          </li>
          <li className="text-white ml-12">
            Last Event
            <span className="bg-slate-800 ml-6 font-thin pl-2 pr-2 border border-slate-800 rounded-xl">
              theft/heartbeat/etc
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Middle;
