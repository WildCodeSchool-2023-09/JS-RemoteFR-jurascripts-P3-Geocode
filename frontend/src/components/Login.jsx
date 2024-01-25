import { useRef, useContext } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthContext";

function Login({ auth }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setToken, token } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const login = await response.json();
        setToken(login.token);
        setTimeout(() => {
          navigate("/page/presentation");
        }, 3000);
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className="login">
      {token && (
        <div className="login_success">
          <p className="p_login_success">
            Bonjour {auth?.nickname} Vous êtes maintenant connecté(e) ! Vous
            allez être redirigé(e) vers la page d'accueil.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          id="email"
          className="user_login"
          type="email"
          placeholder="name@exemple.com"
        />
        <input
          ref={passwordRef}
          id="password"
          className="pw_login"
          type="password"
          placeholder="mot de passe"
        />
        <section className="memori_btn_login">
          <div className="memori_login">
            <input
              className="checkbox_login"
              type="checkbox"
              name="momori"
              id="memori"
            />
            <p className="p_login">Mémoriser</p>
          </div>
          <button className="btn_login" type="submit">
            Connexion
          </button>
        </section>
      </form>
    </section>
  );
}
Login.propTypes = {
  auth: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
  }).isRequired,
};
export default Login;
