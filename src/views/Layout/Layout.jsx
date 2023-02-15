import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { Main } from "./Layout.styled";
import Appbar from "../../components/Appbar";
import Sidebar from "../../components/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import AppBarMobile from "../../components/AppBarMobile/AppBarMobile";

export default function Layout() {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  return (
    <>
      {isNotMobile ? (
        <Box display="flex" position="relative" overflow="hidden">
          <Sidebar />
          <Main>
            <Appbar />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Outlet />
          </Main>
        </Box>
      ) : (
        <>
          <AppBarMobile />
          <Outlet />
        </>
      )}
    </>
  );
}
