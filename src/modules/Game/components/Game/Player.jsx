import React from "react";
import ProgressCircle from "../../../../components/EventContainer/ProgressCircle";
import RoundCircle from "../../../../components/EventContainer/RoundCircle";
import playerImg from "../../../../assets/images/Player.png";
import EventContainer from "../../../../components/EventContainer/EventContainer";
function Player() {
  return (
    <div className="flex flex-col h-full items-center ">
      <div className="rounds flex">
        <RoundCircle roundNumber={14} next={false} />
        <ProgressCircle roundNumber={15} progress={70} />
        <RoundCircle roundNumber={16} next={true} />
      </div>
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
