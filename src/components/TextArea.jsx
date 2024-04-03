import React, { useState } from "react";

const TextArea = ({ head, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-full w-full rounded-xl flex flex-col justify-center items-center ${
        isHovered ? 'bg-blue-500' : 'bg-slate-600'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white">{head}</span>
      {isHovered && <span className="text-white">{text}</span>}
    </div>
  );
};

export default TextArea;
