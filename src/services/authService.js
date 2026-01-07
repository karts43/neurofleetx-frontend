// src/services/authService.js

export const login = (email, role) => {
  // dummy authentication
  localStorage.setItem("token", "dummy-token");
  localStorage.setItem("role", role);

  if (role === "ADMIN") {
    window.location.href = "/admin";
  } else if (role === "MANAGER") {
    window.location.href = "/manager";
  } else if (role === "DRIVER") {
    window.location.href = "/driver";
  } else if (role === "CUSTOMER") {
    window.location.href = "/customer";
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "/";
};
