import React from "react";

function DecisionElement({ text }) {
  return (
    <div className="border-solid border-[5px] border-gray-400 p-[0.7rem] hover:text-orangeColor hover:border-orangeColor hover:cursor-pointer	">
      {text}
    </div>
  );
}

export default DecisionElement;
