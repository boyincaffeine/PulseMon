import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendReport = async () => {
    try {
      await axios.post("https://pulsemon.onrender.com/api/report", {
        cpu: 91,
        mem: 90,
        disk: 80,
        ip: "127.0.0.1"
      });
      alert("✅ Report sent!");
      fetchReports();
    } catch (err) {
      console.error("❌ Failed to send report", err);
    }
  };

  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://pulsemon.onrender.com/api/reports");
      setReports(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch reports", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📊 Dashboard</h2>
      <button onClick={sendReport}>🚀 Send Test Alert</button>
      <hr />
      {loading ? <p>Loading...</p> : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Time</th>
              <th>IP</th>
              <th>CPU</th>
              <th>MEM</th>
              <th>DISK</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(r => (
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

export default Dashboard;

