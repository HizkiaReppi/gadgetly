import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Custom hook to decode JWT token from localStorage and redirect to login if accessing a protected route without a token.
 *
 * @param {boolean} protectedRoute - Indicates if the route is protected and requires authentication.
 * @returns {object|null} Decoded token object if token exists, otherwise null.
 */
const useAuth = (protectedRoute = false) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.login.token);

  if (protectedRoute && !token) {
    navigate("/auth/login", {
      state: {
        path: location.pathname,
      },
      replace: true,
    });
  }

  if (token) {
    const user = jwtDecode(token);
    return { ...user, token };
  } else {
    return null;
  }
};

export default useAuth;
