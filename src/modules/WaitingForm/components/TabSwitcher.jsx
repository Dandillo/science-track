import React, { useState } from "react";
import binIcon from "../../../assets/svg/bin.svg";
import enterIcon from "../../../assets/svg/enter.svg";
import fileIcon from "../../../assets/svg/file.svg";
function TabSwitcher() {
  const [activeTab, setActiveTab] = useState(1);
  const [games, setGames] = useState([
    {
      id: 1,
      dateStart: new Date(Date.now()).toLocaleString(),
      participants: 54,
      duration: "83:23",
    },
    {
      id: 2,
      dateStart: new Date(Date.now()).toLocaleString(),
      participants: 54,
      duration: "83:23",
    },
    {
      id: 3,
      dateStart: new Date(Date.now()).toLocaleString(),
      participants: 54,
      duration: "83:23",
    },
    {
      id: 4,
      dateStart: new Date(Date.now()).toLocaleString(),
      participants: 54,
      duration: "83:23",
    },
    {
      id: 5,
      dateStart: new Date(Date.now()).toLocaleString(),
      participants: 54,
      duration: "83:23",
    },
  ]);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div>
      <div className="flex gap-7">
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

      {activeTab === 1 && (
        <div className="drop-shadow-xl h-full bg-lightGrayTransparentColor w-full rounded-[20px] mt-[30px] flex flex-col justify-center items-center">
          <div className="justify-center items-center text-[15px] grid grid-cols-7 w-full justify-items-center	text-center ">
            <div className="text-lightGrayColor">Игра</div>
            <div className="text-lightGrayColor">Дата начала</div>
            <div className="text-lightGrayColor">Участники</div>
            <div className="text-lightGrayColor">Длительность игры</div>
            <div className="text-lightGrayColor">Войти</div>
            <div className="text-lightGrayColor">Удалить</div>
            <div className="text-lightGrayColor">Результаты</div>
          </div>
          {games.map((game, i) => (
            <div
              key={game.id}
              className="grid grid-cols-7 justify-center items-center text-[20px] justify-items-center	text-center"
            >
              <div className="bg-yellow-300 rounded-full w-[38px] h-[38px] text-center text-[30px] pb-3">
                {game.id}
              </div>
              <div className="text-[20px]">{game.dateStart}</div>
              <div className="text-[20px]">{game.participants}</div>
              <div className="text-[20px]">{game.duration}</div>

              <img src={enterIcon} alt="" className="block" />

              <img src={binIcon} alt="" className="block" />

              <img src={fileIcon} alt="" className="block" />
            </div>
          ))}
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <h2>Контент вкладки 2</h2>
          {/* Дополнительный контент для вкладки 2 */}
        </div>
      )}
      {activeTab === 3 && (
        <div>
          <h2>Контент вкладки 3</h2>
          {/* Дополнительный контент для вкладки 2 */}
        </div>
      )}
    </div>
  );
}

export default TabSwitcher;
