import React, {useState} from 'react';
import bgAdmin from "../../../../assets/images/BG/WaitingAdmin.jpg";
import RoundedContainer from "../../../../components/RoundedContainer/RoundedContainer";
import GameLogo from "../../../Game/components/Game/GameLogo";
import Divider from "../../../../components/Divider/Divider";
import TabSwitcher from "../TabSwitcher";
import WaitingBG from "../WaitingBG";
import {useDispatch, useSelector} from "react-redux";
import WaitingService from "../../services/WaitingServices";
import {setIdGame} from "../../../Game/store/GameStore";
import hubConnection from "../../../../http/gameHub";
import {useNavigate} from "react-router-dom";

const WaitingFormAdmin = () => {
    const userId = useSelector((state) => state.user.id);

    const dispatch = useDispatch();
    const navigate = useNavigate(null);

    const [inputGameId, setInputGameId] = useState('');

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

    return (
        <WaitingBG bg={bgAdmin} className="flex justify-center w-full ">
            <RoundedContainer extraClasses="rounded-b-[50px] p-[30px] h-full bg-white/[.75]">
                <div className="flex flex-col">
                    <GameLogo admin/>

                    <Divider className="divider mt-[41px] rounded-xl" width={"162px"}/>
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
    );
};

export default WaitingFormAdmin;