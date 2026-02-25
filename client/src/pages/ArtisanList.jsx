import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";
import { apiGet } from "../services/api";

export default function ArtisanList() {
  const [params] = useSearchParams();
  const search = params.get("search") || "";

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <section className="container my-4">
      <h1 className="mb-2">Liste des artisans</h1>

      {search ? (
        <p className="text-muted">
          Résultats pour : <strong>{search}</strong>
        </p>
      ) : (
        <p className="text-muted">Affichage de tous les artisans.</p>
      )}

      {loading ? <p>Chargement...</p> : null}
      {error ? <p className="text-danger">Erreur : {error}</p> : null}

      {!loading && !error && artisans.length === 0 ? (
        <p>Aucun artisan ne correspond à votre recherche.</p>
      ) : null}

      <div className="row g-3 mt-2">
        {artisans.map((a) => (
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