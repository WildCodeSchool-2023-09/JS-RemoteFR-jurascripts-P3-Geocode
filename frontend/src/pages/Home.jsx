import { Outlet } from "react-router-dom";
import "../css/Home.css";
import logo from "../assets/logo.png";
import born from "../assets/born.png";
import Nav from "../components/Nav";

function Home() {
  return (
    <div className="container">
      <header className="head">
        <img className="logo_home" src={logo} alt="logo de GeoCode" />
        <img className="user_home" src={born} alt="logo de l'utilisateur" />
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
