import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiGet, apiAdminPut } from "../../services/api";


export default function AdminEditArtisan() {

    const [form, setForm] = useState([]);
    const [specialites, setSpecialites] = useState([]);



    return (
        <div className="admin-edit-artisan">
            <h2>Modifier un artisan</h2>
            <form>
                <div>
                    <label>Nom</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Ville</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Description</label>
                    <textarea></textarea>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Site Web</label>
                    <input type="url" />
                </div>
                <div>
                    <label>Image</label>
                    <input type="url" />
                </div>
                <div>
                    <label>Spécialité</label>
                    <select>
                        <option value="">Sélectionnez une spécialité</option>
                    </select>
                </div>
                <button type="submit">Modifier l'artisan</button>
            </form>
        </div>
    );
}


