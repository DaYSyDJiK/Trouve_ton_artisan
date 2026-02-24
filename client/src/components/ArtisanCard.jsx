import { Link } from "react-router-dom";
import Stars from "./Stars";

export default function ArtisanCard({
  id,
  nom,
  note,
  specialite,
  ville,
  to, // rendre la card cliquable
}) {
  const content = (
    <article className="border rounded p-3 h-100">
      <h3 className="h5 mb-1">{nom}</h3>

      <p className="mb-1">
        <strong>Note :</strong> <Stars value={Number(note)} />{" "}
        <span className="text-muted">({note}/5)</span>
      </p>

      <p className="mb-1">
        <strong>Spécialité :</strong> {specialite}
      </p>

      <p className="mb-0">
        <strong>Localisation :</strong> {ville}
      </p>
    </article>
  );

  // La card devient cliquable (pour la liste)
  if (to) {
    return (
      <Link to={to} className="text-decoration-none text-dark">
        {content}
      </Link>
    );
  }

  return content;
}