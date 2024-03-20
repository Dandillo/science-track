import React, { useEffect, useState } from "react";
import "./TabSwitcher.scss";
import RoomsList from "./admin/RoomsList";
import PlayersList from "./admin/PlayersList";
import { waitingApi } from "../api/waitingApi";

const TabsWithUnderline = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name); // Устанавливаем первую вкладку активной по умолчанию

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 pt-2">
        <Tab
          title="Комнаты"
          isActive={activeTab === "rooms"}
          onClick={() => handleTabClick("rooms")}
        />
        <Tab
          title="Игроки"
          isActive={activeTab === "players"}
          onClick={() => handleTabClick("players")}
        />
      </div>
      {/* Здесь можно добавить содержимое для каждой вкладки */}
      {activeTab === "rooms" && <RoomsList />}
      {activeTab === "players" && <PlayersList />}
    </div>
  );
};

const Tab = ({ title, isActive, onClick }) => {
  return (
    <p
      className={`p-divider  pt-5 text-[2.5em] cursor-pointer pb-0 mb-2 ${
        isActive
          ? "border-b-4 border-orangeColor transition-all duration-200 text-GrayColor"
          : "border-b-4 border-transparent text-darkGrayColor"
      }`}
      onClick={onClick}
    >
      {title}
    </p>
  );
};

export default TabsWithUnderline;
