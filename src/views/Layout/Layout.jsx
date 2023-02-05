import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Main } from "./Layout.styled";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

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
