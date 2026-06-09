import { useState, useEffect } from "react";
import { apiGet, apiAdminDelete } from "../../services/api";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminArtisans() {

    const [artisans, setArtisans] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState(location.state?.message || "");
    const [messageType, setMessageType] = useState(location.state?.messageType || "");

    const showMessage = (text, type) => {
        setMessage(text);
        setMessageType(type);
    };


    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message]);


    useEffect(() => {

        const loadArtisans = async () => {
            try {
                const data = await apiGet("/artisans");
                setArtisans(data);
            }
            catch (err) {
                showMessage("Erreur lors du chargement des artisans", "danger");
            }
        };

        loadArtisans();

    }, []);

    const handleDelete = async (id) => {
        // console.log("Supprimer artisan", id);

        // Confirmation avant suppression
        if (!window.confirm("Supprimer cet artisan ?")) {
            return;
        }
        try {
            console.log("Suppression de", id);
            await apiAdminDelete(`/admin/artisans/${id}`);
            const updatedArtisans = artisans.filter(artisan => artisan.id !== id);
            setArtisans(updatedArtisans);
            showMessage("Artisan supprimé avec succès", "success");
        } catch (err) {
            showMessage("Erreur lors de la suppression", "danger");
        }
    };

    const handleEdit = (id) => {
        // console.log("Modifier artisan", id);
        navigate(`/admin/artisans/${id}/edit`);
    };


    return (
        <div className="m-5 mx-auto text-center container bg-dark text-white p-4 rounded">
            <div className="d-flex justify-content-center gap-3 mb-4">
                <Link
                    to="/admin/dashboard"
                    className="btn btn-primary"
                >
                    Dashboard
                </Link>

                <Link
                    to="/admin/artisans/create"
                    className="btn btn-success"
                >
                    Créer un artisan
                </Link>
            </div>

            <div className="my-3 admin-artisans">
                <h2 className="mb-3 mt-5">Gérer les artisans</h2>
                {message && <p className={`alert alert-${messageType}`}>{message}</p>}
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

