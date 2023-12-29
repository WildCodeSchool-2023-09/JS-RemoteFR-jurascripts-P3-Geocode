import { Link } from "react-router-dom";
import Login from "../components/Login";
import "../css/Connect.css";

function Connect() {
  return (
    <section className="connect">
      <section className="contenair_connect">
        <h2 className="h2_connect">Se Connecter</h2>
        <p className="p_connect">
          N&apos;oubliez pas de confirmer votre adresse mail si ce n&apos;est
          pas déjà fait .
        </p>
        <p className="p_connect">
          Si vous avez des questions, vous pouvez nous contacter a tout moment
          ici.
        </p>
        <span className="span_connect"> </span>
        <Login />
        <span className="span_connect"> </span>
        <p className="p_connect">
          Vous pouvez profiter pleinement de nos services en vous inscrivant.
        </p>
        <section className="pw_sign_connect">
          <p className="p_pw_connect">Mot de passe oublié ?</p>
          <Link className="p_sign_connect" to="/">
            Vous inscrire ici.
          </Link>
        </section>
      </section>
    </section>
  );
}

export default Connect;
