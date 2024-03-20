import React, { useState, useEffect, useRef } from "react";
import EventContainer from "../../../../components/EventContainer/EventContainer";
import Pagination from "../../../../components/Pagination/Pagination";
import { gameApi } from "../../api/gameApi";
import { useDispatch, useSelector } from "react-redux";
import { setLocalSolution } from "../../store/GameStore";
import SimpleBar from "simplebar-react";
import LocalSolutionEvent from "./LocalSolutionEvent";
import "./GameAdaptive.scss";

function SolutionsContainer({ currentStage, currentRound }) {
  const [data, setData] = useState([
    {
      id: 1,
      description:
        "Повышение квалификации и обучение новым методикам и технологиям",
    },
    {
      id: 2,
      description:
        "Участие в статусном научном мероприятии (конференция, форум, конгресс)",
    },
    {
      id: 3,
      description: "Публикация научной статьи в журнале высокого уровня",
    },
    {
      id: 4,
      description: "Запись научно-популярных видео, проведение вебинаров",
    },
    {
      id: 5,
      description: "Разработка инновационного продукта или решения",
    },
    {
      id: 6,
      description: "Участие в проекте с высокой социальной значимостью",
    },
    {
      id: 7,
      description: "Получение престижной научной награды",
    },
    {
      id: 8,
      description: "Проведение научных экспериментов и исследований",
    },
    {
      id: 9,
      description: "Организация научной конференции или семинара",
    },
    {
      id: 10,
      description: "Проведение полевых исследований и экспедиций",
    },
    {
      id: 11,
      description: "Разработка новых методов анализа данных и моделей",
    },
    {
      id: 12,
      description: "Публикация научно-популярных книг или статей",
    },
    {
      id: 13,
      description:
        "Получение гранта или финансирования на научные исследования",
    },
    {
      id: 14,
      description: "Участие в международном научном сотрудничестве",
    },
    {
      id: 15,
      description: "Внедрение научных разработок в промышленность",
    },
    {
      id: 16,
      description: "Проведение научных опытов и тестирование гипотез",
    },
    {
      id: 17,
      description:
        "Организация и проведение научных круглых столов и дискуссий",
    },
    {
      id: 18,
      description: "Подготовка научных обзоров и аналитических отчетов",
    },
    {
      id: 19,
      description: "Разработка компьютерных моделей и симуляций",
    },
    {
      id: 20,
      description: "Проведение научных экспертиз и консультаций",
    },
  ]);
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const localSolution = useSelector((state) => state.game.localSolution);
  const [lastIdData, setLastIdData] = useState(0);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    console.log("RUND SOLUTIONT:");
    console.log(currentRound);
    console.log("STAGE:" + currentStage);
    if (currentRound)
      gameApi
        .getSolutions(currentRound.stage)
        .then((solutions) => {
          setData(solutions.data.$values);
          console.log(solutions.data.$values);
          setReady(true);
        })
        .catch((err) => console.error(err));
  }, [currentRound, isSent]);
  useEffect(() => {
    setIsSent(false);
    dispatch(setLocalSolution(""));
  }, [currentRound]);

  return (
    <EventContainer
      title={"Выберите одно решение"}
      className={"w-full flex-grow"}
    >
      <SimpleBar
        className={
          isSent
            ? "flex flex-col gap-2 text-gray-600 justify-between pointer-events-none max-h-[38rm] solution__container"
            : "flex flex-col gap-3 text-gray-600 justify-between max-h-[38rm] solution__container"
        }
        style={{ maxBlockSize: "38rem" }}
        forceVisible="y"
        autoHide={true}
      >
        {data.map((solution, i) => (
          <LocalSolutionEvent
            key={i}
            solution={solution}
            setIsSent={setIsSent}
            currentRound={currentRound}
          />
        ))}
      </SimpleBar>
    </EventContainer>
  );
}

export default SolutionsContainer;
