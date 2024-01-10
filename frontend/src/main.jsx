import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Presentation from "./pages/Presentation";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Connect from "./pages/Connect";
import Information from "./pages/Information";

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
    path: "/page",
    element: <Home />,
    children: [
      {
        path: "/page/presentation",
        element: <Presentation />,
      },
      {
        path: "/page/carte",
        element: <Card />,
      },
      {
        path: "/page/connexion",
        element: <Connect />,
      },
      {
        path: "/home/information",
        element: <Information />,
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
