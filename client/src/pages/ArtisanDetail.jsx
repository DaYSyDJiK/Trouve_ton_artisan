import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";
import { apiGet } from "../services/api";
import { apiPost } from "../services/api";

export default function ArtisanDetail() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    setError("");

    try {
      await apiPost("/contact", {
        ...form,
        artisanId: artisan.id,
      });

      setStatus("Message envoyé avec succès !");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Erreur lors de l'envoi du message.");
    }
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");

      try {
        const data = await apiGet(`/artisans/${id}`);
        setArtisan(data);
      } catch (e) {
        setError(e.message || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  if (loading) {
    return (
      <section className="container my-4">
        <p>Chargement...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container my-4">
        <p className="text-danger">Erreur : {error}</p>
      </section>
    );
  }

  if (!artisan) {
    return (
      <section className="container my-4">
        <p>Artisan introuvable.</p>
      </section>
    );
  }

  const specialite = artisan?.Specialite?.nom || "—";
  const categorie = artisan?.Specialite?.Categorie?.nom || "—";

  // Fallback image : si null => placeholder
  const imageUrl =
    artisan.image ||
    "https://via.placeholder.com/800x450?text=Artisan";

  return (
    <section className="container my-4">
      <h1 className="mb-4">{artisan.nom}</h1>

      <div className="row g-4">
        {/* Col gauche : image + infos */}
        <div className="col-12 col-lg-6">
          <img
            src={imageUrl}
            alt={`Illustration de ${artisan.nom}`}
            className="img-fluid rounded border"
          />

          <div className="mt-3">
            <ArtisanCard
              id={artisan.id}
              nom={artisan.nom}
              note={Number(artisan.note)}
              specialite={specialite}
              ville={artisan.ville}
            />
          </div>

          <p className="mt-3 mb-1">
            <strong>Catégorie :</strong> {categorie}
          </p>

          {artisan.siteWeb ? (
            <p className="mb-0">
              <strong>Site web :</strong>{" "}
              <a href={artisan.siteWeb} target="_blank" rel="noreferrer">
                {artisan.siteWeb}
              </a>
            </p>
          ) : (
            <p className="mb-0">
              <strong>Site web :</strong> —
            </p>
          )}
        </div>

        {/* Col droite : à propos + formulaire */}
        <div className="col-12 col-lg-6">
          <div className="border rounded p-3 mb-4">
            <h2 className="h4">À propos</h2>
            <p className="mb-0">{artisan.description}</p>
          </div>

          <div className="border rounded p-3">
            <h2 className="h4">Contacter l'artisan</h2>


            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Nom
                </label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
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
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
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
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
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
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Envoyer
              </button>
              {status && <p className="text-success mt-2">{status}</p>}
              {error && <p className="text-danger mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}