import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import App from "./App";
import Presentation from "./pages/Presentation";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Connect from "./pages/Connect";
import Informations from "./pages/Informations";
import Register from "./pages/Register";
import Profil from "./pages/Profil";
import { AuthProvider } from "./contexts/AuthContext";
import { BornProvider } from "./contexts/BornContext";

const auth = async () => {
  const token = sessionStorage.getItem("Token");
  if (!token) {
    return null;
  }
  const decodedToken = jwtDecode(token);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/${decodedToken.sub}`,
      {
        method: "get",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

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
    path: "/admin",
    element: <Admin />,
    loader: auth,
  },
  {
    path: "/page/connexion",
    element: <Connect />,
    loader: auth,
  },
  {
    path: "/page",
    element: <Home />,
    loader: auth,
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
        path: "/page/informations",
        element: <Informations />,
      },
      {
        path: "/page/inscription",
        element: <Register />,
      },
      {
        path: "/page/profil",
        element: <Profil />,
        loader: auth,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BornProvider>
        <RouterProvider router={router} />
      </BornProvider>
    </AuthProvider>
  </React.StrictMode>
);
