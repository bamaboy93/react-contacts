import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "./views/Layout";
import RestrictedRoute from "./components/Routes/RestrictedRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { fetchContacts } from "./redux/contacts/contacts-operations";
import { useAuth } from "./hooks/useAuth";
import { CssBaseline, ThemeProvider, LinearProgress } from "@mui/material";

import { ColorModeContext, useMode } from "./constants/theme";

const Dashboard = lazy(() => import("./views/Dashboard"));
const Contacts = lazy(() => import("./views/Contacts"));
const AddContact = lazy(() => import("./views/AddContact"));
const CalendarView = lazy(() => import("./views/CalendarView"));
const Faq = lazy(() => import("./views/Faq"));
const Charts = lazy(() => import("./views/Charts"));
const NotFound = lazy(() => import("./views/NotFound"));
const SignUp = lazy(() => import("./views/SignUp"));
const Login = lazy(() => import("./views/Login"));

export default function App() {
  const [theme, colorMode] = useMode();

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isRefreshing ? (
          <LinearProgress />
        ) : (
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <PrivateRoute
                      component={<Dashboard />}
                      redirectTo={"/login"}
                    />
                  }
                />
                <Route
                  path="contacts"
                  element={
                    <PrivateRoute
                      component={<Contacts />}
                      redirectTo={"/login"}
                    />
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
                    <PrivateRoute
                      component={<CalendarView />}
                      redirectTo={"/login"}
                    />
                  }
                />
                <Route
                  path="faq"
                  element={
                    <PrivateRoute component={<Faq />} redirectTo={"/login"} />
                  }
                />
                <Route
                  path="charts"
                  element={
                    <PrivateRoute
                      component={<Charts />}
                      redirectTo={"/login"}
                    />
                  }
                />
                <Route
                  path="*"
                  element={
                    <PrivateRoute
                      component={<NotFound />}
                      redirectTo={"/login"}
                    />
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
                element={
                  <RestrictedRoute component={<Login />} redirectTo={"/"} />
                }
              />
            </Routes>
          </Suspense>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
