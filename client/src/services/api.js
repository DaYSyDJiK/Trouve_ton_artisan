const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.warn("⚠️ VITE_API_URL est manquant. Ajoutez-le sur Vercel.");
}

async function parseJsonSafe(res) {
  const text = await res.text();
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    // si c'est du HTML (erreur Render), on renvoie le texte brut
    return { raw: text };
  }
}

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`);
  const data = await parseJsonSafe(res);

  if (!res.ok) {
    throw new Error(data?.error || data?.message || `Erreur API (${res.status})`);
  }
  return data;
}

export async function apiPost(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await parseJsonSafe(res);

  if (!res.ok) {
    throw new Error(data?.error || data?.message || `Erreur API (${res.status})`);
  }
  return data;
}


// Récupérér le token d'authentification depuis le localStorage
function getAuthHeaders() {
  const token = localStorage.getItem("adminToken");
  return {
    "Content-Type": "application/json",
    Authorization : `Bearer ${token}`,
  };
}


// Fonctions admin

export async function apiAdminDelete(path) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  const data = await parseJsonSafe(res);


  return data;
}



export async function apiAdminPost(path, body){
  // Fetch avec la methode POST
const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(body),
  });
  const data = await parseJsonSafe(res);


  if (!res.ok) {
    throw new Error(data?.error || data?.message || `Erreur API (${res.status})`);
  }
  return data;
}