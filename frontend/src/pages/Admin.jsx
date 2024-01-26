import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import "../css/Admin.css";
import logo from "../assets/logo.webp";

function Admin() {
  const [isLoading, setIsLoading] = useState(false);
  const [datasBorn, setDatasBorn] = useState(null);
  const [originalDatasBorn, setOriginalDatasBorn] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const auth = useLoaderData();

  useEffect(() => {
    const fetchDatas = () => {
      setIsLoading(true);

      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/terminal/findTerminal`)
        .then((res) => {
          setDatasBorn(res.data);
          setOriginalDatasBorn(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    };

    fetchDatas();
  }, []);

  // const handleClick = (id) => () => {

  // };

  const handleChange = (e) => {
    const inputValue = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    setInputSearch(inputValue);

    const filteredBorn = originalDatasBorn.filter((data) => {
      return (
        String(data.consolidated_commune)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue) ||
        String(data.consolidated_code_postal)
          .toLowerCase()
          .includes(inputValue) ||
        String(data.localisation)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue) ||
        String(data.nom_station)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue) ||
        String(data.nom_operateur)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      );
    });

    setDatasBorn(inputValue === "" ? originalDatasBorn : filteredBorn);
  };

  return (
    <div className="nothing_admin">
      {auth?.is_admin === 1 && (
        <div className="space_admin">
          <header className="container_admin">
            <img className="logo_home_admin" src={logo} alt="logo de GeoCode" />
            <Link className="sign_exit_admin" to="/page/presentation" />
          </header>
          <section className="admin_page">
            <h2 className="title_admin">Panel Administrateur</h2>
            {isLoading && !datasBorn && (
              <p className="isloading_admin">
                Chargement des Bornes Electriques
              </p>
            )}
            {!isLoading && datasBorn && (
              <input
                className="search_admin"
                type="text"
                value={inputSearch}
                placeholder="Rechercher une borne"
                onChange={handleChange}
              />
            )}
            <div className="separation_of_elements_admin">
              <table>
                {datasBorn && !isLoading && (
                  <thead>
                    <br />
                    <th scope="col">Ville</th>
                    <th scope="col">Code Postal</th>
                    <th scope="col">Adresse</th>
                    <th scope="col">Station</th>
                    <th scope="col">Opérateur</th>
                    <th scope="col">Type EF</th>
                    <th scope="col">Type 2</th>
                    <th scope="col">Combo CCS</th>
                    <th scope="col">Type Chademo</th>
                    <th scope="col">Type Autre</th>
                    <th scope="col">Statut</th>
                  </thead>
                )}
                {datasBorn &&
                  !isLoading &&
                  datasBorn.map((data) => (
                    <tr key={data.id}>
                      <div className="btn_modify_admin" />
                      <td>{data.consolidated_commune}</td>
                      <td>{data.consolidated_code_postal}</td>
                      <td>{data.localisation}</td>
                      <td>{data.nom_station}</td>
                      <td>{data.nom_operateur}</td>
                      <td>{data.prise_type_ef === 1 ? "Oui" : "Non"}</td>
                      <td>{data.prise_type_2 === 1 ? "Oui" : "Non"}</td>
                      <td>{data.prise_type_combo_ccs === 1 ? "Oui" : "Non"}</td>
                      <td>{data.prise_type_chademo === 1 ? "Oui" : "Non"}</td>
                      <td>{data.prise_type_autre === 1 ? "Oui" : "Non"}</td>
                      <td>{data.status === 1 ? "Active" : "HS"}</td>
                    </tr>
                  ))}
              </table>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Admin;
