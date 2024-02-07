import { useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "../css/Home.css";
import logo from "../assets/logo.webp";
import born from "../assets/born.webp";
import imgProfil from "../assets/img-profil.webp";
import Nav from "../components/Nav";

function Home() {
  const auth = useLoaderData();
  const { token } = useContext(AuthContext);

  return (
    <div className="container">
      <header className="head">
        <img className="logo_home" src={logo} alt="logo de GeoCode" />
        <div className="container_user_home">
          <img
            className="user_home"
            src={!token ? born : imgProfil}
            alt="logo de l'utilisateur"
          />
          {token && auth && <p className="nickname_home"> {auth?.nickname}</p>}
        </div>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <hr className="space_home" />
    </div>
  );
}

export default Home;
