import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>👋 Welcome to PulseMon</h1>
      <p>Monitor your server health with real-time alerts.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default LandingPage;

