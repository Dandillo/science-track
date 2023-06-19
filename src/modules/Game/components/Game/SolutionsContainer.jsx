import React, { useState, useEffect } from "react";
import EventContainer from "../../../../components/EventContainer/EventContainer";
import Pagination from "../../../../components/Pagination/Pagination";
import { gameApi } from "../../api/gameApi";
import { useDispatch, useSelector } from "react-redux";
import { setLocalSolution } from "../../store/GameStore";
import SimpleBar from "simplebar-react";

function SolutionsContainer({ currentRound }) {
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
  const [isSent, setIsSent] = useState(false);
  useEffect(() => {
    setReady(true);

    // gameApi
    //   .getSolutions(currentPage, 5)
    //   .then((solutions) => {
    //     setData(solutions.data.$values);
    //     setTotalPages(solutions.headers.totalpages);
    //     setReady(true);
    //   })
    //   .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    setIsSent(false);
    dispatch(setLocalSolution(""));
  }, [currentRound]);
  const handlePlayerChoose = (id) => {
    gameApi.setPlayerChoose(currentRound.id, userId, id);
    setIsSent(true);
  };
  return (
    ready && (
      <EventContainer title={"Выберите одно решение"} className={"w-full"}>
        <SimpleBar
          className={
            isSent
              ? "flex flex-col gap-2 text-gray-600 justify-between pointer-events-none	"
              : "flex flex-col gap-3 text-gray-600 justify-between"
          }
          style={{ maxHeight: "38rem" }}
          forceVisible="y"
          autoHide={true}
        >
          {data.map((solution, i) =>
            solution.id === localSolution ? (
              <div
                key={i}
                onClick={() => {
                  dispatch(setLocalSolution(solution.id));
                  handlePlayerChoose(solution.id);
                }}
                className="border-solid border-[5px] border-green-400 p-[0.7rem] mb-2"
              >
                {solution.description}
              </div>
            ) : (
              <div
                key={i}
                onClick={() => {
                  dispatch(setLocalSolution(solution.id));
                  handlePlayerChoose(solution.id);
                }}
                className="border-solid border-[5px] border-gray-400 p-[0.7rem] hover:text-orangeColor hover:border-orangeColor hover:cursor-pointer mb-2"
              >
                {solution.description}
              </div>
            )
          )}
        </SimpleBar>
      </EventContainer>
    )
  );
}

export default SolutionsContainer;
