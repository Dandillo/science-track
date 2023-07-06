import $api from "../../../http/api";
const GetPendingGames = async (pageNum, pageSize) => {
  try {
    const { data, headers } = await $api.get("/archive/GetPendingGames", {
      params: {
        pageNum,
        pageSize,
      },
    });
    return { data, headers };
  } catch (error) {
    throw error.response.data;
  }
};
const GetActiveGames = async (pageNum, pageSize) => {
  try {
    const { data, headers } = await $api.get("/archive/GetActiveGames", {
      params: {
        pageNum,
        pageSize,
      },
    });

    return { data, headers };
  } catch (error) {
    throw error.response.data;
  }
};
const GetArchivedGames = async (pageNum, pageSize) => {
  try {
    const { data, headers } = await $api.get("/archive/GetArchivedGames", {
      params: {
        pageNum,
        pageSize,
      },
    });
    return { data, headers };
  } catch (error) {
    throw error.response.data;
  }
};

export const waitingApi = {
  GetPendingGames,
  GetArchivedGames,
  GetActiveGames,
};
