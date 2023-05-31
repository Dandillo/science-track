import React from "react";
import star from "../../../../assets/images/Star.png";

function ResultScoreboard() {
  return (
    <div className="bg-gray-900 bg-opacity-[95%] rounded-[80px] h-[800px] w-[70%] flex items-center p-5 flex-col ">
      <div className="flex h-[100px]">
        <img src={star} alt="" className="block scale-[70%] rotate-[-10deg]" />
        <img src={star} alt="" className="block" />
        <img src={star} alt="" className="block scale-[70%] rotate-[10deg]" />
      </div>
      <p className="bg-orange-500 bg-clip-text text-transparent  text-[70px]">
        РЕЗУЛЬТАТЫ
      </p>
      <div className=""></div>
    </div>
  );
}

export default ResultScoreboard;
