import React, { useState, useEffect } from "react";
import star from "../../../../assets/images/Star.png";
import ScoreRow from "../ScoreRow/ScoreRow";
import { gameApi } from "../../../Game/api/gameApi";
import { useParams } from "react-router-dom";
import RoundedContainer from "../../../../components/RoundedContainer/RoundedContainer";
import '../ResultAdaptive.scss'


function ResultScoreboard() {
  const [scoreTableData, setScoreTableData] = useState([]);
  const { gameId } = useParams();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(false);
    gameApi.GetScoreTable(gameId).then((scoreTable) => {
      setScoreTableData(scoreTable.data.$values);
      setIsReady(true);
    });
  }, []);

  return (
    scoreTableData && (
      <RoundedContainer extraClasses="rounded-[80px] items-center bg-gray-900 gap-[20px]">
        <div className="flex h-[100px] stars-ico mt-[10px]">
          <img
            src={star}
            alt=""
            className="block scale-[70%] rotate-[-10deg]"
          />
          <img src={star} alt="" className="block" />
          <img src={star} alt="" className="block scale-[70%] rotate-[10deg]" />
        </div>
        <p className="bg-orange-500 bg-clip-text text-transparent text-[70px] text-result">
          РЕЗУЛЬТАТЫ
        </p>
        <div className="grid grid-cols-results gap-y-3 text-center">
          <ScoreRow
            place={"Место"}
            name={"Имя"}
            social={"Соц. статус"}
            finance={"Финансы"}
            administrative={"Адм. ресурс"}
          />
          {scoreTableData.map((row, place) => (
            <ScoreRow
              key={row.user}
              place={place + 1}
              name={row.officialName}
              social={row.socialStatus}
              finance={row.financeStatus}
              administrative={row.administrativeStatus}
            />
          ))}
        </div>
      </RoundedContainer>
    )
  );
}

export default ResultScoreboard;
