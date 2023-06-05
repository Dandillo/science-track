import * as signalR from "@microsoft/signalr";
import { API_URL } from "./api";
const hubConnection = new signalR.HubConnectionBuilder()
  .configureLogging(signalR.LogLevel.Critical)

  .withUrl(`${API_URL}/GameHub`, {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets,
  })
  .build();
async function start() {
  try {
    await hubConnection.start();
    console.log("SignalR Connected.");
  } catch (err) {
    console.log(err);
    setTimeout(start, 5000);
  }
}

start();
hubConnection.onclose(async () => {
  await start();
});

export default hubConnection;
