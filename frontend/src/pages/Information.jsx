import plugterminal from "../assets/plug-terminal.png";
import plugtable from "../assets/plug-table.png";

function Information() {
  return (
    <section className="information">
      <h2 className="h2_information">Tout savoir sur les Bornes Électriques</h2>
      <article>
        <p>
          Une norme standard a ainsi émergé en Europe, le “combo CCS” pour la
          recharge rapide, et la Type 2 pour la recharge lente à normale. La
          quasi totalité des voitures neuves en Europe intègrent la norme TYPE 2
          et, pour certaines, COMBO CCS est en option pour permettre le
          chargement rapide. La norme Combo CSS peut délivrer jusqu&apos;à 350
          kW de puissance.
        </p>
        <p>
          En attendant l'uniformisation, la plupart des bornes continue à
          proposer les différents types de connecteurs existants à date, pour
          pouvoir fournir de l&apos;électricité à tous les véhicules électriques
          en circulation.
        </p>
      </article>
      <article>
        <h3>
          COMMENT UTILISER UNE BORNE DE RECHARGE DE RECHARGE POUR VÉHICULE
          ÉLECTRIQUE ?
        </h3>
        <aside>
          A. Comment connecter la borne de recharge à votre véhicule ?
        </aside>
        <p>
          Branchez le câble au niveau de la borne et au niveau du véhicule. La
          norme européenne en termes de prise pour les bornes de recharge est le
          type 2 et c'est ainsi avec tous les véhicules du marché.{" "}
        </p>
        <aside>B. Comment activer la borne de recharge ?</aside>
        <div>
          <p>Borne à accès libre :</p>
          <p>Aucun badge requis : vous branchez et rechargez !</p>
        </div>
        <div>
          <p>Borne à accès payant :</p>
          <ul>
            <li>
              <strong>Facturation au temps passé :</strong> prix par minute ou
              par tranche horaire, le temps pouvant être décompté en fonction de
              la durée de recharge ou de la durée du branchement (y compris une
              fois la recharge terminée…). C&apos;est la méthode de tarification
              la plus répandue car la plus facile à calculer pour les opérateurs
              de borne.
            </li>
            <li>
              <strong>Facturation au forfait :</strong>prix forfaitaire pour une
              quantité donnée d&apos;énergie (par exemple 10€ pour 50 kWh) ou
              pour un volume horaire déterminé (par exemple 1€ pour un
              branchement de 10 minutes). C&apos;est une tarification utilisée
              par certains réseaux de bornes pour leurs abonnés. Elle peut aussi
              être appliquée par des commerces qui souhaitent proposer à leurs
              clients une recharge gratuite ou à bas coût.
            </li>
            <li>
              <strong>Facturation au kWh :</strong>c&apos;est le mode de
              facturation le plus équitable sur le papier. Comme à la pompe à
              essence, vous réglez simplement le montant d&apos;énergie que vous
              avez embarquée dans votre véhicule, indépendamment du temps passé
              à la borne. Ce mode de facturation est cependant peu répandu à ce
              jour car il nécessite l&apos;installation sur chaque borne
              d&apos;un compteur homologué.
            </li>
          </ul>
        </div>
      </article>
      <img
        className="plugterminal_information"
        src={plugterminal}
        alt="prise borne"
      />
      <article>
        <h3>COMMENT CHOISIR SON CABLE DE RECHARGE ?</h3>
        <p>
          Nous vous conseillons donc d&apos;utiliser le câble adapté à vos
          besoins. Pour cela il faut vérifier la puissance de recharge de votre
          véhicule accepté par sa prise type 1 ou type2, celle-ci est souvent
          équivalente à : 3,7kW, 7,4kW, 11kW ou 22kW. Attention à ne pas
          confondre la puissance de recharge rapide de votre véhicule qui
          n&apos;est compatible qu&apos;avec une prise combo CCS ou Chademo
          uniquement disponible avec des bornes de recharge rapides. Les
          puissances de recharge sont alors généralement au-dessus de 50kW.
        </p>
        <p>
          Si votre véhicule est en monophasé, on vous conseil un câble
          monophasé. Si votre véhicule est triphasé, un câble triphasé sera
          nécessaire pour obtenir la puissance maximale de 22Kw.{" "}
        </p>
        <p>
          Différence entre un câble monophasé et câble triphasé Les câbles
          monophasés ont l&apos;avantage d&apos;être plus souples, ainsi que
          d&apos;avoir un poids deux fois plus légers que les câbles triphasés.
        </p>
      </article>
      <img
        className="plugtable_information"
        src={plugtable}
        alt="tableau des prises"
      />
      <article>
        <strong>
          Qu&apos;est-ce qu&apos;une borne de recharge électrique ?
        </strong>
        <p>
          Commençons par définir les termes. Une borne est un dispositif relié
          au réseau d&apos;électricité ; autrement dit, une prise améliorée qui
          dispose d&apos;un câble et d&apos;un connecteur permettant de
          recharger la batterie d&apos;un véhicule électrique.
          L&apos;installation de ces bornes peut se faire aussi bien sur la voie
          publique que sur des aires d&apos;autoroute ou encore à
          l&apos;intérieur de parkings de ville, dans les gares ou les
          aéroports.
        </p>
        <p>
          Ces bornes ne sont cependant pas toutes équivalentes. Elles se
          différencient surtout par la puissance qu&apos;elles sont susceptibles
          de délivrer. On peut ainsi distinguer :
        </p>
        <ul>
          <li>
            <strong>les bornes normales :</strong>bornes de recharge délivrant
            une puissance comprise entre 3 et 6 kW.
          </li>
          <li>
            <strong>les bornes semi-accélérées :</strong>puissance délivrée
            comprise entre 7 et 15 kW.
          </li>
          <li>
            <strong>les bornes accélérées :</strong>puissance délivrée comprise
            entre 16 et 30 kW.
          </li>
          <li>
            <strong>les bornes rapides :</strong>puissance délivrée comprise
            entre 30 et 100 kW.
          </li>
          <li>
            <strong>les bornes ultra-rapides :</strong>puissance délivrée
            supérieure à 100 kW. Certaines bornes sont capables de délivrer
            jusqu&apos;à 350 kW.
          </li>
        </ul>
        <p>
          À titre d&apos;illustration, si vous branchez la prise de votre
          citadine Peugeot e208 pendant 20 minutes à une borne délivrant une
          puissance de 90 kW dans la rue, vous aurez rechargé votre batterie à
          hauteur de 30 kWh, c&apos;est-à-dire de quoi rouler plus 150 à 200 km
          avec ces véhicules électriques qui consomment entre 15 et 20 kWh/100km
          en moyenne.
        </p>
      </article>
    </section>
  );
}

export default Information;
