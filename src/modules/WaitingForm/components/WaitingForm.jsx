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

function WaitingForm() {
  // useAuthRedirect();
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
    WaitingService.addUser(inputGameId, userId)
      .then(() => {
        dispatch(setIdGame(inputGameId));
        hubConnection.invoke("RemoveFromGroup", String(inputGameId));
        hubConnection.invoke("AddToGroup", String(inputGameId));

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
    <WaitingBG>
      <WhiteForm title="Ты в комнате №23" body="Игра скоро начнётся, ты уже ознакомился с правилами? Самое время сделать это сейчас!"/>
    </WaitingBG>
  );
}

export default WaitingForm;
