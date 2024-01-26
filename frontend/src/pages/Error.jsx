import { Link } from "react-router-dom";
import "../css/Error.css";
import car from "../assets/car.webp";

function Error() {
  return (
    <section className="error">
      <h2 className="h2_error">Erreur 404</h2>
      <p className="p_error">Panne de batterie veuillez recharger!</p>
      <Link className="btn_error" to="/page/presentation">
        Accueil
      </Link>
      <img className="img_error" src={car} alt="Voiture électrique" />
    </section>
  );
}
export default Error;
