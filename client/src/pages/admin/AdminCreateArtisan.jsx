import { useState, useEffect } from "react";
import { apiGet, apiAdminPost } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function AdminCreateArtisan() {
    const navigate = useNavigate();

    const [specialites, setSpecialites] = useState([]);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const [form, setForm] = useState({
        nom: "",
        ville: "",
        description: "",
        email: "",
        siteWeb: "",
        image: "",
        specialiteId: "",
    });

    const showMessage = (text, type) => {
        setMessage(text);
        setTimeout(() => {
            setMessage("");
        }, 3000);
        setMessageType(type);
    };

    useEffect(() => {
        const loadSpecialites = async () => {
            try {
                const data = await apiGet("/specialites");
                setSpecialites(data);
            } catch (err) {
                showMessage("Erreur lors du chargement des spécialités", "danger");
            }
        };

        loadSpecialites();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await apiAdminPost("/admin/artisans", form);

            navigate("/admin/artisans", {
                state: {
                    message: "Artisan créé avec succès",
                    messageType: "success",
                },
            });
        } catch (err) {
            showMessage("Erreur lors de la création de l'artisan", "danger");
        }
    };


    return (
        <div className="container bg-dark text-white p-5 rounded mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/admin/artisans" className="btn btn-secondary">
                    Retour
                </Link>

                <h2 className="mb-0">Créer un nouvel artisan</h2>

                <div></div>
            </div>

            {message && (
                <p className={`alert alert-${messageType}`}>
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "700px" }}>
                <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <input
                        type="text"
                        className="form-control"
                        value={form.nom}
                        onChange={(e) => setForm({ ...form, nom: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Ville</label>
                    <input
                        type="text"
                        className="form-control"
                        value={form.ville}
                        onChange={(e) => setForm({ ...form, ville: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows="4"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Site Web</label>
                    <input
                        type="url"
                        className="form-control"
                        value={form.siteWeb}
                        onChange={(e) => setForm({ ...form, siteWeb: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        type="url"
                        className="form-control"
                        value={form.image}
                        onChange={(e) => setForm({ ...form, image: e.target.value })}
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">Spécialité</label>
                    <select
                        className="form-select"
                        value={form.specialiteId}
                        onChange={(e) => setForm({ ...form, specialiteId: e.target.value })}
                        required
                    >
                        <option value="">Sélectionnez une spécialité</option>
                        {specialites.map((specialite) => (
                            <option key={specialite.id} value={specialite.id}>
                                {specialite.nom}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success">
                        Créer l'artisan
                    </button>
                </div>
            </form>
        </div>
    );
}
