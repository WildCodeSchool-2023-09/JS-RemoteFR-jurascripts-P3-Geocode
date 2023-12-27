import "../css/Presentation.css";
import tree from "../assets/tree.png";
import car from "../assets/car.png";

function Presentation() {
  return (
    <section className="presentation">
      <h2 className="h2_presentation">Présentation de la Page</h2>
      <p className="p_presentation">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        obcaecati possimus, non tempora iure quae et omnis incidunt suscipit
        voluptate? Tempora voluptate eaque voluptatem ex doloribus vero ut, iure
        quaerat!
      </p>
      <img className="tree_presentation" src={tree} alt="Arbre de vie" />
      <p className="p_presentation">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse eaque
        placeat dolorem possimus deleniti fugit temporibus ea odio unde
        molestiae laborum officiis aspernatur sint itaque saepe laboriosam
      </p>
      <img className="car_presentation" src={car} alt="Voiture électrique" />
    </section>
  );
}

export default Presentation;
