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
          <a href="/" className="navbar_link link_accueil">
            Accueil
          </a>
        </li>
        <li className="navbar_item slide_in_down_2">
          <a href="/" className="navbar_link link_profil">
            Profil
          </a>
        </li>
        <li className="navbar_item slide_in_down_3">
          <a href="/home/card" className="navbar_link link_carte">
            Carte
          </a>
        </li>
        <li className="navbar_item slide_in_down_4">
          <a href="/" className="navbar_link link_information">
            Information
          </a>
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
