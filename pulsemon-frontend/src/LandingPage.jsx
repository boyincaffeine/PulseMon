import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
        background: "linear-gradient(to bottom, #e8f0ff, #ffffff)",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#333" }}>👋 Hello! Welcome to PulseMon</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginTop: "10px" }}>
        Monitor your server's health and performance in real-time.<br />
        Get alerts on Slack & Telegram instantly!
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
        alt="Robot Monitor"
        width="160"
        style={{ marginTop: "30px" }}
      />

      <br /><br />
      <Link to="/dashboard">
        <button
          style={{
            padding: "12px 30px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          🚀 Go to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;

