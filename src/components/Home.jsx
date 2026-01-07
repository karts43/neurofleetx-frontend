import { Link, Navigate } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Redirect logged-in users
  if (token && role) {
    if (role === "ADMIN") return <Navigate to="/admin" />;
    if (role === "MANAGER") return <Navigate to="/manager" />;
    if (role === "DRIVER") return <Navigate to="/driver" />;
    if (role === "CUSTOMER") return <Navigate to="/customer" />;
  }

  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.title}>NeuroFleetX</h1>
        <p style={styles.subtitle}>
          AI-Driven Urban Fleet & Traffic Intelligence Platform
        </p>

        <div style={styles.heroButtons}>
          <Link to="/login" style={styles.primaryBtn}>Login</Link>
          <Link to="/register" style={styles.secondaryBtn}>Register</Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Platform Capabilities</h2>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>🚦 Smart Traffic Insights</h3>
            <p>Analyze traffic patterns and reduce congestion using AI-based decisions.</p>
          </div>

          <div style={styles.card}>
            <h3>🚗 Fleet Optimization</h3>
            <p>Monitor fleet usage, availability, and vehicle health in real time.</p>
          </div>

          <div style={styles.card}>
            <h3>📍 Live Tracking</h3>
            <p>Track vehicles live and manage routes efficiently across the city.</p>
          </div>
        </div>
      </section>

      {/* ROLES SECTION */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>Who Can Use NeuroFleetX?</h2>

        <div style={styles.cardGrid}>
          <div style={styles.roleCard}>👨‍💼 Admin<br /><span>System Control & Analytics</span></div>
          <div style={styles.roleCard}>🧑‍✈️ Fleet Manager<br /><span>Fleet & Vehicle Monitoring</span></div>
          <div style={styles.roleCard}>🚚 Driver<br /><span>Assigned Trips & Status</span></div>
          <div style={styles.roleCard}>👤 Customer<br /><span>Bookings & Availability</span></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 NeuroFleetX | AI-Driven Urban Mobility
      </footer>
    </div>
  );
}

export default Home;


const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
  },
  hero: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "52px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    maxWidth: "600px",
    marginBottom: "30px",
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
  },
  primaryBtn: {
    padding: "12px 25px",
    background: "#fff",
    color: "#667eea",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  secondaryBtn: {
    padding: "12px 25px",
    border: "2px solid #fff",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  section: {
    padding: "60px 40px",
    background: "#f4f6fb",
    textAlign: "center",
  },
  sectionAlt: {
    padding: "60px 40px",
    background: "#ffffff",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "32px",
    marginBottom: "40px",
  },
  cardGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    padding: "25px",
    width: "260px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  },
  roleCard: {
    background: "#667eea",
    color: "#fff",
    padding: "25px",
    width: "220px",
    borderRadius: "10px",
    fontSize: "18px",
  },
  footer: {
    padding: "15px",
    background: "#2c3e50",
    color: "#fff",
    textAlign: "center",
  },
};
