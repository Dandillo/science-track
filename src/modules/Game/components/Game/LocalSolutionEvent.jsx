import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLastLocalEventRef } from "../../store/GameStore";
import { gameApi } from "../../api/gameApi";
import './GameAdaptive.scss';

function LocalSolutionEvent({ solution, setIsSent, currentRound }) {
  const localEventRef = useRef(null);
  const lastLocalSolutionId = useSelector(
    (state) => state.game.lastLocalEventRef
  );
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  useEffect(() => {
    localEventRef.current.style.borderColor = "rgb(156 163 175)";
    localEventRef.current.style.color = "#4b5563";
    return () => {
      dispatch(setLastLocalEventRef(null));
    };
  }, [currentRound]);

  const resetLocalSolutionEvent = () => {
    if (lastLocalSolutionId) {
      const lastLocalSolution = document.getElementById(lastLocalSolutionId);
      if (lastLocalSolution) {
        lastLocalSolution.style.borderColor = "rgb(156 163 175)";
        lastLocalSolution.style.color = "#4b5563";
      }
    }
    setIsSent(false);
  }

  const handleSolutionClick = () => {
    resetLocalSolutionEvent();
    if (lastLocalSolutionId === localEventRef.current.id) {
      localEventRef.current.style.borderColor = "#68D391";
      localEventRef.current.style.color = "#68D391";
      setIsSent(true);
      gameApi.setPlayerChoose(currentRound.id, userId, solution.id);
      return;
    }
    localEventRef.current.style.borderColor = "#fb7a30";
    localEventRef.current.style.color = "#fb7a30";
    dispatch(setLastLocalEventRef(localEventRef.current.id));
  };

  return (
    <div
      onClick={handleSolutionClick}
      className="border-solid border-[5px] border-gray-400 p-[0.7rem] hover:cursor-pointer mb-2
      solution__card-block"
      ref={localEventRef}
      id={solution.id}
    >
      {solution.description}
    </div>
  );
}

export default LocalSolutionEvent;
