import "./css/App.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.webp";
import terminal from "./assets/born.webp";

function App() {
  return (
    <div className="App">
      <img className="logo_app" src={logo} alt="logo de GéoCode" />
      <Link className="btn_app" to="/page/presentation">
        En Route
      </Link>
      <img
        className="terminal_app"
        src={terminal}
        alt="Borne de rechargement"
      />
    </div>
  );
}

export default App;
