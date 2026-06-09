import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <>
            <div className="m-5 mx-auto text-center container bg-dark text-white p-4 rounded">

                <div className="m-3 text-end">
                    <button className=" m-3 btn btn-danger" onClick={() => {
                        localStorage.removeItem("adminToken");
                        navigate("/admin/login");
                    }}>
                        Deconnexion
                    </button>
                </div>

                <div className="m-3 admin-dashboard">
                    <h2>Tableau de bord Admin</h2>
                    <p>Bienvenue sur le tableau de bord de l'administration. Ici, vous pouvez gérer les artisans, les catégories et les demandes de contact.</p>
                    <ul className="list-unstyled">
                        <li><Link to="/admin/artisans" className="btn btn-primary text-decoration-none">
                            Gérer les artisans
                        </Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}