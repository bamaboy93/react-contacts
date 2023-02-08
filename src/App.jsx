import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "./views/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { useAuth } from "./hooks/useAuth";
import { LinearProgress } from "@mui/material";

const Dashboard = lazy(() => import("./views/Dashboard"));
const Contacts = lazy(() => import("./views/Contacts"));
const AddContact = lazy(() => import("./views/AddContact"));
const Calendar = lazy(() => import("./views/Calendar"));
const Faq = lazy(() => import("./views/Faq"));
const NotFound = lazy(() => import("./views/NotFound"));
const SignUp = lazy(() => import("./views/SignUp"));
const Login = lazy(() => import("./views/Login"));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Suspense fallback={<LinearProgress />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PrivateRoute component={<Dashboard />} redirectTo={"/login"} />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo={"/login"} />
              }
            />
            <Route
              path="add"
              element={
                <PrivateRoute
                  component={<AddContact />}
                  redirectTo={"/login"}
                />
              }
            />
            <Route
              path="calendar"
              element={
                <PrivateRoute component={<Calendar />} redirectTo={"/login"} />
              }
            />
            <Route
              path="faq"
              element={
                <PrivateRoute component={<Faq />} redirectTo={"/login"} />
              }
            />
            <Route
              path="*"
              element={
                <PrivateRoute component={<NotFound />} redirectTo={"/login"} />
              }
            />
          </Route>
          <Route
            path="signup"
            element={
              <RestrictedRoute component={<SignUp />} redirectTo={"/"} />
            }
          />
          <Route
            path="login"
            element={<RestrictedRoute component={<Login />} redirectTo={"/"} />}
          />
        </Routes>
      </Suspense>
    )
  );
}
