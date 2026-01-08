// LOGIN
export const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Invalid email or password");
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);

    return data;
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
};

// LOGOUT  ✅ (THIS FIXES YOUR ERROR)
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "/login";
};
