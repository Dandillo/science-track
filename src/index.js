import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// pages
import LoginFormPage from "./pages/LoginPage";
import Choose from "./pages/Choose";
import Waiting from "./pages/Waiting/Waiting";
import NotFound from "./pages/NotFound/NotFound";
import Result from "./pages/Result";
import Test from "./pages/Test/Test";
import Game from "./pages/Game";
import Statistics from "./pages/Statistics";
import "react-toastify/dist/ReactToastify.css";

// redux + state manager
import { Provider } from "react-redux";
import userStore from "./modules/LoginForm/store/UserStore";
import gameStore from "./modules/Game/store/GameStore";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { combineReducers } from "redux";
import { ToastContainer } from "react-toastify";
import Landing from "./pages/Landing";

const rootReducer = combineReducers({
  user: userStore,
  game: gameStore,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

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
    path: "/results/:gameId",
    element: <Result />,
  },
  {
    path: "/results/:gameId/stat-show",
    element: <Statistics />,
  },
  {
    path: "/choose",
    element: <Choose />,
  },
  {
    path: '/promo',
    element: <Landing/>
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
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
