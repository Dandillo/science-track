import React from "react";
import ResultBG from "../../../../assets/images/BG/Result.jpg";

const ResultBackground = ({ className, children, ...props }) => {
  const componentClasses = `bg-cover bg-no-repeat  h-full w-full ${className}`;
  return (
    <div
      className={componentClasses}
      style={{
        backgroundImage: `url('${ResultBG}')`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      />

      {children}
    </div>
  );
};

export default ResultBackground;
