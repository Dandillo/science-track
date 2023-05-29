import React from "react";
import GameBG from "../../../../assets/images/BG/Game.jpg";

const GameBackground = ({ className, children, ...props }) => {
  const componentClasses = `bg-cover bg-no-repeat flex justify-center items-center h-full w-full ${className}`;
  return (
    <div
      className={componentClasses}
      style={{
        backgroundImage: `url('${GameBG}')`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default GameBackground;
