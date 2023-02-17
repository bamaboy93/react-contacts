import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Box, IconButton, Badge, Button, Link, useTheme } from "@mui/material";
import {
  NotificationsOutlined,
  ContactPhone,
  LightModeOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
import { ColorModeContext } from "../../constants/theme";
import { logout } from "../../redux/auth/auth-operations";

export default function Appbar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const onLogOut = () => {
    dispatch(logout());
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      pl={4}
    >
      <Link component={NavLink} to="/">
        <ContactPhone fontSize="large" color="secondary" />
      </Link>

      <Box display="flex">
        <IconButton size="large" color="secondary">
          <Badge badgeContent={1} color="error">
            <NotificationsOutlined />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          color="secondary"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <Button size="large" color="secondary" onClick={onLogOut}>
          LOGOUT
        </Button>
      </Box>
    </Box>
  );
}
