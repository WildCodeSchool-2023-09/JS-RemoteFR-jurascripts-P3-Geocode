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
          <Link to="/page/presentation" className="navbar_link link_accueil">
            Accueil
          </Link>
        </li>
        <li className="navbar_item slide_in_down_2">
          <Link to="/page/connexion" className="navbar_link link_profil">
            Profil
          </Link>
        </li>
        <li className="navbar_item slide_in_down_3">
          <Link to="/page/carte" className="navbar_link link_carte">
            Carte
          </Link>
        </li>
        <li className="navbar_item slide_in_down_4">
          <Link
            to="/page/informations"
            className="navbar_link link_information"
          >
            Informations
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
