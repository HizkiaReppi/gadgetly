import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirectTo }) => {
  const token = useSelector((state) => state.login.token);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  if (token && isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default ProtectedRoute;
