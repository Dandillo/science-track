import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginFormPage from "./pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginFormPage />,
    // children: [
    //   {
    //     index: true,
    //     element: <LoginFormPage />,
    //   },
    // ],
    // children: [
    //   {
    //     path: "game",
    //     element: <div>Game</div>,
    //     // loader: teamLoader,
    //   },
    // ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
