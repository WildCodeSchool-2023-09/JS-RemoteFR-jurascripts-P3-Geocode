import { Link } from "react-router-dom";
import "../css/Register.css";

function Register() {
  return (
    <section className="register">
      <section className="contenair_register">
        <h2 className="h2_register">Inscription</h2>
        <form className="form_register" action="submit" method="post">
          <label className="label_register">
            Pseudo:
            <input
              className="input_register"
              type="text"
              name="nickname"
              id="nickname"
            />
          </label>
          <label className="label_register">
            Email:
            <input
              className="input_register"
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label className="label_register">
            Mot de Passe:
            <input
              className="input_register"
              type="password"
              name="password"
              id="password"
            />
          </label>
          <label className="label_register">
            Confirmation du Mot de Passe:
            <input
              className="input_register"
              type="password"
              name="c_password"
              id="c_password"
            />
          </label>
          <label className="checkbox_register">
            <input type="checkbox" name="g_requirement" id="g_requirement" />
            <Link className="link-cg-register" to="/page/condition-login">
              Accepter les conditions générales.
            </Link>
          </label>
          <button className="btn_register" type="submit">
            Valider
          </button>
        </form>
      </section>
    </section>
  );
}

export default Register;
