import React, {useState} from 'react';
import bg from "../../../../assets/images/BG/Waiting.png";
import WhiteForm from "../../../../components/WhiteForm/WhiteForm";
import Button from "../../../../ui/Button";
import WaitingBG from "../WaitingBG";
import {useDispatch, useSelector} from "react-redux";
import WaitingService from "../../services/WaitingServices";
import {setIdGame} from "../../../Game/store/GameStore";
import hubConnection from "../../../../http/gameHub";
import {useNavigate} from "react-router-dom";

const WaitingFormUser = () => {
    const userId = useSelector((state) => state.user.id);
    const userOffName = useSelector((state) => state.user.offName);
    const idGame = useSelector((state) => state.game.idGame);

    const navigate = useNavigate(null);
    const dispatch = useDispatch();

    const [isEmpty, setIsEmpty] = useState(true);
    const [inputGameId, setInputGameId] = useState();

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
        setInputGameId(e.target.value);
    };

    return (
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
                        className="border-b-2 border-grayColor bg-transparent block
                        p-3 placeholder:text-lightGrayColor text-[25px]"
                        placeholder="№ КОМНАТЫ"
                    />
                    <div
                        className="button-container p-1 border-2 border-grayColor
                        rounded-br-[50px] rounded-tl-[50px] w-full">
                        <Button
                            onClick={handleConnectGame}
                            className="bg-orangeColor font-[400] text-[1rem] text-white w-full
                            h-[60px] border-0 hover:bg-orange-500 transition-colors"
                        >
                            ПРИСОЕДИНИТЬСЯ
                        </Button>
                    </div>
                </div>
            </WhiteForm>
        </WaitingBG>
    );
};

export default WaitingFormUser;