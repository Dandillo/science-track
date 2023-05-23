import React from "react";

export default function Button({ className, ...props }) {
  const combinedClassName = `border-2 rounded-br-[50px] rounded-tl-[50px] ${className}`;

  return <button {...props} className={combinedClassName}  />;
}
