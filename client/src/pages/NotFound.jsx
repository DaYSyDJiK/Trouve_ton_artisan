import useSEO from "../hooks/useSEO";

export default function NotFound() {
    useSEO({
        title: "Page non trouvée | Trouve ton artisan",
        description: "La page que vous recherchez n'existe pas ou a été déplacée."
    });
    
    return (
        <>
            <section>
                <div className="container my-4 text-center">
                    <h1>Page non trouvée</h1>
                </div>
            </section>
        </>
    );
}