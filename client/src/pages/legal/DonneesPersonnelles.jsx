import useSEO from "../../hooks/useSEO";

export default function DonneesPersonnelles() {
  useSEO({
    title: "Données personnelles | Trouve ton artisan",
    description: "Consultez la politique de confidentialité et de protection des données personnelles du site Trouve ton artisan."
  });
  return (
    <section className="container my-4">
      <h1>Données personnelles</h1>
      <p className="mt-3">Page en construction.</p>
    </section>
  );
}