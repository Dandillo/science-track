import React from "react";
import socialLogo from "../../../../assets/svg/social.svg";
import capitolLogo from "../../../../assets/svg/capitol.svg";
import moneyLogo from "../../../../assets/svg/money.svg";
import EventContainer from "../../../../components/EventContainer/EventContainer";
import StatContainer from "./StatContainer";
import DecisionElement from "./DecisionElement";
function Decisions() {
  // const data = [
  //   "Повышение квалификации и обучение новым методикам и технологиям",
  //   "Участие в статусном научном мероприятии (конференция, форум, конгресс)",
  //   "Публикация научной статьи в журнале высокого уровня",
  //   "Запись научно-популярных видео, проведение вебинаров",
  // ];
  return (
    <div className="flex flex-col h-full items-center gap-y-[3rem]">
      <div className="statistics flex gap-3">
        <StatContainer>
          <img
            src={socialLogo}
            width="62"
            height="60"
            className="social block"
          />
          <p className="text-white text-[1.5rem]">100</p>
        </StatContainer>
        <StatContainer>
          <img src={moneyLogo} width="50" height="50" className="money block" />
          <p className="text-white text-[1.5rem]">100</p>
        </StatContainer>
        <StatContainer>
          <img
            src={capitolLogo}
            width="55"
            height="55"
            className="capitol block"
          />
          <p className="text-white text-[1.5rem]">100</p>
        </StatContainer>
      </div>
      <EventContainer title={"Выберите одно решение"}>
        <div className="flex flex-col gap-2 text-gray-600 h-full justify-between">
          <DecisionElement
            text={
              "Повышение квалификации и обучение новым методикам и технологиям"
            }
          />
          <DecisionElement
            text={
              "Участие в статусном научном мероприятии (конференция, форум, конгресс)"
            }
          />
          <DecisionElement
            text={"Публикация научной статьи в журнале высокого уровня"}
          />
          <DecisionElement
            text={"Запись научно-популярных видео, проведение вебинаров"}
          />
        </div>
        TODO:+PAGINATION
      </EventContainer>
    </div>
  );
}

export default Decisions;
