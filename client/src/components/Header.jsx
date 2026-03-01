import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGet } from "../services/api";

function slugify(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, "-")
    .replace(/\s+/g, "-");
}

export default function Header() {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [errorCat, setErrorCat] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await apiGet("/categories");
        setCategories(data);
      } catch (e) {
        setErrorCat(e.message || "Erreur catégories");
      }
    }

    loadCategories();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const q = search.trim();

    if (!q) {
      navigate("/artisans");
      return;
    }

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

        {/* Ligne 2 : menu dynamique */}
        <nav className="d-flex gap-3 flex-wrap">
          {errorCat ? <span className="text-danger">{errorCat}</span> : null}

          {categories.map((c) => (
            <NavLink
              key={c.id}
              to={`/categorie/${slugify(c.nom)}`}
              className="text-decoration-none"
            >
              {c.nom}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}