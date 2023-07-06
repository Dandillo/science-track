import $api from "../../../http/api";
const getSolutions = async (stageId) => {
  try {
    const { data } = await $api.get("/Game/GetSolutions", {
      params: {
        stage: stageId,
      },
    });
    return { data };
  } catch (error) {
    throw error.response.data;
  }
};
const setPlayerChoose = async (roundId, userId, localSolutionId) => {
  console.log(roundId, userId, localSolutionId);
  try {
    $api.post("/Game/PlayerChoose", null, {
      params: {
        roundId: roundId,
        userId: userId,
        localSolutionId: localSolutionId,
      },
    });
  } catch (error) {
    throw error.response.data;
  }
};
const GetPlayerRoundStatusEvents = async (roundId, userId) => {
  try {
    const { data } = await $api.get("/Game/GetPlayerRoundStatusEvents", {
      params: {
        roundId: roundId,
        userId: userId,
      },
    });
    return { data };
  } catch (error) {
    throw error.response.data;
  }
};
const GetScoreTable = async (gameId) => {
  try {
    const { data } = await $api.get("/Game/GetScoreTable", {
      params: {
        gameId: gameId,
      },
    });
    return { data };
  } catch (error) {
    throw error.response.data;
  }
};

export const gameApi = {
  getSolutions,
  GetPlayerRoundStatusEvents,
  setPlayerChoose,
  GetScoreTable,
};
