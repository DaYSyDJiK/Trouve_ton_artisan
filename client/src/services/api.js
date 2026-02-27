const API_URL = import.meta.env.VITE_API_URL;

// GET
export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `API ${res.status}`);
  }

  return res.json();
}

// POST
export async function apiPost(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(text || `API ${res.status}`);
  }

  return text ? JSON.parse(text) : {};
}