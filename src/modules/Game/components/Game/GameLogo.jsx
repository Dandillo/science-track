import React from "react";
import logo from "../../../../assets/images/Logo.png";

const GameLogo = ({ admin }) => {
  return (
    <div className="flex items-center gap-x-4 game-logo">
      <img src={logo} alt="Logo icon" className="block" />
      <div>
        <p className="uppercase text-[1.25rem] text-[#945457]">
          science-track{" "}
        </p>
        {admin && (
          <p className="uppercase text-[1.25rem] text-[#945457]">admin</p>
        )}
      </div>
    </div>
  );
};
export default GameLogo;
