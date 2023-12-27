import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Presentation from "./pages/Presentation";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Card from "./pages/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/*",
    element: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home/presentation",
        element: <Presentation />,
      },
      {
        path: "/home/card",
        element: <Card />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
