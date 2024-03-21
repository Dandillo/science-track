import React from "react";
import ResultBackground from "../ResultModule/components/ResultBackground/ResultBackground";
import StatisticsBoard from "./components/StatisticsBoard/StatisticsBoard";
export default function StatisticsModule() {
  return (
    <ResultBackground className="flex justify-center h-full w-full">
      <StatisticsBoard />
    </ResultBackground>
  );
}
