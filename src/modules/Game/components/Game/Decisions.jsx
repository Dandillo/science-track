import React from "react";
import socialLogo from "../../../../assets/svg/social.svg";
import capitolLogo from "../../../../assets/svg/capitol.svg";
import moneyLogo from "../../../../assets/svg/money.svg";

import StatContainer from "./StatContainer";
// import DecisionElement from "./DecisionElement";
import SolutionsContainer from "./SolutionsContainer";
function Decisions() {
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
      <SolutionsContainer />
    </div>
  );
}

export default Decisions;
