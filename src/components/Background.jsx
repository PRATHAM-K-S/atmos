import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative w-screen overflow-x-clip">
      <div className="absolute w-[200px] h-[200px] bg-atmos-blue-200 rounded-full top-[291px] -left-[204px] blur-[204px]"></div>
      <div className="absolute w-[200px] h-[200px] bg-atmos-blue-200 rounded-full top-[675px] left-[356px] blur-[204px]"></div>
      {children}
    </div>
  );
};

export default Background;
