import React from "react";
import ResultBackground from "./components/ResultBackground/ResultBackground";
import ResultScoreboard from "./components/ResultScoreboard/ResultScoreboard";
export default function ResultModule() {
  return (
    <ResultBackground className="flex justify-center h-full w-full">
      <ResultScoreboard />
    </ResultBackground>
  );
}
