import { Link } from "react-router-dom";
import "../css/Nav.css";
import { useState } from "react";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show_nav" : "hide_nav"}`}>
      <ul className="navbar_links">
        <li className="navbar_item slide_in_down_1">
          <Link to="/home/presentation" className="navbar_link link_accueil">
            Accueil
          </Link>
        </li>
        <li className="navbar_item slide_in_down_2">
          <Link to="/home/connect" className="navbar_link link_profil">
            Profil
          </Link>
        </li>
        <li className="navbar_item slide_in_down_3">
          <Link to="/home/card" className="navbar_link link_carte">
            Carte
          </Link>
        </li>
        <li className="navbar_item slide_in_down_4">
          <Link to="/" className="navbar_link link_information">
            Information
          </Link>
        </li>
      </ul>
      <button
        className="navbar_burger"
        type="button"
        onClick={handleShowLinks}
        aria-label="Toggle Navigation"
      >
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Nav;
