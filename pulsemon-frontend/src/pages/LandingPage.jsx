import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>👋 Welcome to PulseMon</h1>
      <p>Monitor your server's health with alerts on Slack & Telegram.</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
        alt="Robot Monitor"
        width="120"
      />
      <br /><br />
      <Link to="/login">
        <button style={{ fontSize: "18px", padding: "10px 20px" }}>
          🚀 Go to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;

