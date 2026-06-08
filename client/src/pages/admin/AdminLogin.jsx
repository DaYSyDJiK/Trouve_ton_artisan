import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../services/api";

export default function AdminLogin() {

    // State pour les champs du formulaire et les erreurs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();



    // Formulaire de connexion
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await apiPost("/auth/login", { email, password });
            localStorage.setItem("adminToken", response.token);
            navigate("/admin/dashboard");
        }
        catch (err) {
            setError(err.message || "Erreur de connexion");
        }
    };

    return (
        <div className="admin-login">
            <h2>Connexion Admin</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}