import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-5 p-4">
      <div className="container">

        <div className="row">

          {/* Pages légales */}
          <div className="col-md-6 mb-3">
            <h5>Pages légales</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/legal/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link to="/legal/donnees-personnelles">Données personnelles</Link>
              </li>
              <li>
                <Link to="/legal/accessibilite">Accessibilité</Link>
              </li>
              <li>
                <Link to="/legal/cookies">Cookies</Link>
              </li>
            </ul>
          </div>

          {/* Adresse */}
          <div className="col-md-6">
            <h5>Antenne de Lyon</h5>
            <p>
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              +33 (0)4 26 73 40 00
            </p>
          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 Région Auvergne-Rhône-Alpes
        </p>

      </div>
    </footer>
  );
}