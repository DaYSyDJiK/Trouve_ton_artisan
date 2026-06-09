import { useState, useEffect } from "react";
import { apiGet, apiAdminDelete } from "../../services/api";
import { useNavigate }  from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminArtisans() {

    const [artisans, setArtisans] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        const loadArtisans = async () => {
            try {
                const data = await apiGet("/artisans");
                setArtisans(data);
            }
            catch (err) {
                console.error("Erreur lors du chargement des artisans :", err);
            }
        };

        loadArtisans();

    }, []);

    const handleDelete = async (id) => {
        // console.log("Supprimer artisan", id);

        try {
            console.log("Suppression de", id);
            await apiAdminDelete(`/admin/artisans/${id}`);
            const updatedArtisans = artisans.filter(artisan => artisan.id !== id);
            setArtisans(updatedArtisans);
        } catch (err) {
            console.error("Erreur lors de la suppression de l'artisan :", err);
        }
    };

    const handleEdit = (id) => {
        // console.log("Modifier artisan", id);
        navigate(`/admin/artisans/${id}/edit`);
    };

    return (
        <div className="m-3">
            <div className="my-3 admin-artisans">
                <h2>Créer un nouvel artisan</h2>
                <Link to="/admin/artisans/create" className="btn btn-success">Créer</Link>
            </div>

            <div className="my-3 admin-artisans">
                <h2>Gérer les artisans</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Ville</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artisans.map(artisan => (
                            <tr key={artisan.id}>
                                <td>{artisan.nom}</td>
                                <td>{artisan.ville}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => handleEdit(artisan.id)}>Modifier</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(artisan.id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

