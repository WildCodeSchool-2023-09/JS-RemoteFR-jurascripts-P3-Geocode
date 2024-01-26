import "../css/Presentation.css";
import tree from "../assets/tree.webp";
import car from "../assets/car.webp";

function Presentation() {
  return (
    <section className="presentation">
      <h2 className="h2_presentation">
        Bienvenue sur GéoCode
        <br />
        le site qui vous permet de réserver une borne électrique !
      </h2>
      <p className="p_presentation">
        Accéder directement aux bornes électriques en France
        <br />
        Réserver une borne ? Vous devez d'abord créer votre profil.
        <br />
        Pourquoi il est créer ? A quoi y sert ? Les conducteurs de véhicules
        électriques, qu&apos;ils soient des particuliers ou des professionnels,
        peuvent avoir besoin de recharger ponctuellement ou régulièrement leur
        véhicule électrique en dehors de leur domicile ou de leur entreprise.
      </p>
      <img className="tree_presentation" src={tree} alt="Arbre de vie" />
      <article className="p_presentation">
        <p>
          Les véhicules électriques attirent de plus en plus de Français. Les
          chiffres relevés en septembre 2022 par Avere-France, font état de 995
          596 voitures électriques et hybrides en circulation sur
          l&apos;ensemble du territoire national.
        </p>
        <p>
          Le développement de ce marché est en partie porté par les aides à
          l&apos;achat proposées par l&apos;État. Le gouvernement a également
          instauré des mesures dissuasives pour inciter les Français à se
          tourner vers les modèles électriques. Le malus écologique en est une.
        </p>
        <p>
          Il est très facile de recharger sa voiture électrique de nos jours,
          différentes solutions sont possibles : vous avez le choix. Plus de 100
          000 bornes de recharge publiques sont désormais disponibles en France
          métropolitaine fin septembre 2022, à cela s&apos;ajoutent les bornes
          de recharge proposées par les opérateurs privés sur les autoroutes ou
          sur les parkings des centres commerciaux. Certaines permettent même de
          recharger son véhicule gratuitement.
        </p>
      </article>
      <img className="car_presentation" src={car} alt="Voiture électrique" />
    </section>
  );
}

export default Presentation;
