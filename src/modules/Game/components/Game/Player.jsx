import React from "react";
import ProgressCircle from "../../../../components/EventContainer/ProgressCircle";
import RoundCircle from "../../../../components/EventContainer/RoundCircle";
import EventContainer from "../../../../components/EventContainer/EventContainer";
import './GameAdaptive.scss';

function Player({ timer, currentRound, description, stagePicture }) {
  return (
    <div className="flex flex-col  items-center w-1/3  ">
      <div className="rounds flex">
        <RoundCircle roundNumber={currentRound - 1} next={false} />
        <ProgressCircle roundNumber={currentRound} progress={timer} />
        <RoundCircle roundNumber={currentRound + 1} next={true} />
      </div>
      <img src={stagePicture} alt="" className="block h-[32rem] player__img" />
      <EventContainer title={"Описание"} info={description} revert={true} />
    </div>
  );
}

export default Player;
