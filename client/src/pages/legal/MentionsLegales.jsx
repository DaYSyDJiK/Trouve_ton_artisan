import useSEO from "../../hooks/useSEO";

export default function MentionsLegales() {
  useSEO({
    title: "Mentions légales | Trouve ton artisan",
    description: "Consultez les mentions légales du site Trouve ton artisan."
  });

  return (
    <section className="container my-4">
      <h1>Mentions légales</h1>
      <p className="mt-3">Page en construction.</p>
    </section>
  );
}