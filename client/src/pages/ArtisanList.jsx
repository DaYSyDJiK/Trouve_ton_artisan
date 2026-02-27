import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";
import useSEO from "../hooks/useSEO";
import { apiGet } from "../services/api";

// transforme "Bâtiment" -> "batiment"
function slugify(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // enlève accents
    .replace(/'/g, "-")
    .replace(/\s+/g, "-");
}

export default function ArtisanList() {
  const { slug } = useParams(); // existe seulement sur /categorie/:slug
  const [params] = useSearchParams();
  const search = params.get("search") || "";

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // URL API selon search (catégorie sera filtrée côté front)
  const url = useMemo(() => {
    const q = search.trim();
    return q ? `/artisans?search=${encodeURIComponent(q)}` : "/artisans";
  }, [search]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");

      try {
        const data = await apiGet(url);
        setArtisans(data);
      } catch (e) {
        setError(e.message || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [url]);

  // ✅ Filtrage catégorie (si slug présent)
  const filtered = useMemo(() => {
    if (!slug) return artisans;

    return artisans.filter((a) => {
      const catName = a?.Specialite?.Categorie?.nom || "";
      return slugify(catName) === slug;
    });
  }, [artisans, slug]);

  const pageTitle = slug ? `Catégorie : ${slug}` : "Liste des artisans";

  useSEO({
    title: slug
      ? `Catégorie ${slug} | Trouve ton artisan`
      : search
      ? `Recherche "${search}" | Trouve ton artisan`
      : "Liste des artisans | Trouve ton artisan",
    description: slug
      ? `Découvrez les artisans de la catégorie ${slug} en Auvergne-Rhône-Alpes.`
      : search
      ? `Résultats de recherche pour "${search}" parmi les artisans.`
      : "Consultez la liste des artisans en Auvergne-Rhône-Alpes.",
  });

  return (
    <section className="container my-4">
      <h1 className="mb-2">{pageTitle}</h1>

      {slug ? (
        <p className="text-muted">
          Affichage des artisans de la catégorie : <strong>{slug}</strong>
        </p>
      ) : null}

      {search ? (
        <p className="text-muted">
          Recherche : <strong>{search}</strong>
        </p>
      ) : null}

      {loading ? <p>Chargement...</p> : null}
      {error ? <p className="text-danger">Erreur : {error}</p> : null}

      {!loading && !error && filtered.length === 0 ? (
        <p>Aucun artisan trouvé.</p>
      ) : null}

      <div className="row g-3 mt-2">
        {filtered.map((a) => (
          <div className="col-12 col-md-6 col-lg-4" key={a.id}>
            <ArtisanCard
              id={a.id}
              nom={a.nom}
              note={Number(a.note)}
              specialite={a?.Specialite?.nom || "—"}
              ville={a.ville}
              to={`/artisans/${a.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}