import React, { useEffect, useState } from "react";
import EventContainer from "../../../../components/EventContainer/EventContainer";
import PlayerContainer from "./PlayerContainer";
import GameLogo from "./GameLogo";
import { useSelector } from "react-redux";
import { gameApi } from "../../api/gameApi";
function GameChanges({ currentRound }) {
  const [localChange, setLocalChange] = useState("");
  const [globalChange, setGlobalChange] = useState("");

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
      <GameLogo />

      <EventContainer title={"Глобальные изменения"} info={localChange} />

      <EventContainer title={"Локальные изменения"} info={globalChange} />
      <PlayerContainer count={"1"} />
    </div>
  );
}

export default GameChanges;
