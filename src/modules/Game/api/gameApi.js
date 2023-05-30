import $api from "../../../http/api";
const getSolutions = async (pageNum, pageSize) => {
  try {
    const { data, headers } = await $api.get("/Game/GetSolutions", {
      params: {
        pageNum: pageNum,
        pageSize: pageSize,
      },
    });
    return { data, headers };
  } catch (error) {
    throw error.response.data;
  }
};

export const gameApi = {
  getSolutions,
};
