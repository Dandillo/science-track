import React from "react";

const EventContainer = ({ title, info, className, revert = false }) => {
  const orangeColor = "bg-orangeColor text-white ";
  const whiteColor = "bg-white text-orangeColor ";
  const componentClasses = `shadow-md rounded-tl-[20px] rounded-tr-[20px] rounded-br-[30px] rounded-bl-[30px] text-center text-[2.5rem] bg-opacity-[81%] ${className}`;
  const textClasses =
    "shadow-md rounded-tl-[50px] rounded-tr-[50px] rounded-br-[30px] rounded-bl-[30px] text-[1.25rem] py-[1.5rem] px-[2rem]";
  return !revert ? (
    <div className={orangeColor + componentClasses}>
      <p className="py-[1rem]">{title}</p>
      <p className={whiteColor + textClasses}>{info}</p>
    </div>
  ) : (
    <div className={whiteColor + componentClasses}>
      <p className="py-[1rem]">{title}</p>
      <p className={orangeColor + textClasses}>{info}</p>
    </div>
  );
};

export default EventContainer;
