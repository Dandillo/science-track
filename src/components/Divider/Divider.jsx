import React from "react";

function Divider({ className, width }) {
  return (
    <div className={`h-2  bg-orangeColor w-[${width}] ${className}`}></div>
  );
}

export default Divider;
