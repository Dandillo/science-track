import React from "react";
import '../ResultAdaptive.scss'

function ScoreCell({ value }) {
  return (
    <div
      className=" transform skew-x-[20deg]  text-white  h-[50px] px-[2.3rem] table__cell"
      style={{
        background:
          "linear-gradient(218.12deg, #FF9910 -17.98%, #FFAB7F 91.47%)",
        marginLeft: `-${50 * Math.tan(20 * (Math.PI / 180))}px`,
      }}
    >
      <p className="text-[30px] font-[400] transform -skew-x-[20deg] table__text">
        {value}
      </p>
    </div>
  );
}

export default ScoreCell;
