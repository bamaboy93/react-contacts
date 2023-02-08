import { useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getUser,
  getIsRefreshCurrent,
} from "../redux/auth/auth-selectors";

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(getIsLoggedIn),
    isRefreshing: useSelector(getIsRefreshCurrent),
    user: useSelector(getUser),
  };
};
