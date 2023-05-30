import React, { useState, useEffect } from "react";
import EventContainer from "../../../../components/EventContainer/EventContainer";
import Pagination from "../../../../components/Pagination/Pagination";
import { gameApi } from "../../api/gameApi";

function SolutionsContainer() {
  const [data, setData] = useState({});
  const [ready, setReady] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setReady(false);
    gameApi
      .getSolutions(currentPage, 5)
      .then((solutions) => {
        setData(solutions.data.$values);
        setTotalPages(solutions.headers.totalpages);
        setReady(true);
      })
      .catch((err) => console.error(err));
  }, [currentPage]);
  return (
    ready && (
      <EventContainer title={"Выберите одно решение"}>
        <div className="flex flex-col gap-2 text-gray-600 justify-between">
          {data.map((solution, i) => (
            <div
              key={i}
              className="border-solid border-[5px] border-gray-400 p-[0.7rem] hover:text-orangeColor hover:border-orangeColor hover:cursor-pointer	"
            >
              {solution.description}
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </EventContainer>
    )
  );
}

export default SolutionsContainer;
