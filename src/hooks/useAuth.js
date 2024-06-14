import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../redux/slice/auth/authThunks";

/**
 * Custom hook to decode JWT token from localStorage and redirect to login if accessing a protected route without a valid token.
 *
 * @param {boolean} protectedRoute - Indicates if the route is protected and requires authentication.
 * @returns {object|null} Decoded token object if token exists and is valid, otherwise null.
 */
const useAuth = (protectedRoute = false) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);

  if (token) {
    try {
      const user = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (user.exp < currentTime) {
        // Token has expired, log out the user and redirect to login
        dispatch(logoutUser());
        return null;
      }

      return { ...user, token };
    } catch (error) {
      // Handle any errors in decoding the token
      console.error("Invalid token:", error);
      dispatch(logoutUser());
      return null;
    }
  }

  if (protectedRoute && !token) {
    navigate("/auth/login", {
      state: {
        path: location.pathname,
      },
      replace: true,
    });
  }

  return null;
};

export default useAuth;
