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
        <div className="m-5 mx-auto text-center container bg-dark text-white p-4 rounded">
            <h2>Connexion Admin</h2>
            <form onSubmit={handleSubmit} className="mx-auto"
                style={{ maxWidth: "500px" }}>
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label" style={{ width: "120px" }}>
                        Email
                    </label>

                    <div className="col-sm-9">
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label" style={{ width: "120px" }}>
                        Mot de passe
                    </label>

                    <div className="col-sm-9">
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn btn-primary">
                    Se connecter
                </button>
            </form>
        </div>
    );
}