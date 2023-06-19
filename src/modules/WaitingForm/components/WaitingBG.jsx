import React from "react";
import bg from "../../../assets/images/BG/Waiting.png";

function WaitingBG({ children, bg, className }) {
  return (
    <div
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`h-full w-full z-0 ${className}`}
    >
      {children}
    </div>
  );
}

export default WaitingBG;
