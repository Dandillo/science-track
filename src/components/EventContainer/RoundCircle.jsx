import React from "react";

const RoundCircle = ({ roundNumber, next }) => {
  return next ? (
    <div
      className={`text-white bg-grayColor w-[80px] h-[80px] rounded-full text-center 
      align-middle flex items-center justify-center text-[1.7rem] round-circle__left-right`}
    >
      {roundNumber}
    </div>
  ) : (
    <div
      className={
        roundNumber < 1
          ? "opacity-[0%]"
          : `text-white bg-orangeColor w-[80px] h-[80px] rounded-full text-center align-middle	
          flex items-center justify-center text-[1.7rem] round-circle__left-right`
      }
    >
      {roundNumber}
    </div>
  );
};

export default RoundCircle;
