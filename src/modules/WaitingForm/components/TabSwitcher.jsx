import React, { useState } from "react";

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
        <div className="drop-shadow-xl h-full bg-lightGrayTransparentColor w-full rounded-[20px] mt-[30px] flex flex-col gap-7 justify-center">
          {games.map((game, i) => (
            <div
              key={game.id}
              className="flex justify-around text-[20px] gap-[10px]"
            >
              <div className="bg-yellow-300 rounded-full w-[38px] h-[38px] text-center text-[30px]">
                {game.id}
              </div>
              <div>{game.dateStart}</div>
              <div>{game.participants}</div>
              <div>{game.duration}</div>

              <button>Войти в комнату</button>

              <button> Удалить комнату</button>

              <button> Выгрузить результаты </button>
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
