import React, { useRef, useEffect } from "react";
import ScoreCell from "../ScoreCell/ScoreCell";

function ScoreRow({ place, name, social, finance, administrative }) {
  return (
    <>
      <ScoreCell value={place} />
      <ScoreCell value={name} />
      <ScoreCell value={social} />
      <ScoreCell value={finance} />
      <ScoreCell value={administrative} />
    </>
  );
}

export default ScoreRow;
