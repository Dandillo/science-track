import React, { useRef, useEffect } from "react";
import ScoreCell from "../ScoreCell/ScoreCell";

function ScoreRow({ place, name, social, finance, administrative }) {
  return (
    <div className="row grid grid-cols-5">
      <ScoreCell value={place} />
      <ScoreCell value={name} />
      <ScoreCell value={social} />
      <ScoreCell value={finance} />
      <ScoreCell value={administrative} />
    </div>
  );
}

export default ScoreRow;
