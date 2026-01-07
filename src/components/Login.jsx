import React, { useState } from "react";
import { login } from "../services/authService";
import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ADMIN");

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // dummy login call
    login(email, role);
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>NeuroFleetX Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="ADMIN">Admin</option>
          <option value="MANAGER">Fleet Manager</option>
          <option value="DRIVER">Driver</option>
          <option value="CUSTOMER">Customer</option>
        </select>

        <button type="submit" style={styles.button}>
          Login
        </button>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don’t have an account?{" "}
          <Link to="/register" style={{ color: "#667eea", fontWeight: "bold" }}>
            Register
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Login;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "90%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
