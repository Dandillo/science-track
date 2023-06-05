import React, { useRef, useEffect } from "react";
import ScoreCell from "../ScoreCell/ScoreCell";

function ScoreRow({ place, name, social, finance, administrative }) {
  return (
    <div className="row flex">
      <ScoreCell value={place} />
      <ScoreCell value={name} />
      <ScoreCell value={social} />
      <ScoreCell value={finance} />
      <ScoreCell value={administrative} />
    </div>
  );
}

export default ScoreRow;
