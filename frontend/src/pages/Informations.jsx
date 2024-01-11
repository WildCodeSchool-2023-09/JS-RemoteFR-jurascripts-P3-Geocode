import "../css/Informations.css";
import terminal from "../assets/terminal.png";
import plugtable from "../assets/plug-table.png";

function Informations() {
  return (
    <section className="space_informations">
      <div className="informations_page">
        <h2 className="title_informations center_title">
          Tout savoir sur les Bornes Electriques
        </h2>
        <article>
          <p>
            Une norme standard a ainsi émergé en Europe, le “combo CCS” pour la
            recharge rapide, et la Type 2 pour la recharge lente à normale. La
            quasi totalité des voitures neuves en Europe intègrent la norme TYPE
            2 et, pour certaines, COMBO CCS est en option pour permettre le
            chargement rapide. La norme Combo CSS peut délivrer jusqu&apos;à 350
            kW de puissance.
          </p>
          <p>
            En attendant l'uniformisation, la plupart des bornes continue à
            proposer les différents types de connecteurs existants à date, pour
            pouvoir fournir de l&apos;électricité à tous les véhicules
            électriques en circulation.
          </p>
        </article>
        <h3 className="small_title_informations center_title">
          Comment utiliser une borne de recharge pour véhicule électrique ?
        </h3>
        <div className="separation_of_elements">
          <img
            className="terminal_informations"
            src={terminal}
            alt="prise borne"
          />
          <span className="subtitle_informations">
            A. Comment connecter la borne de recharge à votre véhicule ?
          </span>
          <p>
            Branchez le câble au niveau de la borne et au niveau du véhicule. La
            norme européenne en termes de prise pour les bornes de recharge est
            le type 2 et c'est ainsi avec tous les véhicules du marché.
          </p>
          <span className="subtitle_informations">
            B. Comment activer la borne de recharge ?
          </span>
          <p className="bold_informations">Borne à accès libre :</p>
          <p>Aucun badge requis, vous branchez et rechargez !</p>
          <p className="bold_informations">Borne à accès payant :</p>
          <p>
            <span className="underline_informations">
              Facturation au temps passé :
            </span>
            prix par minute ou par tranche horaire, le temps pouvant être
            décompté en fonction de la durée de recharge ou de la durée du
            branchement (y compris une fois la recharge terminée…). C&apos;est
            la méthode de tarification la plus répandue car la plus facile à
            calculer pour les opérateurs de borne.
          </p>
          <p>
            <span className="underline_informations">
              Facturation au forfait :
            </span>
            prix forfaitaire pour une quantité donnée d&apos;énergie (par
            exemple 10€ pour 50 kWh) ou pour un volume horaire déterminé (par
            exemple 1€ pour un branchement de 10 minutes). C&apos;est une
            tarification utilisée par certains réseaux de bornes pour leurs
            abonnés. Elle peut aussi être appliquée par des commerces qui
            souhaitent proposer à leurs clients une recharge gratuite ou à bas
            coût.
          </p>
          <p>
            <span className="underline_informations">Facturation au kWh :</span>
            c&apos;est le mode de facturation le plus équitable sur le papier.
            Comme à la pompe à essence, vous réglez simplement le montant
            d&apos;énergie que vous avez embarquée dans votre véhicule,
            indépendamment du temps passé à la borne. Ce mode de facturation est
            cependant peu répandu à ce jour car il nécessite l&apos;installation
            sur chaque borne d&apos;un compteur homologué.
          </p>
        </div>
        <h3 className="small_title_informations center_title">
          Comment choisir son câble de recharge ?
        </h3>
        <p>
          Nous vous conseillons donc d&apos;utiliser le câble adapté à vos
          besoins. Pour cela il faut vérifier la puissance de recharge de votre
          véhicule accepté par sa prise type 1 ou type2, celle-ci est souvent
          équivalente à : 3,7kW, 7,4kW, 11kW ou 22kW. Attention à ne pas
          confondre la puissance de recharge rapide de votre véhicule qui
          n&apos;est compatible qu&apos;avec une prise combo CCS ou Chademo
          uniquement disponible avec des bornes de recharge rapides. Les
          puissances de recharge sont alors généralement au-dessus de 50kW.
          <br />
          Si votre véhicule est en monophasé, on vous conseil un câble
          monophasé. Si votre véhicule est triphasé, un câble triphasé sera
          nécessaire pour obtenir la puissance maximale de 22Kw. <br />
          Différence entre un câble monophasé et câble triphasé Les câbles
          monophasés ont l&apos;avantage d&apos;être plus souples, ainsi que
          d&apos;avoir un poids deux fois plus légers que les câbles triphasés.
        </p>
        <h3 className="small_title_informations center_title">
          Qu&apos;est-ce qu&apos;une borne de recharge électrique ?
        </h3>
        <div className="separation_of_elements align">
          <img
            className="plugtable_informations"
            src={plugtable}
            alt="tableau des prises"
          />
          <p>
            Commençons par définir les termes. Une borne est un dispositif relié
            au réseau d&apos;électricité ; autrement dit, une prise améliorée
            qui dispose d&apos;un câble et d&apos;un connecteur permettant de
            recharger la batterie d&apos;un véhicule électrique.
            <br />
            L&apos;installation de ces bornes peut se faire aussi bien sur la
            voie publique que sur des aires d&apos;autoroute ou encore à
            l&apos;intérieur de parkings de ville, dans les gares ou les
            aéroports.
            <br />
            Ces bornes ne sont cependant pas toutes équivalentes. Elles se
            différencient surtout par la puissance qu&apos;elles sont
            susceptibles de délivrer. On peut ainsi distinguer :
            <br />
                        <p>
              <span className="bold_informations">Les bornes normales :</span>
              bornes de recharge délivrant une puissance comprise entre 3 et 6
              kW.
            </p>
            <p>
              <span className="bold_informations">
                Les bornes semi-accélérées :
              </span>
              puissance délivrée comprise entre 7 et 15 kW.
            </p>
            <p>
              <span className="bold_informations">Les bornes rapides :</span>
              puissance délivrée comprise entre 30 et 100 kW.
            </p>
            <p>
              <span className="bold_informations">
                Les bornes ultra-rapides :
              </span>
              puissance délivrée supérieure à 100 kW. Certaines bornes sont
              capables de délivrer jusqu&apos;à 350 kW.
            </p>
          </p>
        </div>
        <p>
          À titre d&apos;illustration, si vous branchez la prise de votre
          citadine Peugeot e208 pendant 20 minutes à une borne délivrant une
          puissance de 90 kW dans la rue, vous aurez rechargé votre batterie à
          hauteur de 30 kWh, c&apos;est-à-dire de quoi rouler plus de 150 à 200
          km avec ces véhicules électriques qui consomment entre 15 et 20
          kWh/100km en moyenne.
        </p>
      </div>
    </section>
  );
}

export default Informations;
