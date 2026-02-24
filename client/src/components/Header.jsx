import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const q = search.trim();

    // Si l'utilisateur n'a rien tapé => on va sur la liste complète
    if (!q) {
      navigate("/artisans");
      return;
    }

    // Sinon => on va sur /artisans?search=...
    navigate(`/artisans?search=${encodeURIComponent(q)}`);
  }

  return (
    <header className="border-bottom bg-light">
      <div className="container py-3 d-flex flex-column gap-3">
        {/* Ligne 1 : logo + recherche */}
        <div className="d-flex justify-content-between align-items-center gap-3">
          <Link to="/" className="fw-bold text-decoration-none text-dark">
            Trouve ton artisan
          </Link>

          <form className="d-flex" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="search">
              Rechercher un artisan
            </label>

            <input
              id="search"
              className="form-control me-2"
              type="search"
              placeholder="Rechercher un artisan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="btn btn-primary" type="submit">
              Rechercher
            </button>
          </form>
        </div>

        {/* Ligne 2 : menu */}
        <nav className="d-flex gap-3">
          <NavLink to="/categorie/batiment" className="text-decoration-none">
            Bâtiment
          </NavLink>
          <NavLink to="/categorie/services" className="text-decoration-none">
            Services
          </NavLink>
          <NavLink to="/categorie/fabrication" className="text-decoration-none">
            Fabrication
          </NavLink>
          <NavLink to="/categorie/alimentation" className="text-decoration-none">
            Alimentation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}