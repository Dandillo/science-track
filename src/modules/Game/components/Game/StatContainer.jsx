import React, { useState } from "react";
import './GameAdaptive.scss';

const StatContainer = ({ children, info, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("touch");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gray-400 rounded-3xl flex p-2 justify-center items-center gap-1
      bg-opacity-80 transition-all duration-300 stat"
    >
      {children}
      {isHovered && (
        <div
          style={{ background: "rgba(255, 170, 39, 0.95)" }}
          className="stat-hint absolute top-[130%] left-1/2 transform
          -translate-x-1/2 w-48  rounded-[20px] p-4 text-white text-center
          z-10 opacity-100 scale-100 transition-all duration-300 stat__info"
        >
          <div
            id="triangle-up"
            className="absolute bottom-full left-1/2 transform -translate-x-1/2
            w-48 text-white text-center z-100 opacity-100 scale-100 transition-all duration-300"
          ></div>
          <p className="text-white text-sm font-bold">
            {title} 
          </p>
          <p className="text-white text-sm">
            {info} 
          </p>
        </div>
      )}
    </div>
  );
};

export default StatContainer;
