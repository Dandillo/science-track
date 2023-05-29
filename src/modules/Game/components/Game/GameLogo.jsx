import React from "react";
import logo from "../../../../assets/images/Logo.png";

const GameLogo = () => {
  return (
    <div className="flex items-center gap-x-4">
      <img src={logo} alt="" className="block" />
      <p className="uppercase text-[1.25rem] text-[#FFC4C7]">science-track</p>
    </div>
  );
};
export default GameLogo;
