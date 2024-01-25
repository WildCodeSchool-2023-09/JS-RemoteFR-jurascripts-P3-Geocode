import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import impPro from "../assets/img-profil.png";
import admin from "../assets/admin.png";
import "../css/Profil.css";

function Profil() {
  const { auth } = useContext(AuthContext);

  return (
    <section className="container_profil">
      <div className="place_profil">
        <p className="pseudo_profil">{auth.nickname}</p>
        <img className="logo_profil" src={impPro} alt="profil" />
      </div>

      {auth.lastname ? (
        <p className="info_users">{auth.lastname}</p>
      ) : (
        <p className="info_users empty_user">Veuillez ajouter un nom</p>
      )}
      {auth.firstname ? (
        <p className="info_users">{auth.firstname}</p>
      ) : (
        <p className="info_users empty_user">Veuillez ajouter un prénom</p>
      )}

      <p className="info_users">{auth.email}</p>

      <div className="update_profil">
        <bouton className="btn_profil">Modifier le Profil</bouton>
        <bouton className="btn_profil">Modifier le Mail</bouton>
      </div>

      {auth.is_admin === 1 && (
        <img className="logo_profil" src={admin} alt="" />
      )}
    </section>
  );
}

export default Profil;
