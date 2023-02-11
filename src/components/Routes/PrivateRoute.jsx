import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function PrivateRoute({ component, redirectTo }) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
}
