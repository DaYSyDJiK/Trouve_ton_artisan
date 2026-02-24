import useSEO from "../../hooks/useSEO";

export default function Accessibilite() {
  useSEO({
    title: "Accessibilité | Trouve ton artisan",
    description: "Consultez la déclaration d'accessibilité du site Trouve ton artisan."
  });
  
  return (
    <section className="container my-4">
      <h1>Accessibilité</h1>
      <p className="mt-3">Page en construction.</p>
    </section>
  );
}