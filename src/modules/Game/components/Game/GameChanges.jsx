import React, { useEffect, useState } from "react";
import EventContainer from "../../../../components/EventContainer/EventContainer";
import PlayerContainer from "./PlayerContainer";
import GameLogo from "./GameLogo";
import StartIcon from "../../../../assets/svg/Start.svg";
import { useSelector } from "react-redux";
import { gameApi } from "../../api/gameApi";
function GameChanges({ currentRound, handleStart }) {
  const [localChange, setLocalChange] = useState(
    "Обучение студентов и молодых ученых в рамках научных семинаров и курсов. Которые потенциально станут его последователями"
  );
  const [globalChange, setGlobalChange] = useState(
    "В связи с возросшей геополитической напряженностью и отказом прежних иностранных партнеров от сотрудничества с вашей научной командой, произошло заключение контракта с учеными из страны 2"
  );
  const role = useSelector((state) => state.user.role);

  const userId = useSelector((state) => state.user.id);
  useEffect(() => {
    console.log(userId);

    if (currentRound !== undefined) {
      gameApi
        .GetPlayerRoundStatusEvents(currentRound.id, userId)
        .then((events) => {
          console.log(events);
          setLocalChange(events.data.localEvent.description);
          setGlobalChange(events.data.globalEvent.description);
        })
        .catch((err) => console.error(err));
    }
  }, [currentRound]);

  return (
    <div className="flex flex-col gap-y-[1rem] h-full">
      <div className="flex justify-between">
        <GameLogo />
        <button
          hidden={role !== "admin"}
          className="hover:scale-105	 hover:transform"
          onClick={handleStart}
        >
          <img src={StartIcon} alt="" />
        </button>
      </div>
      <EventContainer title={"Глобальные изменения"} info={globalChange} />

      <EventContainer title={"Локальные изменения"} info={localChange} />
      <PlayerContainer count={"..."} />
    </div>
  );
}

export default GameChanges;
