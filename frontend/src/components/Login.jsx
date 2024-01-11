import { useState, useRef } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useState();
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
        setAuth(login);
        navigate("/page/presentation");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="login">
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          id="email"
          className="user_login"
          type="email"
          placeholder="name@exemple.com"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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

export default Login;
