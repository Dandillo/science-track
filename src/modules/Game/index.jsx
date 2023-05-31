import React, { useState, useEffect } from "react";
import GameBackground from "./components/Game/GameBackground";
import GameChanges from "./components/Game/GameChanges";
import Player from "./components/Game/Player";
import Decisions from "./components/Game/Decisions";
import * as signalR from "@microsoft/signalr";

const hubConnection = new signalR.HubConnectionBuilder()
  .configureLogging(signalR.LogLevel.Debug)
  .withUrl("http://localhost:5144/GameHub", {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets,
  })
  .build();

async function start() {
  try {
    await hubConnection.start();
    console.log("SignalR Connected.");
  } catch (err) {
    console.log(err);
    setTimeout(start, 5000);
  }
}

hubConnection.onclose(async () => {
  await start();
});

start();
export default function Game() {
  const [timer, setTimer] = useState(0);
  const [currentRound, setCurrentRound] = useState();

  useEffect(() => {
    const handleCurrentTime = (time) => {
      console.log(time);
      setTimer(time);
      // hubConnection.off("CurrentTime", handleCurrentTime);
    };

    const handleNewRound = (round) => {
      console.log(round);
      setCurrentRound(round);
      // hubConnection.off("NewRound", handleNewRound);
    };

    hubConnection.on("CurrentTime", handleCurrentTime);
    hubConnection.on("NewRound", handleNewRound);
  }, []);
  const handleStart = () => {
    hubConnection.invoke("StartGame", 1);
    hubConnection.invoke("AddToGroup", "3");
  };
  return (
    <GameBackground className="grid lg:grid-cols-game h-full md:grid-cols-1 justify-items-center p-[1.2rem] items-center w-full gap-3 overflow-hidden">
      <GameChanges currentRound={currentRound} />

      <Player
        currentRound={currentRound != undefined ? currentRound.age : 19}
        timer={timer}
        handleStart={handleStart}
      />
      <Decisions currentRound={currentRound} />
    </GameBackground>
  );
}
