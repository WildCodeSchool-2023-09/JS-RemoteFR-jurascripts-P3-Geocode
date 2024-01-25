import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../css/Home.css";
import logo from "../assets/logo.png";
import born from "../assets/born.png";
import imgProfil from "../assets/img-profil.png";
import Nav from "../components/Nav";

function Home() {
  const { token, auth } = useContext(AuthContext);
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
          <p className={token ? "nickname_home" : "none_home"}>
            {auth.nickename};
          </p>
        </div>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
