import React, { useState } from "react";
import WaitingBG from "./WaitingBG";
import { useDispatch, useSelector } from "react-redux";
import { useAuthRedirect } from "../../../hooks/useAuthRedirect";
import { useNavigate } from "react-router-dom";
// import { setIdGame, setGlobalEvent, setLocalEvent, setLocalSolution } from '../../Game/store/GameStore';
import { setIdGame } from "../../Game/store/GameStore";
import WaitingService from "../services/WaitingServices";
import Input from "../../../ui/Input";
import hubConnection from "../../../http/gameHub";
import WhiteForm from "../../../components/WhiteForm/WhiteForm";
import bg from "../../../assets/images/BG/Waiting.png";
import bgAdmin from "../../../assets/images/BG/WaitingAdmin.jpg";
import RoundedContainer from "../../../components/RoundedContainer/RoundedContainer";
import logo from "../../../assets/images/Logo.png";
import GameLogo from "../../Game/components/Game/GameLogo";
import Divider from "../../../components/Divider/Divider";
import TabSwitcher from "./TabSwitcher";
import Button from "../../../ui/Button";
import './WaitingForm.scss';

function WaitingForm() {
  // useAuthRedirect();
  const role = useSelector((state) => state.user.role);
  const userId = useSelector((state) => state.user.id);
  const userOffName = useSelector((state) => state.user.offName);
  const idGame = useSelector((state) => state.game.idGame);
  const [inputGameId, setInputGameId] = useState();
  const [isEmpty, setIsEmpty] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate(null);
  const handleCreateGame = (e) => {
    e.preventDefault();
    WaitingService.createGame()
      .then((response) => {
        const gameID = response.data.id;
        alert(`Айди созданной игры: ${gameID}`);
        dispatch(setIdGame(gameID));
        WaitingService.addUser(gameID, userId)
          .then(() => {
            hubConnection.invoke("RemoveFromGroup", String(gameID));
            hubConnection.invoke("AddToGroup", String(gameID));
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
    const gameIdPlayer = e.target.id ? e.target.id : inputGameId;
    WaitingService.addUser(gameIdPlayer, userId)
      .then(() => {
        dispatch(setIdGame(gameIdPlayer));
        hubConnection.invoke("RemoveFromGroup", String(gameIdPlayer));
        hubConnection.invoke("AddToGroup", String(gameIdPlayer));

        navigate("/game");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleInput = (e) => {
    setIsEmpty(e.target.value.length === 0);
    console.log(isEmpty);
    console.log(e.target.value);
    setInputGameId(e.target.value);
  };

  return (
    <>
      {role === "admin" ? (
        <WaitingBG bg={bgAdmin} className="flex justify-center w-full ">
          <RoundedContainer extraClasses="rounded-b-[50px] bg-opacity-[0.9] p-[30px] h-full bg-white ">
            <div className="flex flex-col">
              <GameLogo admin />

              <Divider className="divider mt-[41px]" width={"162px"} />
              <p className="p-divider text-darkGrayColor pt-5 text-[2.5em]">Комнаты</p>

              <TabSwitcher
                setInputGameId={setInputGameId}
                handleConnectGame={handleConnectGame}
                userId={userId}
                handleCreateGame={handleCreateGame}
              />
            </div>
          </RoundedContainer>
        </WaitingBG>
      ) : (
        <WaitingBG bg={bg}>
          <WhiteForm
            title={`
              Привет, 
              ${userOffName}
             
              `}
            body=" Напиши номер комнаты, к которой нужно подключиться"
          >
            <div className="flex w-full justify-center pt-4">
              <input
                onInput={handleInput}
                type="text"
                className="border-b-2 border-grayColor bg-transparent block p-3 placeholder:text-lightGrayColor text-[25px]"
                placeholder="№ КОМНАТЫ"
              />
              <div className="button-container p-1 border-2 border-grayColor rounded-br-[50px] rounded-tl-[50px] w-full">
                <Button
                  onClick={handleConnectGame}
                  className={
                    "bg-orangeColor font-[400] text-[1rem] text-white w-full h-[60px] border-0 hover:bg-orange-500 transition-colors"
                  }
                >
                  ПРИСОЕДИНИТЬСЯ
                </Button>
              </div>
            </div>
          </WhiteForm>
        </WaitingBG>
      )}
    </>
  );
}

export default WaitingForm;
