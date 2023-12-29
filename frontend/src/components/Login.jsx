function Login() {
  return (
    <section className="login">
      <form action="submit">
        <input className="user_login" type="text" />
        <input className="pw_login" type="password" />
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
            Connection
          </button>
        </section>
      </form>
    </section>
  );
}

export default Login;
