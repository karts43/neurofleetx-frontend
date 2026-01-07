
import { logout } from "../services/authService";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Admin Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={tileStyle}>Total Users<br /><b>120</b></div>
        <div style={tileStyle}>Total Fleet<br /><b>45</b></div>
        <div style={tileStyle}>Active Vehicles<br /><b>30</b></div>
      </div>

      <button onClick={logout} style={logoutBtn}>Logout</button>
    </div>
  );
}

const tileStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const logoutBtn = {
  marginTop: "30px",
  padding: "8px 16px",
  background: "#e74c3c",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
