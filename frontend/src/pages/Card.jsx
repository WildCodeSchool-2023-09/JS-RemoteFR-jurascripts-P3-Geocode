import Map from "../components/Map";
import "../css/Card.css";

function Card() {
  return (
    <div className="container_card">
      <form className="form_card">
        <input
          className="search_card"
          type="text"
          placeholder="Vôtre ville ?"
          name="valider"
        />
      </form>
      <Map />
    </div>
  );
}

export default Card;
