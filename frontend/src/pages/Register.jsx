import { Link, useNavigate } from "react-router-dom";
import "../css/Register.css";
import { useRef, useState } from "react";

function Register() {
  const emailRef = useRef();
  const nicknameRef = useRef();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nickname: nicknameRef.current.value,
            email: emailRef.current.value,
            password,
          }),
        }
      );

      if (response.status === 201) {
        navigate("page/connexion");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="register">
      <section className="contenair_register">
        <h2 className="h2_register">Inscription</h2>
        <form className="form_register" onSubmit={handleSubmit}>
          <label className="label_register">
            Pseudo:
            <input
              ref={nicknameRef}
              className="input_register"
              type="text"
              name="nickname"
              id="nickname"
            />
          </label>
          <label className="label_register">
            Email:
            <input
              ref={emailRef}
              className="input_register"
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label className="label_register">
            Mot de Passe:
            <input
              value={password}
              onChange={handlePasswordChange}
              className="input_register"
              type="password"
              name="password"
              id="password"
            />
          </label>
          <label className="label_register">
            Confirmation du Mot de Passe:
            <input
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
