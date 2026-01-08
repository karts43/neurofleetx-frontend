import React, { useState } from "react";
import { login } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ INSIDE component

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const data = await login(email, password); // ✅ DEFINE data

      // ✅ ROLE-BASED REDIRECT
      if (data.role === "ADMIN") navigate("/admin");
      else if (data.role === "MANAGER") navigate("/manager");
      else if (data.role === "DRIVER") navigate("/driver");
      else navigate("/customer");

    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>NeuroFleetX Login</h2>

        {error && (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        )}

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

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don’t have an account?{" "}
          <Link to="/register" style={{ color: "#667eea" }}>
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
    width: "93%",
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
