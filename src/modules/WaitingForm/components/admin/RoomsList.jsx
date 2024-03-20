import React from "react";
import TabSwitcher from "../TabSwitcher";

function RoomsList({
  setInputGameId,
  handleConnectGame,
  userId,
  handleCreateGame,
}) {
  return (
    <TabSwitcher
      setInputGameId={setInputGameId}
      handleConnectGame={handleConnectGame}
      userId={userId}
      handleCreateGame={handleCreateGame}
    />
  );
}

export default RoomsList;
