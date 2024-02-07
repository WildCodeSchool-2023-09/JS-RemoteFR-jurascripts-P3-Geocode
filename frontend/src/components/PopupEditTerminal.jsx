import { useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../css/PopupEditTerminal.css";

function PopupEditTerminal({ idTerminal, setIsEditing, setIdTerminal, data }) {
  const refCommune = useRef();
  const refCodePostal = useRef();
  const refLocalisation = useRef();
  const refNomStation = useRef();
  const refNomOperateur = useRef();
  const refPriseTypeEf = useRef();
  const refPriseType2 = useRef();
  const refPriseTypeComboCcs = useRef();
  const refPriseTypeChademo = useRef();
  const refPriseTypeAutre = useRef();
  const refStatus = useRef();

  const BooleanPlug = (value) => {
    const result = value === 0 ? "Non" : "Oui";
    return result;
  };

  const BooleanStatut = (value) => {
    const result = value === 0 ? "HS" : "Active";
    return result;
  };

  const BooleanPlugReverse = (value) => {
    const result = value === "Non" ? 0 : 1;
    return result;
  };

  const BooleanStatutReverse = (value) => {
    const result = value === "HS" ? 0 : 1;
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/terminal/full/${idTerminal}`,
        {
          consolidatedCommune: refCommune.current.value,
          consolidatedCodePostal: refCodePostal.current.value,
          localisation: refLocalisation.current.value,
          nomStation: refNomStation.current.value,
          nomOperateur: refNomOperateur.current.value,
          priseTypeEf: BooleanPlugReverse(refPriseTypeEf.current.value),
          priseType2: BooleanPlugReverse(refPriseType2.current.value),
          priseTypeComboCcs: BooleanPlugReverse(
            refPriseTypeComboCcs.current.value
          ),
          priseTypeChademo: BooleanPlugReverse(
            refPriseTypeChademo.current.value
          ),
          priseTypeAutre: BooleanPlugReverse(refPriseTypeAutre.current.value),
          status: BooleanStatutReverse(refStatus.current.value),
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setIsEditing(false);
        setIdTerminal(null);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="popup_edit" onSubmit={handleSubmit}>
      <section className="wrap_left">
        Ville
        <input
          ref={refCommune}
          type="text"
          defaultValue={data.consolidated_commune}
        />
        <br />
        Code Postal
        <input
          ref={refCodePostal}
          type="text"
          defaultValue={data.consolidated_code_postal}
        />
        <br />
        Adresse
        <input
          ref={refLocalisation}
          type="text"
          defaultValue={data.localisation}
        />
        <br />
        Station
        <input
          ref={refNomStation}
          type="text"
          defaultValue={data.nom_station}
        />
        <br />
        Opérateur
        <input
          ref={refNomOperateur}
          type="text"
          defaultValue={data.nom_operateur}
        />
      </section>
      <section className="wrap_right">
        Type Ef :
        <select>
          <option ref={refPriseTypeEf} value={BooleanPlug(data.prise_type_ef)}>
            Default: {BooleanPlug(data.prise_type_ef)}
          </option>
          <option ref={refPriseTypeEf} value="Non">
            Non
          </option>
          <option ref={refPriseTypeEf} value="Oui">
            Oui
          </option>
        </select>
        Type 2 :
        <select>
          <option ref={refPriseType2} value={BooleanPlug(data.prise_type_2)}>
            Default: {BooleanPlug(data.prise_type_2)}
          </option>
          <option ref={refPriseType2} value="Non">
            Non
          </option>
          <option ref={refPriseType2} value="Oui">
            Oui
          </option>
        </select>
        Combo CCS :
        <select>
          <option
            ref={refPriseTypeComboCcs}
            value={BooleanPlug(data.prise_type_combo_ccs)}
          >
            Default: {BooleanPlug(data.prise_type_combo_ccs)}
          </option>
          <option ref={refPriseTypeComboCcs} value="Non">
            Non
          </option>
          <option ref={refPriseTypeComboCcs} value="Oui">
            Oui
          </option>
        </select>
        Type Chademo :
        <select>
          <option
            ref={refPriseTypeChademo}
            value={BooleanPlug(data.prise_type_chademo)}
          >
            Default: {BooleanPlug(data.prise_type_chademo)}
          </option>
          <option ref={refPriseTypeChademo} value="Non">
            Non
          </option>
          <option ref={refPriseTypeChademo} value="Oui">
            Oui
          </option>
        </select>
        Type Autre :
        <select>
          <option
            ref={refPriseTypeAutre}
            value={BooleanPlug(data.prise_type_autre)}
          >
            Default: {BooleanPlug(data.prise_type_autre)}
          </option>
          <option ref={refPriseTypeAutre} value="Non">
            Non
          </option>
          <option ref={refPriseTypeAutre} value="Oui">
            Oui
          </option>
        </select>
        <br />
        Statut :
        <select>
          <option ref={refStatus} value={BooleanStatut(data.status)}>
            Default: {BooleanStatut(data.status)}
          </option>
          <option ref={refStatus} value="HS">
            HS
          </option>
          <option ref={refStatus} value="Active">
            Active
          </option>
        </select>
      </section>
      <button className="btn_update" type="submit">
        Modifier
      </button>
    </form>
  );
}

PopupEditTerminal.propTypes = {
  idTerminal: PropTypes.number.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  setIdTerminal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    consolidated_commune: PropTypes.string.isRequired,
    consolidated_code_postal: PropTypes.string.isRequired,
    localisation: PropTypes.string.isRequired,
    nom_station: PropTypes.string.isRequired,
    nom_operateur: PropTypes.string.isRequired,
    prise_type_ef: PropTypes.number.isRequired,
    prise_type_2: PropTypes.number.isRequired,
    prise_type_combo_ccs: PropTypes.number.isRequired,
    prise_type_chademo: PropTypes.number.isRequired,
    prise_type_autre: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
  }).isRequired,
};

export default PopupEditTerminal;
