import React from "react";
import { logout } from "../services/authService";

function Navbar() {
  const role = localStorage.getItem("role");

  return (
    <div style={styles.navbar}>
      <h3 style={styles.logo}>NeuroFleetX</h3>

      <div style={styles.right}>
        <span style={styles.role}>Role: {role}</span>
        <button onClick={logout} style={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;

const styles = {
  navbar: {
    height: "60px",
    background: "#2c3e50",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  logo: {
    margin: 0,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  role: {
    fontSize: "14px",
  },
  logout: {
    padding: "6px 12px",
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
