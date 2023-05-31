import React from "react";
import ProgressCircle from "../../../../components/EventContainer/ProgressCircle";
import RoundCircle from "../../../../components/EventContainer/RoundCircle";
import playerImg from "../../../../assets/images/Player.png";
import EventContainer from "../../../../components/EventContainer/EventContainer";
function Player({
  timer,
  currentRound,
  handleStart,

}) {
  return (
    <div className="flex flex-col h-full items-center ">
      <div className="rounds flex">
        <RoundCircle roundNumber={currentRound - 1} next={false} />
        <ProgressCircle roundNumber={currentRound} progress={timer} />
        <RoundCircle roundNumber={currentRound + 1} next={true} />
      </div>
      <button onClick={handleStart} className="w-[100px] bg-white">
        ЗАПУСТИТИ МИНЯ
      </button>
      <img src={playerImg} className="block h-[50%]" />
      <EventContainer
        
        title={"Описание"}
        info={
          "Игрок с высоким социальным статусом обычно обладает огромным количеством связей и знакомств в различных сферах жизни. Он умеет держать себя в обществе и производить благоприятное впечатление на окружающих"
        }
        revert={true}
      />
    </div>
  );
}

export default Player;
