const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.warn("⚠️ VITE_API_URL est manquant. Ajoute-le sur Vercel.");
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