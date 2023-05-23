import React from "react";

export default function Input({ className, ...props }) {
  const combinedClassName = `border-2 rounded-tr-[50px] rounded-bl-[50px] py-[20px] px-[30px] border-grayColor ${className}`;

  return <input {...props} className={combinedClassName} />;
}
