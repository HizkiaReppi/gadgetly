import { jwtDecode } from "jwt-decode";

/**
 * Custom hook to decode JWT token from localStorage and redirect to login if accessing a protected route without a token.
 *
 * @param {boolean} protectedRoute - Indicates if the route is protected and requires authentication.
 * @returns {object|null} Decoded token object if token exists, otherwise null.
 */
const useAuth = (protectedRoute = false) => {
  const token = localStorage.getItem("token");

  if (protectedRoute && !token) {
    window.location.replace("/login");
    return null;
  }

  return token ? jwtDecode(token) : null;
};

export default useAuth;
