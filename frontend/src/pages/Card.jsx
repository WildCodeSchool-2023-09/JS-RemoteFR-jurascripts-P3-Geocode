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
      <section className="section_btn_card">
        <button type="button" className="vehicule_card btn_card">
          Véhicule
        </button>
      </section>
      <Map />
    </div>
  );
}

export default Card;
