import React from "react";
import GameBackground from "./components/Game/GameBackground";
import GameChanges from "./components/Game/GameChanges";
import Player from "./components/Game/Player";

export default function Game() {
  return (
    <GameBackground className="grid lg:grid-cols-game h-full md:grid-cols-1 justify-items-center p-[1.2rem] items-center w-full gap-3 overflow-hidden">
      <GameChanges />
      <Player />
      {/* <LoginForm />  */}
    </GameBackground>
  );
}
