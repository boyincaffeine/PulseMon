import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", textAlign: "center" }}>
      <h1>👋 Welcome to PulseMon</h1>
      <p>Monitor your server health with real-time alerts on Slack & Telegram.</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
        alt="Monitoring"
        width="100"
      />
      <br /><br />
      <Link to="/app">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          🚀 Go to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;

