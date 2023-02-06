import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Main } from "./Layout.styled";
import Appbar from "../../components/Appbar";
import Sidebar from "../../components/Sidebar";

export default function Layout() {
  return (
    <Box display="flex" position="relative">
      <Sidebar />
      <Main>
        <Appbar />
        <Outlet />
      </Main>
    </Box>
  );
}
