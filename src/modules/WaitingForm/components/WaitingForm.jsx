import React, { useState } from "react";
import WaitingBG from "./WaitingBG";
import logo from "../../../assets/images/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useAuthRedirect } from "../../../hooks/useAuthRedirect";
import { useNavigate } from "react-router-dom";
// import { setIdGame, setGlobalEvent, setLocalEvent, setLocalSolution } from '../../Game/store/GameStore';
import { setIdGame } from "../../Game/store/GameStore";
import WaitingService from "../services/WaitingServices";
import Input from "../../../ui/Input";

function WaitingForm({ connectCount }) {
  useAuthRedirect();

  const role = useSelector((state) => state.user.role);
  const userId = useSelector((state) => state.user.id);
  const userOffName = useSelector((state) => state.user.offName);
  const idGame = useSelector((state) => state.game.idGame);
  const [isEmpty, setIsEmpty] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate(null);
  const handleCreateGame = (e) => {
    e.preventDefault();
    WaitingService.createGame()
      .then((response) => {
        dispatch(setIdGame(response.data.id));
        WaitingService.addUser(response.data.id, userId)
          .then(() => {
            navigate("/game");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleConnectGame = (e) => {
    e.preventDefault();
    const gameId = e.target.value;
    WaitingService.addUser(gameId, userId)
      .then(() => {
        dispatch(setIdGame(gameId));

        navigate("/game");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleInput = (e) => setIsEmpty(e.target.value.length == 0);

  connectCount = 23;
  return (
    <WaitingBG>
      <div
        style={{
          borderRadius: `25px`,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        className="w-[420px] h-[500px] -translate-y-6 pt-10 pb-5 px-6 ml-auto mr-32 flex flex-col"
      >
        <div className="flex justify-start items-center">
          <img src={logo} alt="logo" className="h-[85px] w-auto" />
          <p className="text-orangeColor font-semibold ml-4 text-2xl">
            SCIENCE TRACK
          </p>
        </div>
        <div
          style={{
            borderRadius: "10px",
          }}
          className="my-6 w-[180px] h-[6px] bg-orangeColor"
        />
        <h1 className="font-bold text-5xl text-[#4B4B4B] mb-6">
          Привет, {userOffName}
        </h1>
        {role === "player" ? (
          <div>
            <p className="text-2xl text-[#4B4B4B]">
              Игра скоро начнётся, ты уже ознакомился с правилами? Самое время
              сделать это сейчас!
            </p>
            <div className="input-container flex gap-1 items-center">
              <label
                htmlFor="gameId"
                className="text-2xl text-[#4B4B4B] font-bold"
              >
                Код игры:
              </label>
              <input
                type="text"
                id="gameId"
                className="p-3 rounded-xl border-orangeColor border"
              />
            </div>
            <button
              onClick={handleConnectGame}
              style={{
                borderRadius: "16px",
              }}
              onChange={handleInput}
              disabled={isEmpty}
              className="bg-transparent border-green-500 text-green-500 hover:border-green-700 hover:text-green-700
                            border-4 w-full py-2 text-2xl font-semibold cursor-pointer mt-4"
            >
              Присоединиться к игре
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-around h-full w-full">
            <button
              onClick={handleCreateGame}
              style={{
                borderRadius: "16px",
              }}
              className="bg-transparent border-green-500 text-green-500 hover:border-green-700 hover:text-green-700
                            border-4 w-full py-2 text-2xl font-semibold cursor-pointer"
            >
              НАЧАТЬ ИГРУ
            </button>
            <button
              style={{
                borderRadius: "16px",
              }}
              disabled
              className="bg-transparent border-orangeColor text-orangeColor border-4 w-full py-2 text-2xl font-semibold"
            >
              ПОДКЛЮЧЕНО {connectCount}
            </button>
          </div>
        )}
      </div>
    </WaitingBG>
  );
}

export default WaitingForm;
