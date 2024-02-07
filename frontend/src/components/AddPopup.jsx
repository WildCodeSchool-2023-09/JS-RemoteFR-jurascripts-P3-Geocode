import axios from "axios";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import plugData from "../Data/plugData";

function AddPopup({ popupAdd }) {
  const refNomStation = useRef();
  const refLocalisation = useRef();
  const refConditionAcces = useRef();
  const refHoraires = useRef();
  const refIdStationItinerance = useRef();
  const refCodePostal = useRef();
  const refVille = useRef();
  const refNomOperateur = useRef();
  const refPower = useRef();
  const refLongitude = useRef();
  const refLatitude = useRef();

  const [typeEf, setTypeEf] = useState("Non");
  const [type2, setType2] = useState("Non");
  const [combo, setCombo] = useState("Non");
  const [chademo, setChademo] = useState("Non");
  const [autre, setAutre] = useState("Non");

  //   const BooleanPlug = (value) => {
  //     const result = value === 0 ? "Non" : "Oui";
  //     return result;
  //   };

  const BooleanPlugReverse = (value) => {
    const result = value === "Non" ? 0 : 1;
    return result;
  };

  const Idplug = () => {
    const result = plugData.find(
      (plug) =>
        plug.prise_type_ef === BooleanPlugReverse(typeEf) &&
        plug.prise_type_2 === BooleanPlugReverse(type2) &&
        plug.prise_type_combo_ccs === BooleanPlugReverse(combo) &&
        plug.prise_type_chademo === BooleanPlugReverse(chademo) &&
        plug.prise_type_autre === BooleanPlugReverse(autre)
    );

    return result.id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/station`, {
        nomStation: refNomStation.current.value,
        localisation: refLocalisation.current.value,
        conditionAcces: refConditionAcces.current.value,
        horaires: refHoraires.current.value,
        idStationItinerance: refIdStationItinerance.current.value,
        codePostal: refCodePostal.current.value,
        ville: refVille.current.value,
      });

      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/terminal`, {
        nomOperateur: refNomOperateur.current.value,
        puissanceNominale: refPower.current.value,
        stationId: refIdStationItinerance.current.value,
        plugId: Idplug(),
        longitude: refLongitude.current.value,
        latitude: refLatitude.current.value,
      });

      popupAdd();
    } catch (err) {
      console.error("Error adding station:", err);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nomStation">Nom de la station</label>
        <input type="text" id="nomStation" ref={refNomStation} required />
        <label htmlFor="localisation">Localisation</label>
        <input type="text" id="localisation" ref={refLocalisation} required />
        <label htmlFor="conditionAcces">Condition d'accès</label>
        <input
          type="text"
          id="conditionAcces"
          ref={refConditionAcces}
          required
        />
        <label htmlFor="horaires">Horaires</label>
        <input type="text" id="horaires" ref={refHoraires} required />
        <label htmlFor="idStationItinerance">ID Station itinérance</label>
        <input
          type="text"
          id="idStationItinerance"
          ref={refIdStationItinerance}
          required
        />
        <label htmlFor="codePostal">Code postal</label>
        <input type="text" id="codePostal" ref={refCodePostal} required />
        <label htmlFor="ville">Ville</label>
        <input type="text" id="ville" ref={refVille} required />
        <label htmlFor="nomOperateur">Nom de l'opérateur</label>
        <input type="text" id="nomOperateur" ref={refNomOperateur} required />
        <label htmlFor="power">Puissance nominale</label>
        <input type="text" id="power" ref={refPower} required />
        <label htmlFor="longitude">Longitude</label>
        <input type="text" id="longitude" ref={refLongitude} required />
        <label htmlFor="latitude">Latitude</label>
        <input type="text" id="latitude" ref={refLatitude} required />
        <label htmlFor="TypeEF">Prise EF</label>
        <select value={typeEf} onChange={(e) => setTypeEf(e.target.value)}>
          <option value="Non">Non</option>
          <option value="Oui">Oui</option>
        </select>
        <label htmlFor="Type2">Prise type 2</label>
        <select value={type2} onChange={(e) => setType2(e.target.value)}>
          <option value="Non">Non</option>
          <option value="Oui">Oui</option>
        </select>
        <label htmlFor="Combo">Prise Combo CCS</label>
        <select value={combo} onChange={(e) => setCombo(e.target.value)}>
          <option value="Non">Non</option>
          <option value="Oui">Oui</option>
        </select>
        <label htmlFor="Chademo">Prise Chademo</label>
        <select value={chademo} onChange={(e) => setChademo(e.target.value)}>
          <option value="Non">Non</option>
          <option value="Oui">Oui</option>
        </select>
        <label htmlFor="Autre">Autre prise</label>
        <select value={autre} onChange={(e) => setAutre(e.target.value)}>
          <option value="Non">Non</option>
          <option value="Oui">Oui</option>
        </select>

        <button type="submit" onClick={handleSubmit}>
          Ajouter
        </button>
        <button type="button" onClick={popupAdd}>
          Annuler
        </button>
      </form>
    </section>
  );
}

AddPopup.propTypes = {
  popupAdd: PropTypes.func.isRequired,
};

export default AddPopup;
