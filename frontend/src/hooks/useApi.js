export default function useApi() {
  const BASE_URL = import.meta.env.PROD
    ? "https://kzn-backend.onrender.com/api"
    : "http://localhost:5050/api";

  async function get(url) {
    const res = await fetch(BASE_URL + url);
    return res.json();
  }

  async function post(url, data) {
    const res = await fetch(BASE_URL + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  }

  async function del(url) {
    const res = await fetch(BASE_URL + url, { method: "DELETE" });
    return res.json();
  }

  return { get, post, del };
}
