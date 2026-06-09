import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiGet, apiAdminPut } from "../../services/api";
import { Link } from "react-router-dom";


export default function AdminEditArtisan() {

    const [form, setForm] = useState({
        nom: "",
        ville: "",
        description: "",
        email: "",
        siteWeb: "",
        image: "",
        specialiteId: "",
    });
    const [specialites, setSpecialites] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    // Charger les données de l'artisan
    useEffect(() => {
        const loadArtisan = async () => {
            try {
                const data = await apiGet(`/artisans/${id}`);
                setForm(data);
            } catch (err) {
                console.error("Erreur lors du chargement de l'artisan :", err);
            }
        };
        loadArtisan();
    }, [id]);


    // Charger les spécialités pour le select
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
        try {
            await apiAdminPut(`/admin/artisans/${id}`, form);
            navigate("/admin/artisans");
        } catch (err) {
            console.error("Erreur lors de la modification de l'artisan :", err);
        }
    };
    

    return (
        <>
            <div className="m-3">

                <Link to="/admin/artisans">Retour à la liste des artisans</Link>

            </div>
            <div className="m-3 admin-edit-artisan">
                <h2>Modifier un artisan</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nom</label>
                        <input type="text" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
                    </div>
                    <div>
                        <label>Ville</label>
                        <input type="text" value={form.ville} onChange={(e) => setForm({ ...form, ville: e.target.value })} />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                        <label>Site Web</label>
                        <input type="url" value={form.siteWeb} onChange={(e) => setForm({ ...form, siteWeb: e.target.value })} />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="url" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
                    </div>
                    <div>
                        <label>Spécialité</label>
                        <select value={form.specialiteId} onChange={(e) => setForm({ ...form, specialiteId: e.target.value })}>
                            <option value="">Sélectionnez une spécialité</option>
                            {specialites.map((specialite) => (
                                <option key={specialite.id} value={specialite.id}>
                                    {specialite.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Modifier l'artisan</button>
                </form>
            </div>
        </>
    );
}

