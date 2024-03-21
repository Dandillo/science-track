import React, {useEffect, useState} from "react";
import TabSwitcher from "../TabSwitcher";
import Pagination from "../../../../components/Pagination/Pagination";
import {waitingApi} from "../../api/waitingApi";
import binIcon from "../../../../assets/svg/bin.svg";
import refreshIcon from "../../../../assets/svg/refresh.svg";
import createIcon from "../../../../assets/svg/create.svg";
import searchIcon from "../../../../assets/svg/search.svg";
import uploadIcon from "../../../../assets/svg/upload.svg";
import "../TabSwitcher.scss";
import {toast} from "react-toastify";
import "../customToast.scss";
import successIcon from "../success.png";
import {adminApi} from "../../api/adminApi";

function PlayersList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [players, setPlayers] = useState([]);

    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        waitingApi.GetUsers(currentPage, 10).then((player) => {
            setPlayers(player.data);
            setTotalPages(player.headers.totalpages);
            console.log(player.data);
        });
    }, [currentPage]);
    console.log(players);
    useEffect(() => {
    }, [players]);

    const filterPlayers = (list, text) => {
        return list.filter((player) =>
            player.userName.toLowerCase().includes(text.toLowerCase())
        );
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    function handleFileChange(event) {
        const file = event.target.files[0];
        console.log(file);
        if (!file) return;
        waitingApi
            .ImportUsers(file)
            .then(() => toast.success("Пользователи успешно импортированы!"));
    }

    return (
        <div>
            <div className="flex gap-7 flex-wrap">
                <button
                    className={` text-black bg-white header-button  rounded-xl 
          text-[2em] bg-opacity-88 border border-gray-300 flex gap-3 items-center px-2`}
                >
                    <div
                        className={`header-button__num rounded-[10px]  bg-veryLightGrayColor bg-opacity-88 p-2`}
                    >
                        <img className="w-full h-full" src={createIcon} alt=""/>{" "}
                    </div>
                    Добавить
                </button>
                <label
                    className={`cursor-pointer text-black bg-white header-button rounded-xl 
          text-[2em] bg-opacity-88 border border-gray-300 flex gap-3 items-center px-2`}
                >
                    <div
                        className={`header-button__num rounded-[10px]  bg-veryLightGrayColor bg-opacity-88 p-2`}
                    >
                        <img className="w-full h-full" src={uploadIcon} alt=""/>{" "}
                    </div>
                    Загрузить
                    <input
                        type="file"
                        accept=".csv,.txt"
                        style={{display: "none"}}
                        onChange={handleFileChange}
                    />
                </label>
                <div
                    className={`text-black bg-white header-button  rounded-xl text-[2em] bg-opacity-88 border border-gray-300 flex gap-3 items-center px-2`}
                >
                    <div
                        className={`header-button__num rounded-[10px]  bg-veryLightGrayColor bg-opacity-88 p-2`}
                    >
                        <img className="w-full h-full" src={searchIcon} alt=""/>{" "}
                    </div>
                    <div className="flex items-center flex-grow">
                        <input
                            type="text"
                            placeholder="Введите логин..."
                            className="border-none outline-none bg-transparent flex-grow w-40"
                            style={{fontSize: "20px"}}
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
            <div
                className=" drop-shadow-xl h-full bg-lightGrayTransparentColor w-full rounded-[20px] mt-[20px] flex flex-col justify-between ">
                <div className="grid grid-cols-6 justify-center justify-items-center items-center pt-[20px]">
                    <div className="text-lightGrayColor">Id</div>
                    <div className="text-lightGrayColor">Логин</div>
                    <div className="text-lightGrayColor">Полное имя</div>
                    <div className="text-lightGrayColor">Роль</div>
                    {/*<div className="text-lightGrayColor">Сбросить пароль</div>*/}
                    <div className="text-lightGrayColor">Удалить игрока</div>
                </div>
                {filterPlayers(players, searchText).map((player) => (
                    <div
                        key={player.$id}
                        className="grid grid-cols-6 justify-center justify-items-center items-center hover:bg-orangeLighterColor  rounded-md cursor-pointer"
                    >
                        <div
                            key={player.$id}
                            className="bg-orange-300 rounded-full w-[40px] h-[40px] text-center text-[20px] "
                        >
                            <div className="flex justify-center items-center h-full ">
                                {player.userId}
                            </div>
                        </div>
                        <div className="text-[20px]">{player.userName}</div>
                        <div className="text-[20px]">{player.officialName}</div>
                        <div className="text-[20px]">{player.role}</div>
                        {/*<div className="text-[20px]">*/}
                        {/*  <img*/}
                        {/*    src={refreshIcon}*/}
                        {/*    alt=""*/}
                        {/*    id={player.id}*/}
                        {/*    // onClick={handleConnectGame}*/}
                        {/*    className="block cursor-pointer hover:bg-orange-300 hover:rounded-full p-2"*/}
                        {/*  />*/}
                        {/*</div>*/}
                        <div className="text-[20px]" onClick={() => {
                            setPlayers(prevState =>
                                prevState.map(pl =>
                                    pl.userName !== player.userName)
                            )
                            adminApi.RemoveUser(player.userName)
                                .then(resp => {
                                    console.log('user remove', resp.data)
                                })
                        }}>
                            <img
                                src={binIcon}
                                alt=""
                                // id={game.id}
                                // onClick={handleConnectGame}
                                className="block cursor-pointer hover:bg-orange-300 hover:rounded-full p-2"
                            />
                        </div>
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

export default PlayersList;
