
import { jwtDecode } from "jwt-decode"; // Correct way to import


export const getToken = () => localStorage.getItem("token");

export const getRole = () => {
  const token = getToken();
  if (token) {
    const decoded = jwtDecode(token);
    return decoded.role; // "ADMIN" or "USER"
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
