import { useSearchParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";
import useSEO from "../hooks/useSEO";

export default function ArtisanList() {
  const [params] = useSearchParams();
  const search = (params.get("search") || "").toLowerCase();

  // Placeholder : plus tard => fetch API /artisans?search=
  const artisans = [
    { id: 1, nom: "Au pain chaud", note: 4.8, specialite: "Boulanger", ville: "Montélimar" },
    { id: 2, nom: "Chocolaterie Labbé", note: 4.9, specialite: "Chocolatier", ville: "Lyon" },
    { id: 3, nom: "Orville Salmons", note: 5.0, specialite: "Chauffagiste", ville: "Evian" },
    { id: 4, nom: "CM Graphisme", note: 4.4, specialite: "Webdesign", ville: "Valence" },
  ];

  const filtered = search
    ? artisans.filter((a) => a.nom.toLowerCase().includes(search))
    : artisans;

    useSEO({
    title: search
      ? `Recherche "${search}" | Trouve ton artisan`
      : "Liste des artisans | Trouve ton artisan",
    description: search
      ? `Résultats de recherche pour "${search}" parmi les artisans de la région Auvergne-Rhône-Alpes.`
      : "Consultez la liste des artisans disponibles en Auvergne-Rhône-Alpes."
  });
  
  return (
    <section className="container my-4">
      <h1 className="mb-2">Liste des artisans</h1>

      {search ? (
        <p className="text-muted">
          Résultats pour : <strong>{params.get("search")}</strong>
        </p>
      ) : (
        <p className="text-muted">Affichage de tous les artisans.</p>
      )}

      <div className="row g-3 mt-2">
        {filtered.map((a) => (
          <div className="col-12 col-md-6 col-lg-4" key={a.id}>
            <ArtisanCard
              id={a.id}
              nom={a.nom}
              note={a.note}
              specialite={a.specialite}
              ville={a.ville}
              to={`/artisans/${a.id}`}
            />
          </div>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-4">Aucun artisan ne correspond à votre recherche.</p>
      ) : null}
    </section>
  );
}