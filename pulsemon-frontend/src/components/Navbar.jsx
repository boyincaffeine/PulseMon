import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "20px" }}>🏠 Home</Link>
      <Link to="/dashboard">📊 Dashboard</Link>
    </nav>
  );
}

export default Navbar;

