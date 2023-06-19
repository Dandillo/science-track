import React, { useState, useEffect } from "react";
import GameBackground from "./components/Game/GameBackground";
import GameChanges from "./components/Game/GameChanges";
import Player from "./components/Game/Player";
import Decisions from "./components/Game/Decisions";
import * as signalR from "@microsoft/signalr";
import { useSelector } from "react-redux";
import hubConnection from "../../http/gameHub";
import { API_URL } from "../../http/api";
import playerImg from "../../assets/images/Player.png";
import { useNavigate } from "react-router-dom";
import "./css/game.css";
export default function Game() {
  const [timer, setTimer] = useState(0);
  const [currentRound, setCurrentRound] = useState();
  const [stageDisc, setStageDisc] = useState(
    "Игрок с высоким социальным статусом обычно обладает огромным количеством связей и знакомств в различных сферах жизни. Он умеет держать себя в обществе и производить благоприятное впечатление на окружающих"
  );
  const [stagePicture, setStagePicture] = useState(playerImg);
  const idGame = useSelector((state) => state.game.idGame);
  const navigate = useNavigate();
  useEffect(() => {
    const handleCurrentTime = (time) => {
      console.log(time);
      setTimer(time);
    };

    const handleNewRound = (round) => {
      console.log(round);
      if (round === "end") {
        navigate(`/results/${idGame}`);
      }
      setCurrentRound(round);
      setStageDisc(round.stageDisc);
      setStagePicture(API_URL + round.picture);
    };

    hubConnection.on("CurrentTime", handleCurrentTime);
    hubConnection.on("NewRound", handleNewRound);
    return () => {};
  }, []);

  const handleStart = () => {
    hubConnection.invoke("StartGame", idGame);
  };
  const handleAddGroupStart = () => {
    hubConnection.invoke("RemoveFromGroup", String(idGame));

    hubConnection.invoke("AddToGroup", String(idGame));
  };

  return (
    <GameBackground className="flex h-full  justify-items-center p-[1.2rem] items-center w-full gap-3 ">
      <GameChanges currentRound={currentRound} handleStart={handleStart} />

      <Player
        currentRound={currentRound != undefined ? currentRound.age : 19}
        timer={timer}
        handleAddGroupStart={handleAddGroupStart}
        description={stageDisc}
        stagePicture={stagePicture}
      />
      <Decisions currentRound={currentRound} />
    </GameBackground>
  );
}
