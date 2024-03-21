import React, { useState, useEffect } from "react";
import star from "../../../../assets/images/Star.png";
import { gameApi } from "../../../Game/api/gameApi";
import { useNavigate, useParams } from "react-router-dom";
import RoundedContainer from "../../../../components/RoundedContainer/RoundedContainer";
import Button from "../../../../ui/Button";
import PlayerChart from "../PlayerChart/PlayerChart";

function StatisticsBoard() {
  const [scoreTableData, setScoreTableData] = useState([]);
  const { gameId } = useParams();
  const navigator = useNavigate();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(false);
    gameApi.GetScoreTable(gameId).then((scoreTable) => {
      setScoreTableData(scoreTable.data.$values);
      setIsReady(true);
    });
  }, []);
  const handleBackButton = () => {
    navigator(-1);
  };
  return (
    scoreTableData && (
      <RoundedContainer extraClasses="rounded-[80px] items-center bg-gray-900 gap-[10px] justify-between mb-10 pb-10">
        <div className="items-center flex flex-col">
          <div className="flex h-[100px] stars-ico mt-[10px]">
            <img
              src={star}
              alt=""
              className="block scale-[70%] rotate-[-10deg]"
            />
            <img src={star} alt="" className="block" />
            <img
              src={star}
              alt=""
              className="block scale-[70%] rotate-[10deg]"
            />
          </div>
          <p className="bg-orange-500 bg-clip-text text-transparent text-[70px] text-result">
            СТАТИСТИКА
          </p>
          <div className="grid z-10">
            <PlayerChart gameId={gameId}/>
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <button
            onClick={handleBackButton}
            className="z-10	cursor-pointer uppercase border-orangeStroke border px-[40px] py-[15px] rounded-[20px] text-orangeTextResult text-[30px]"
          >
            назад
          </button>
          {/*<button className="z-10	cursor-pointer uppercase border-orangeStroke border px-[40px] py-[15px] rounded-[20px] text-orangeTextResult text-[30px]">*/}
          {/*  выгрузить*/}
          {/*</button>*/}
        </div>
      </RoundedContainer>
    )
  );
}

export default StatisticsBoard;
