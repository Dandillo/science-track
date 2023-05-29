import React from "react";
import EventContainer from "../../../../components/EventContainer/EventContainer";
import PlayerContainer from "./PlayerContainer";
import GameLogo from "./GameLogo";
function GameChanges() {
  return (
    <div className="flex flex-col gap-y-[1rem] h-full">
      <GameLogo />
      <EventContainer
        title={"Глобальные изменения"}
        info={
          "В связи с возросшей геополитической напряженностью и отказом прежних иностранных партнеров от сотрудничества \
          с вашей научной командой, произошло заключение контракта с учеными из страны 2"
        }
      />
      <EventContainer
        title={"Локальные изменения"}
        info={
          "Обучение студентов и молодых ученых в рамках научных семинаров и курсов. Которые потенциально станут его последователями"
        }
      />
      <PlayerContainer count={"57"} />
    </div>
  );
}

export default GameChanges;
