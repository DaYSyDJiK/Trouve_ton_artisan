const API_URL = import.meta.env.VITE_API_URL;

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status} - ${text}`);
  }

  return res.json();
}