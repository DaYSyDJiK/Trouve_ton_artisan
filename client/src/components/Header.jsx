import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-light border-bottom p-3">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo */}
        <Link to="/" className="fw-bold text-decoration-none">
          Trouve ton artisan
        </Link>

        {/* Menu */}
        <nav>
          <Link to="/categorie/batiment" className="me-3">
            Bâtiment
          </Link>
          <Link to="/categorie/services" className="me-3">
            Services
          </Link>
          <Link to="/categorie/fabrication" className="me-3">
            Fabrication
          </Link>
          <Link to="/categorie/alimentation">
            Alimentation
          </Link>
        </nav>

      </div>
    </header>
  );
}