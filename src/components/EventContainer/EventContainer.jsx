import React, { useRef, useEffect } from "react";
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
  const simpleBarRef = useRef();

  const scrollToTop = () => {
    // simpleBarRef.current.contentEl.clientTop = 0;
    console.log(simpleBarRef.current);
  };
  const orangeColor = "bg-orangeColor text-white ";
  const whiteColor = "bg-white text-orangeColor ";
  useEffect(() => {
    if (simpleBarRef.current) {
      // const myElem = document.getElementsByClassName('simplebar-scrollable-y')
      const contentWrapper = simpleBarRef.current.el.querySelector('.simplebar-content-wrapper');
      contentWrapper.scrollTop = contentWrapper.scrollHeight;
    }
  }, []);

  const componentClasses = `shadow-md rounded-t-[20px] 
  rounded-b-[30px] text-center text-[2.5rem] bg-opacity-[81%] ${className} text-header`;

  const textClasses = `shadow-md rounded-t-[50px]
  rounded-b-[30px] text-[1.2rem] py-[1.5rem] px-[2rem] ${textClassesExt} text-container`;

  return !revert ? (
    <div className={`${orangeColor + componentClasses}`}>
      <p className="py-[1rem] text-header__padding">{title}</p>
      <div className={whiteColor + textClasses}>
        <SimpleBar
          ref={simpleBarRef}
          style={{ maxHeight: maxHeight}}
          forceVisible="y"
          autoHide={true}
        >
          {info ? info : children}
        </SimpleBar>
      </div>
    </div>
  ) : (
    <div className={whiteColor + componentClasses}>
      <p className="py-[1rem] text-header__padding">{title}</p>
      <div className={orangeColor + textClasses}>{info ? info : children}</div>
    </div>
  );
};

export default EventContainer;
