import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Login from "../components/Login";
import "../css/Connect.css";
import Nav from "../components/Nav";
import { AuthContext } from "../contexts/AuthContext";
import logo from "../assets/logo.png";
import born from "../assets/born.png";
import imgProfil from "../assets/img-profil.png";

function Connect() {
  const { token } = useContext(AuthContext);
  const auth = useLoaderData();

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
          {!token && !auth ? <p> </p> : <p> {auth?.nickname}</p>}
        </div>
        <Nav />
      </header>
      <main>
        <section className="connect">
          <section className="contenair_connect">
            <h2 className="h2_connect">Se Connecter</h2>
            <p className="p_connect">
              N&apos;oubliez pas de confirmer votre adresse mail si ce
              n&apos;est pas déjà fait.
            </p>
            <p className="p_connect">
              Si vous avez des questions, vous pouvez nous contacter à tout
              moment ici.
            </p>
            <span className="span_connect"> </span>
            <Login auth={auth} />
            <span className="span_connect"> </span>
            <p className="p_connect">
              Vous pouvez profiter pleinement de nos services en vous
              inscrivant.
            </p>
            <section className="pw_sign_connect">
              <p className="p_pw_connect">Mot de passe oublié ?</p>
              <Link className="p_sign_connect" to="/page/inscription">
                Vous inscrire ici
              </Link>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Connect;
