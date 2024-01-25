import { Link } from "react-router-dom";
import "../css/Admin.css";
import logo from "../assets/logo.png";

function Admin() {
  return (
    <div className="space_admin">
      <header className="container_admin">
        <img className="logo_home_admin" src={logo} alt="logo de GeoCode" />
        <Link className="sign_exit_admin" to="/page/presentation" />
      </header>
      <section className="admin_page">
        <h2 className="title_admin">Panel Administrateur</h2>
        <div className="separation_of_elements_admin">
          <Link className="btn_modify_admin" to="/" />
          <table>
            <thead>
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
            <tr>
              <td>Paris</td>
              <td>75001</td>
              <td>1 Avenue de la Paix</td>
              <td>Picpus</td>
              <td>Societe Y</td>
              <td>Oui</td>
              <td>Oui</td>
              <td>Non</td>
              <td>Non</td>
              <td>..</td>
              <td>OK</td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Admin;
