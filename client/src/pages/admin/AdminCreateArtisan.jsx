import { useState, useEffect } from "react";
import { apiGet, apiAdminPost } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminCreateArtisan() {
    const navigate = useNavigate();

    const [specialites, setSpecialites] = useState([]);

    const [form, setForm] = useState({
        nom: "",
        ville: "",
        description: "",
        email: "",
        siteWeb: "",
        image: "",
        specialiteId: "",
    });

    useEffect(() => {
        const loadSpecialites = async () => {
            try {
                const data = await apiGet("/specialites");
                setSpecialites(data);
            } catch (err) {
                console.error("Erreur lors du chargement des spécialités :", err);
            }
        };

        loadSpecialites();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newArtisan = await apiAdminPost("/admin/artisans", form);

        navigate("/admin/artisans");
    };


    return (
    
    <>
        <div className="m-3 admin-create-artisan decoration-none">

            <Link to="/admin/artisans">Retour à la liste des artisans</Link>

        </div>
    
    
    <div className="m-3 admin-create-artisan">
        <h2>Créer un nouvel artisan</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom</label>
                <input 
                    type="text"
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>Ville</label>
                <input
                    type="text"
                    value={form.ville}
                    onChange={(e) => setForm({ ...form, ville: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>Site Web</label>
                <input
                    type="url"
                    value={form.siteWeb}
                    onChange={(e) => setForm({ ...form, siteWeb: e.target.value })}
                />
            </div>
            <div>
                <label>Image</label>
                <input
                    type="url"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                />
            </div>
            <div>
                <label>Spécialité</label>
                <select
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
            <button type="submit">Créer l'artisan</button>
        </form>
    </div>
    </>
    );
}
