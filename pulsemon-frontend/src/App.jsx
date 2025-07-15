import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendReport = async () => {
    try {
      const res = await axios.post("https://pulsemon.onrender.com/api/report", {
        cpu: 91,
        mem: 90,
        disk: 80,
        ip: "127.0.0.1"
      });
      alert("✅ Report sent!");
      fetchReports(); // Refresh reports
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Failed to send report");
    }
  };

  const fetchReports = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://pulsemon.onrender.com/api/reports");
      setReports(res.data);
    } catch (err) {
      console.error("Failed to fetch reports:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📊 PulseMon Dashboard</h1>
      <button onClick={sendReport}>🚀 Send Test Report</button>
      <hr />
      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Time</th>
              <th>IP</th>
              <th>CPU %</th>
              <th>MEM %</th>
              <th>DISK %</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r._id}>
                <td>{new Date(r.timestamp).toLocaleString()}</td>
                <td>{r.ip}</td>
                <td>{r.cpu}</td>
                <td>{r.mem}</td>
                <td>{r.disk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

