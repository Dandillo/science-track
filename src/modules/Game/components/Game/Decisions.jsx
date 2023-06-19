import React, { useEffect, useState } from "react";
import socialLogo from "../../../../assets/svg/social.svg";
import capitolLogo from "../../../../assets/svg/capitol.svg";
import moneyLogo from "../../../../assets/svg/money.svg";

import StatContainer from "./StatContainer";
// import DecisionElement from "./DecisionElement";
import SolutionsContainer from "./SolutionsContainer";
import { useSelector } from "react-redux";
import { gameApi } from "../../api/gameApi";

function Decisions({ currentRound }) {
  const [socialStatusAmount, setSocialStatusAmount] = useState();
  const [financeStatusAmount, setFinanceStatusAmount] = useState();
  const [administrativeStatusAmount, setAdministrativeStatusAmount] = useState();

  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    console.log(userId);
    if (currentRound !== undefined) {
      gameApi
        .GetPlayerRoundStatusEvents(currentRound.id, userId)
        .then((events) => {
          console.log(events);
          setSocialStatusAmount(events.data.socialStatus);
          setFinanceStatusAmount(events.data.financeStatus);
          setAdministrativeStatusAmount(events.data.administrativeStatus);
        })
        .catch((err) => console.error(err));
    }
  }, [currentRound]);

  return (
    <div className="flex flex-col h-full items-center gap-y-[3rem] w-1/3 flex-grow ">
      <div className="statistics flex gap-3 ">
        <StatContainer
          title={"Социальный статус"}
          info={"Даёт возможность тебе быть в центре внимания"}
        >
          <img
            src={socialLogo}
            width="62"
            height="60"
            className="social block"
          />
          <p className="text-white text-[1.5rem]">{socialStatusAmount}</p>
        </StatContainer>
        <StatContainer title={"Финансовые показатели"}>
          <img src={moneyLogo} width="50" height="50" className="money block" />
          <p className="text-white text-[1.5rem]">{financeStatusAmount}</p>
        </StatContainer>
        <StatContainer title={"Административный статус"}>
          <img
            src={capitolLogo}
            width="55"
            height="55"
            className="capitol block"
          />
          <p className="text-white text-[1.5rem]">
            {administrativeStatusAmount}
          </p>
        </StatContainer>
      </div>
      <SolutionsContainer currentRound={currentRound} />
    </div>
  );
}

export default Decisions;
