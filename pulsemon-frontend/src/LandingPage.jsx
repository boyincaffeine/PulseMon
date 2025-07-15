// src/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "50px"
    }}>
      <h1>🚀 Welcome to PulseMon</h1>
      <p>Monitor your system health and get real-time alerts for CPU, memory, and disk usage.</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1604/1604523.png"
        alt="Monitor"
        style={{ width: "150px", margin: "20px" }}
      />
      <div>
        <Link to="/dashboard">
          <button style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            🔍 Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

