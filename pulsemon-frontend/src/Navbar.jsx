// src/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    fontWeight: "bold",
    padding: "8px 16px",
    borderRadius: "8px",
  };

  const activeStyle = {
    backgroundColor: "#4CAF50",
  };

  return (
    <nav
      style={{
        padding: "12px 20px",
        backgroundColor: "#1e1e1e",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ fontSize: "20px" }}>🩺 PulseMon</div>
      <div>
        <Link
          to="/"
          style={{
            ...linkStyle,
            ...(location.pathname === "/" ? activeStyle : {}),
          }}
        >
          🏠 Home
        </Link>
        <Link
          to="/dashboard"
          style={{
            ...linkStyle,
            ...(location.pathname === "/dashboard" ? activeStyle : {}),
          }}
        >
          📊 Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

