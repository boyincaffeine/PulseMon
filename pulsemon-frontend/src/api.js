// pulsemon-frontend/api.js
const API_BASE = "https://pulsemon.onrender.com"; // Use your Render API

export const sendMetrics = async (metrics) => {
  const res = await fetch(`${API_BASE}/api/report`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(metrics),
  });

  return res.json();
};

