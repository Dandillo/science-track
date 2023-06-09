﻿import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
const EventContainer = ({
  title,
  info,
  className,
  revert = false,
  children,
  textClassesExt,
  maxHeight,
}) => {
  const orangeColor = "bg-orangeColor text-white ";
  const whiteColor = "bg-white text-orangeColor ";
  const componentClasses = `shadow-md rounded-tl-[20px] rounded-tr-[20px] rounded-br-[30px] rounded-bl-[30px] text-center text-[2.5rem] bg-opacity-[81%] ${className}`;
  const textClasses = `shadow-md rounded-tl-[50px] rounded-tr-[50px] rounded-br-[30px] rounded-bl-[30px] text-[1.2rem] py-[1.5rem] px-[2rem] ${textClassesExt}`;
  return !revert ? (
    <div className={orangeColor + componentClasses}>
      <p className="py-[1rem]">{title}</p>{" "}
      <div className={whiteColor + textClasses}>
        {" "}
        <SimpleBar
          style={{ maxHeight: maxHeight }}
          forceVisible="y"
          autoHide={true}
        >
          {info ? info : children}{" "}
        </SimpleBar>
      </div>{" "}
    </div>
  ) : (
    <div className={whiteColor + componentClasses}>
      <p className="py-[1rem]">{title}</p>

      <div className={orangeColor + textClasses}>{info ? info : children}</div>
    </div>
  );
};

export default EventContainer;
