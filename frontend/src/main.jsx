import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Presentation from "./pages/Presentation";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Connect from "./pages/Connect";
import Informations from "./pages/Informations";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";

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
        path: "/page/informations",
        element: <Informations />,
      },
      {
        path: "/page/inscription",
        element: <Register />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
