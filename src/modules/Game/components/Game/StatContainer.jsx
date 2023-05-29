import React from "react";

function StatContainer({ children }) {
  return (
    <div className="bg-gray-400 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] flex p-[0.6rem] justify-center items-center gap-1 bg-opacity-[80%]">
      {children}
    </div>
  );
}

export default StatContainer;
