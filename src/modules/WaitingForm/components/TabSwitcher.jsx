import React, { useState, useEffect } from "react";
import binIcon from "../../../assets/svg/bin.svg";
import enterIcon from "../../../assets/svg/enter.svg";
import fileIcon from "../../../assets/svg/file.svg";
import { waitingApi } from "../api/waitingApi";
import Pagination from "../../../components/Pagination/Pagination";

function toHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function TabSwitcher({ setInputGameId, handleConnectGame }) {
  const columnsDependency = {
    1: "Войти",
    2: "Удалить",
    3: "Результаты",
  };
  const [activeTab, setActiveTab] = useState(1);
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  useEffect(() => {
    switch (activeTab) {
      case 1: {
        console.log(1);
        waitingApi.GetActiveGames(currentPage, 10).then((gamesInfo) => {
          setGames(gamesInfo.data.$values);
          setTotalPages(gamesInfo.headers.totalpages);
          console.log(gamesInfo.data.$values);
        });
        break;
      }
      case 2: {
        console.log(2);
        waitingApi.GetPendingGames(currentPage, 10).then((gamesInfo) => {
          setGames(gamesInfo.data.$values);
          setTotalPages(gamesInfo.headers.totalpages);
          console.log(gamesInfo.data.$values);
        });
        break;
      }
      case 3: {
        console.log(3);
        waitingApi.GetArchivedGames(currentPage, 10).then((gamesInfo) => {
          setGames(gamesInfo.data.$values);
          setTotalPages(gamesInfo.headers.totalpages);
          console.log(gamesInfo.data.$values);
        });
        break;
      }
    }
  }, [currentPage, activeTab]);

  return (
    <div>
      <div className="flex gap-7 flex-wrap">
        <button
          className={`${
            activeTab === 1
              ? "bg-orangeLightBGColor  text-orangeColor"
              : "text-black bg-white"
          } rounded-xl text-[2em] bg-opacity-88 border border-gray-300 flex gap-3 items-center px-2`}
          onClick={() => handleTabClick(1)}
        >
          <div
            className={`rounded-[10px]   text-[25px] text-center px-3 ${
              activeTab === 1
                ? "bg-orangeLighterColor  text-white"
                : "text-black bg-lightGrayTransparentColor"
            }`}
          >
            8
          </div>
          Активные
        </button>
        <button
          className={`${
            activeTab === 2
              ? "bg-orangeLightBGColor  text-orangeColor"
              : "text-black bg-white"
          } rounded-xl text-[2em] bg-opacity-88 border border-gray-300 flex gap-3 items-center px-2`}
          onClick={() => handleTabClick(2)}
        >
          <div
            className={`rounded-[10px]   text-[25px] text-center px-3 ${
              activeTab === 2
                ? "bg-orangeLighterColor  text-white"
                : "text-black bg-lightGrayTransparentColor"
            }`}
          >
            24
          </div>
          Ожидание
        </button>
        <button
          className={`${
            activeTab === 3
              ? "bg-orangeLightBGColor  text-orangeColor"
              : "text-black bg-white"
          } rounded-xl text-[2em] bg-opacity-88 border border-gray-300 flex gap-3 items-center px-2`}
          onClick={() => handleTabClick(3)}
        >
          <div
            className={`rounded-[10px]   text-[25px] text-center px-3 ${
              activeTab === 3
                ? "bg-orangeLighterColor  text-white"
                : "text-black bg-lightGrayTransparentColor"
            }`}
          >
            24
          </div>
          Архив
        </button>
      </div>

      <div className=" drop-shadow-xl h-full bg-lightGrayTransparentColor w-full rounded-[20px] mt-[20px] flex flex-col justify-between ">
        <div className="grid grid-cols-5 justify-center justify-items-center items-center pt-[20px]">
          <div className="text-lightGrayColor">Игра</div>
          <div className="text-lightGrayColor">Дата начала</div>
          <div className="text-lightGrayColor">Участники</div>
          <div className="text-lightGrayColor">Длительность игры</div>
          <div className="text-lightGrayColor">
            {columnsDependency[activeTab]}
          </div>
        </div>
        {games.map((game, i) => (
          <div
            key={game.id}
            className="grid grid-cols-5 justify-center justify-items-center items-center hover:bg-orangeLighterColor  rounded-md cursor-pointer"
          >
            <div
              key={game.id}
              className="bg-orange-300 rounded-full w-[40px] h-[40px] text-center text-[20px] "
            >
              <div className="flex justify-center items-center h-full ">
                {game.id}
              </div>
            </div>
            <div className="text-[20px]">
              {game.date ? new Date(game.date).toLocaleString() : "-"}
            </div>
            <div className="text-[20px]">{game.playerCount}</div>
            <div className="text-[20px]">
              {toHoursAndMinutes(game.stage * 3 * 104)}
            </div>
            {activeTab === 1 && (
              <img
                src={enterIcon}
                alt=""
                id={game.id}
                onClick={handleConnectGame}
                className="block cursor-pointer hover:bg-orange-300 p-2"
              />
            )}
            {activeTab === 2 && <img src={binIcon} alt="" className="block" />}
            {activeTab === 3 && <img src={fileIcon} alt="" className="block" />}
          </div>
        ))}
        <Pagination
          className="col-span-5 pb-5"
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default TabSwitcher;
