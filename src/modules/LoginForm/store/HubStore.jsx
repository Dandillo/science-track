// hubSlice.js
import { createSlice } from "@reduxjs/toolkit";
import * as signalR from "@microsoft/signalr";

const hubSlice = createSlice({
  name: "hub",
  initialState: null,
  reducers: {
    setHubConnection: (state, action) => {
      return action.payload;
    },
  },
});

export const { setHubConnection } = hubSlice.actions;
export default hubSlice.reducer;

// // Создайте и экспортируйте функцию для инициализации hubConnection
// export const initHubConnection = () => {
//   return async (dispatch) => {
//     const hubConnection = new signalR.HubConnectionBuilder()
//       .configureLogging(signalR.LogLevel.Critical)
//       .withUrl("http://176.124.192.238/GameHub", {
//         skipNegotiation: true,
//         transport: signalR.HttpTransportType.WebSockets,
//       })
//       .build();

//     try {
//       await hubConnection.start();
//       console.log("SignalR Connected.");
//       dispatch(setHubConnection(hubConnection));
//     } catch (err) {
//       console.log(err);
//       //   setTimeout(() => dispatch(initHubConnection()), 5000);
//     }
//   };
// };
