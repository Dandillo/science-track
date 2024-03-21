import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { registerables, Chart } from "chart.js";
import $api from "../../../../http/api";
import { useSelector } from "react-redux";

const PlayerChart = ({ gameId }) => {
  Chart.register(...registerables);

  const [data, setData] = useState([]);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    $api
      .get(`/Game/GetUserGraph?gameId=${gameId}&userId=${userId}`)
      .then((response) => setData(response.data));
  }, []);
  let roundNumbers = [];
  let datasets = [];
  console.log(data);
  if (data.$values !== undefined) {
    roundNumbers = data.$values.map((item) => item.roundNumber);

    datasets = [
      {
        id: 1,
        label: "Социальный статус",
        data: data.$values.map((item) => item.socialUserChoose),
      },
      {
        id: 2,
        label: "Финансовые накопления",
        data: data.$values.map((item) => item.financeUserChoose),
      },
      {
        id: 3,
        label: "Административный ресурс",
        data: data.$values.map((item) => item.administrativeUserChoose),
      },
    ];
  }

  return (
    <div>
      <Line
        datasetIdKey="id"
        className="z-10"
        width={700}
        height={500}
        data={{
          labels: roundNumbers,
          datasets: datasets,
        }}
      />
    </div>
  );
};

export default PlayerChart;
