import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "macro-css";

import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Basket from "./components/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "basket",
    element: <Basket />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
