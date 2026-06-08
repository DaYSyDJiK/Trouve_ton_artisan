import React from "react";
import { Link } from "react-router-dom";


export default function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <h2>Tableau de bord Admin</h2>
            <p>Bienvenue sur le tableau de bord de l'administration. Ici, vous pouvez gérer les artisans, les catégories et les demandes de contact.</p>
            <ul>
                <li><Link to="/admin/artisans">Gérer les artisans</Link></li>
                <li><Link to="/admin/categories">Gérer les catégories</Link></li>
                <li><Link to="/admin/contacts">Gérer les demandes de contact</Link></li>
            </ul>
        </div>
    );
}