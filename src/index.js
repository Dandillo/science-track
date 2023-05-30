import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginFormPage from "./pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Waiting from "./pages/Waiting/Waiting";
import NotFound from "./pages/NotFound/NotFound";
import Test from "./pages/Test";
import Game from "./pages/Game";
import { Provider } from 'react-redux'
import userStore from './modules/LoginForm/store/UserStore';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user: userStore,
  },
})

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
    element: <Game />,
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