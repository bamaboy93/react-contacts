import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function RestrictedRoute({ component, redirectTo }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
