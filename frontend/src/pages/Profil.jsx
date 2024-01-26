import { Link, useLoaderData } from "react-router-dom";

import impPro from "../assets/img-profil.webp";
import admin from "../assets/admin.webp";
import "../css/Profil.css";

function Profil() {
  const auth = useLoaderData();

  return (
    <section className="container_profil">
      <div className="place_profil">
        <div className="place_logo_profil">
          <img className="logo_profil" src={impPro} alt="profil" />
          {auth?.is_admin === 1 && (
            <Link to="/admin">
              <img className="logo_profil" src={admin} alt="" />
            </Link>
          )}
        </div>
        <p className="pseudo_profil">{auth?.nickname}</p>
      </div>

      {auth?.lastname ? (
        <p className="info_users">{auth?.lastname}</p>
      ) : (
        <p className="info_users empty_user">Veuillez ajouter un nom</p>
      )}
      {auth.firstname ? (
        <p className="info_users">{auth?.firstname}</p>
      ) : (
        <p className="info_users empty_user">Veuillez ajouter un prénom</p>
      )}

      <p className="info_users">{auth?.email}</p>

      <div className="update_profil">
        <bouton className="btn_profil">Modifier le Profil</bouton>
        <bouton className="btn_profil">Modifier le Mail</bouton>
      </div>
    </section>
  );
}

export default Profil;
