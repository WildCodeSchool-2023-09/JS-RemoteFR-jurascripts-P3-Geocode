import "../css/Login.css";

function Login() {
  return (
    <section className="login">
      <form action="submit">
        <input
          className="user_login"
          type="email"
          placeholder="name@exemple.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <input
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
