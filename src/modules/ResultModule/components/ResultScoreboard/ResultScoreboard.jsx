import React, {useState, useEffect} from "react";
import star from "../../../../assets/images/Star.png";
import ScoreRow from "../ScoreRow/ScoreRow";
import {gameApi} from "../../../Game/api/gameApi";
import {useNavigate, useNavigation, useParams} from "react-router-dom";
import RoundedContainer from "../../../../components/RoundedContainer/RoundedContainer";
import "../ResultAdaptive.scss";
import Button from "../../../../ui/Button";
import AuthServices from "../../services/AuthServices";

function ResultScoreboard() {
    const [scoreTableData, setScoreTableData] = useState([]);
    const {gameId} = useParams();
    const navigator = useNavigate();
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        setIsReady(false);
        gameApi.GetScoreTable(gameId).then((scoreTable) => {
            setScoreTableData(scoreTable.data.$values);
            setIsReady(true);
        });
    }, []);
    const handleStatShow = () => {
        // Handle click for "My Statistics" button
        console.log("My Statistics button clicked");
        navigator(`/results/${gameId}/stat-show`);
    };
    return (
        scoreTableData && (
            <RoundedContainer
                extraClasses="rounded-[80px] items-center bg-gray-900 gap-[20px] justify-between mb-10 pb-10">
                <div className="items-center flex flex-col">
                    <div className="flex h-[100px] stars-ico mt-[10px]">
                        <img
                            src={star}
                            alt=""
                            className="block scale-[70%] rotate-[-10deg]"
                        />
                        <img src={star} alt="" className="block"/>
                        <img
                            src={star}
                            alt=""
                            className="block scale-[70%] rotate-[10deg]"
                        />
                    </div>
                    <p className="bg-orange-500 bg-clip-text text-transparent text-[70px] text-result">
                        РЕЗУЛЬТАТЫ
                    </p>
                    <div className="grid grid-cols-results gap-y-3 text-center">
                        <ScoreRow
                            place={"Место"}
                            name={"Имя"}
                            social={"Соц. статус"}
                            finance={"Финансы"}
                            administrative={"Адм. ресурс"}
                        />
                        {scoreTableData.map((row, place) => (
                            <ScoreRow
                                key={row.user}
                                place={place + 1}
                                name={row.officialName}
                                social={row.socialStatus}
                                finance={row.financeStatus}
                                administrative={row.administrativeStatus}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex justify-between gap-10">
                    <a
                        onClick={handleStatShow}
                        className="z-10	cursor-pointer uppercase border-orangeStroke border px-[40px]
                        py-[15px] rounded-[20px] text-orangeTextResult text-[30px]"
                    >
                        моя статистика
                    </a>
                    <button className="z-10 cursor-pointer uppercase border-orangeStroke
                    border px-[40px] py-[15px] rounded-[20px] text-orangeTextResult text-[30px]"
                            onClick={() => {
                                window.location.href = window.origin
                                AuthServices.logout()
                                    .then(resp => {
                                        console.log('user logout', resp.data)
                                    })
                            }}
                    >
                        выход
                    </button>
                </div>
            </RoundedContainer>
        )
    );
}

export default ResultScoreboard;
