import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginFormPage from "./pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Waiting from "./pages/Waiting/Waiting";
import NotFound from "./pages/NotFound/NotFound";
import Result from "./pages/Result";
import Test from "./pages/Test";
import Game from "./pages/Game";
import { Provider } from "react-redux";
import userStore from "./modules/LoginForm/store/UserStore";
import gameStore from "./modules/Game/store/GameStore";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    user: userStore,
    game: gameStore,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginFormPage />,
  },
  {
    path: "/waiting",
    element: <Waiting />,
  },
  {
    path: "/game",
    element: <Game  />,
  },
  {
    path: "/results",
    element: <Result />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
