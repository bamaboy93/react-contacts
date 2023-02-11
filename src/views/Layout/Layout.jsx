import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Main } from "./Layout.styled";
import Appbar from "../../components/Appbar";
import Sidebar from "../../components/Sidebar";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  return (
    <Box display="flex" position="relative">
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
  );
}
