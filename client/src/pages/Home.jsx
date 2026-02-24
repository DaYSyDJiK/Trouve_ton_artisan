import ArtisanCard from "../components/ArtisanCard";
import useSEO from "../hooks/useSEO";

export default function Home() {
  // Placeholder (plus tard = API /artisans/top)
  const topArtisans = [
    { id: 1, nom: "Nom de l'artisan", note: 4.5, specialite: "Spécialité", ville: "Ville" },
    { id: 2, nom: "Nom de l'artisan", note: 4.8, specialite: "Spécialité", ville: "Ville" },
    { id: 3, nom: "Nom de l'artisan", note: 4.2, specialite: "Spécialité", ville: "Ville" },
  ];

    useSEO({
    title: "Trouve ton artisan | Région Auvergne-Rhône-Alpes",
    description:
      "Trouvez un artisan en Auvergne-Rhône-Alpes par catégorie. Consultez sa fiche et contactez-le facilement via notre formulaire sécurisé."
  });

  return (
    <section className="container my-4">
      <h1 className="mb-2">Trouve ton artisan</h1>
      <p className="mb-4">
        Trouvez facilement un artisan en Auvergne-Rhône-Alpes et contactez-le via
        notre formulaire.
      </p>

      {/* Comment trouver mon artisan ? */}
      <div className="my-5">
        <h2 className="mb-4">Comment trouver mon artisan ?</h2>

        <div className="row g-3">
          {[
            "Choisir la catégorie d'artisanat dans le menu.",
            "Choisir un artisan.",
            "Le contacter via le formulaire de contact.",
            "Une réponse sera apportée sous 48h.",
          ].map((text, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div className="border rounded p-3 h-100">
                <h3 className="h5 mb-0">
                  {index + 1}. {text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Artisans du mois */}
      <div className="my-5">
        <div className="d-flex align-items-baseline justify-content-between gap-3">
          <h2 className="mb-3">Artisans du mois</h2>
          <small className="text-muted">(Dynamique plus tard via l’API)</small>
        </div>

        <div className="row g-3">
          {topArtisans.map((a) => (
            <div className="col-12 col-md-4" key={a.id}>
              <ArtisanCard
                id={a.id}
                nom={a.nom}
                note={a.note}
                specialite={a.specialite}
                ville={a.ville}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}