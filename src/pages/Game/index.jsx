import React from "react";
import GameModule from "../../modules/Game";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export default function Game() {
  useAuthRedirect();
  return <GameModule  />;
}
