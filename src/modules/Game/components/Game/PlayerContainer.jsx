import React from "react";

const PlayerContainer = ({ count }) => {
  return (
    <div className="bg-white shadow-md  rounded-2xl text-white text-center text-[1.875rem]  flex w-[70%] items-center justify-between	pr-[2rem]">
      <p className="p-[1rem] bg-orangeColor shadow-md rounded-2xl">
        Количество игроков
      </p>
      <p className="  text-orangeColor rounded-2xl  text-[30px]  text-center pl-3">
        {count}
      </p>
    </div>
  );
};
export default PlayerContainer;
