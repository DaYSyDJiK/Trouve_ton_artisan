import { useParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";
import useSEO from "../hooks/useSEO";

export default function ArtisanDetail() {
  const { id } = useParams();

  // Placeholder : plus tard => fetch API /artisans/:id
  const artisan = {
    id,
    nom: "Chocolaterie Labbé",
    note: 4.9,
    specialite: "Chocolatier",
    ville: "Lyon",
    aPropos:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.",
    email: "chocolaterie-labbe@gmail.com",
    siteWeb: "https://chocolaterie-labbe.fr",
    imageUrl: "https://via.placeholder.com/800x450?text=Artisan",
  };

  useSEO({
    title: `${artisan.nom} | Trouve ton artisan`,
    description: `${artisan.nom}, ${artisan.specialite} à ${artisan.ville}. Consultez sa fiche et contactez-le directement.`
  });

  return (
    <section className="container my-4">
      <h1 className="mb-4">Fiche artisan</h1>

      <div className="row g-4">
        {/* Col gauche : image + infos */}
        <div className="col-12 col-lg-6">
          <img
            src={artisan.imageUrl}
            alt={`Illustration de ${artisan.nom}`}
            className="img-fluid rounded border"
          />

          <div className="mt-3">
            <ArtisanCard
              id={artisan.id}
              nom={artisan.nom}
              note={artisan.note}
              specialite={artisan.specialite}
              ville={artisan.ville}
            />
          </div>

          {artisan.siteWeb ? (
            <p className="mt-3 mb-0">
              <strong>Site web :</strong>{" "}
              <a href={artisan.siteWeb} target="_blank" rel="noreferrer">
                {artisan.siteWeb}
              </a>
            </p>
          ) : null}
        </div>

        {/* Col droite : à propos + formulaire */}
        <div className="col-12 col-lg-6">
          <div className="border rounded p-3 mb-4">
            <h2 className="h4">À propos</h2>
            <p className="mb-0">{artisan.aPropos}</p>
          </div>

          <div className="border rounded p-3">
            <h2 className="h4">Contacter l'artisan</h2>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Nom
                </label>
                <input id="name" className="form-control" type="text" required />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="subject">
                  Objet
                </label>
                <input
                  id="subject"
                  className="form-control"
                  type="text"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="5"
                  required
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Envoyer
              </button>

              <p className="text-muted mt-2 mb-0">
                (Plus tard : envoi réel via l’API)
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}