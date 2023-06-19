import React from "react";

const RoundedContainer = ({ bg, children, extraClasses }) => {
  const containerStyle = ` bg-opacity-[95%] h-[800px] w-[70%] flex  p-5 flex-col ${extraClasses} `;

  return <div className={containerStyle}>{children}</div>;
};

export default RoundedContainer;
