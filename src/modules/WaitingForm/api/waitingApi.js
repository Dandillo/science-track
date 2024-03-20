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
const GetUsers = async (pageNum, pageSize) => {
  try {
    const { data, headers } = await $api.get("/Import/GetUsers", {
      params: {
        pageNum,
        pageSize,
      },
    });
    console.log(JSON.stringify(data));
    return { data, headers };
  } catch (error) {
    throw error.response.data;
  }
};
const ImportUsers = async (file) => {
  try {
    let formData = new FormData();
    formData.append("csv", file);
    const { data } = await $api.post("/Import/ImportUsers", formData);
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const waitingApi = {
  GetPendingGames,
  GetArchivedGames,
  GetActiveGames,
  GetUsers,
  ImportUsers,
};
