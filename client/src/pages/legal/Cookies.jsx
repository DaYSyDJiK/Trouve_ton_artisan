import useSEO from "../../hooks/useSEO";

export default function Cookies() {
  useSEO({
    title: "Cookies | Trouve ton artisan",
    description: "Consultez la politique d'utilisation des cookies du site Trouve ton artisan."
  });
  
  return (
    <section className="container my-4">
      <h1>Cookies</h1>
      <p className="mt-3">Page en construction.</p>
    </section>
  );
}