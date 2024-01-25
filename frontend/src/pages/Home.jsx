import { Link, Outlet, useLoaderData } from "react-router-dom";
import "../css/Home.css";
import { useContext } from "react";
import logo from "../assets/logo.png";
import born from "../assets/born.png";
import imgProfil from "../assets/img-profil.png";
import Nav from "../components/Nav";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const auth = useLoaderData();
  const { token } = useContext(AuthContext);
  return (
    <div className="container">
      <header className="head">
        <img className="logo_home" src={logo} alt="logo de GeoCode" />
        <Link
          className="user_home"
          to={!token ? "/page/connexion" : "/page/profil"}
        >
          <img
            className="user_home"
            src={!token ? born : imgProfil}
            alt="logo de l'utilisateur"
          />
          <p className="user_p_logo">
            {!token ? "Se Connecter" : auth?.nickname}
          </p>
        </Link>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
