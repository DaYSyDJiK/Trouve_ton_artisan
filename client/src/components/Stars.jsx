export default function Stars({ value = 0 }) {
  // Arrondi à l'entier
  const rating = Math.round(value);
  const full = Math.max(0, Math.min(5, rating));
  const empty = 5 - full;

  return (
    <span aria-label={`Note ${value} sur 5`}>
      {"★".repeat(full)}
      {"☆".repeat(empty)}
    </span>
  );
}