import React from "react";
import ProgressCircle from "../../../../components/EventContainer/ProgressCircle";
import RoundCircle from "../../../../components/EventContainer/RoundCircle";
import EventContainer from "../../../../components/EventContainer/EventContainer";
function Player({
  timer,
  currentRound,
  description,
  stagePicture 
}) {
  return (
    <div className="flex flex-col h-full items-center ">
      <div className="rounds flex">
        <RoundCircle roundNumber={currentRound - 1} next={false} />
        <ProgressCircle roundNumber={currentRound} progress={timer} />
        <RoundCircle roundNumber={currentRound + 1} next={true} />
      </div>

      <img src={stagePicture} className="block h-[50%]" />
      <EventContainer title={"Описание"} info={description} revert={true} />
    </div>
  );
}

export default Player;
