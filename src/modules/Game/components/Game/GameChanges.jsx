import React, { useEffect, useState } from "react";
import EventContainer from "../../../../components/EventContainer/EventContainer";
import PlayerContainer from "./PlayerContainer";
import GameLogo from "./GameLogo";
import StartIcon from "../../../../assets/svg/Start.svg";
import { useSelector } from "react-redux";
import { gameApi } from "../../api/gameApi";
function GameChanges({ currentRound, handleStart, started }) {
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
  }, [currentRound,started]);

  return (
    <div className="flex flex-col gap-y-[1rem] h-full justify-center flex-grow w-1/3 content-between	">
      <div className="flex justify-between">
        <GameLogo />
        <button
          hidden={role !== "admin" || started}
          className="hover:scale-105	 hover:transform"
          onClick={handleStart}
        >
          <img src={StartIcon} alt="" />
        </button>
      </div>
      <div className="flex flex-col gap-7 flex-grow">
        <EventContainer
          maxHeight={220}
          title={"Глобальные изменения"}
          info={
            globalChange
            // "В вашем научном коллективе преобладала дружеская атмосфера и взаимопонимание между учеными из разных стран. Вы совместно работали над перспективными научными проектами, обменивались опытом и знаниями, помогали друг другу в сложных ситуациях, строили научные гипотезы и проводили исследования.В этом году ситуация изменилась из-за возросшей геополитической напряженности между страной 1 и другими государствами. Ученые из этой страны стали отдаляться и прекращать сотрудничество с вашим научным коллективом.Ученые из страны 1 перестали приезжать на ваши научные конференции и отказывались от совместных научных проектов, а вы не могли отправляться к ним на стажировки. Коллеги из других стран тоже испытывали трудности при взаимодействии с учеными из страны 1, что привело к замедлению работы над совместными научными проектами и сделало невозможным сотрудничество."
          }
        />

        <EventContainer
          maxHeight={220}
          title={"Локальные изменения"}
          info={
            localChange
            // "Анна мечтала о карьере в науке. После окончания бакалавриата она решила продолжить обучение в престижном университете в городе-миллионнике, где получила возможность изучать интересную ей специальность под руководством опытных преподавателей. За год обучения она погрузилась в практику проведения научных исследований, активно участвовала в проведении экспериментов, что помогло ей приобрести значимые для ученого компетенции.Анна поняла, что наука – ее призвание и захотела еще больше углубиться в исследовательскую деятельность. Поэтому решила пройти стажировку в одном престижном научном институте. Там она работала под руководством ведущих ученых и принимала участие в различных проектах, что позволило ей получить ценный опыт и новые знания.По возвращении в университет, Анна продолжила научные исследования и подготовила научную статью, которую успешно опубликовали в журнале высокого уровня. Анна поняла, что преподавание в статусном университете и стажировка в престижном научном институте помогли ей приблизиться к желаемым целям в научной карьере."
          }
        />
      </div>
    </div>
  );
}

export default GameChanges;
