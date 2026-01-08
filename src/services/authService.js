// LOGIN
export const login = async (email, password) => {

  // 🔐 Dummy users (frontend-only)
  const users = {
    "admin@gmail.com": { password: "admin123", role: "ADMIN" },
    "manager@gmail.com": { password: "manager123", role: "MANAGER" },
    "driver@gmail.com": { password: "driver123", role: "DRIVER" },
    "customer@gmail.com": { password: "customer123", role: "CUSTOMER" },
  };

  const user = users[email];

  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  // Fake token
  localStorage.setItem("token", "frontend-only-token");
  localStorage.setItem("role", user.role);

  return { token: "frontend-only-token", role: user.role };
};

// LOGOUT  ✅ (THIS FIXES YOUR ERROR)
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "/login";
};
