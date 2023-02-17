import { useDispatch } from "react-redux";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Badge,
  Toolbar,
  Button,
  Link,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  ContactPhone,
  NotificationsOutlined,
  LightModeOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
import MobileDrawer from "../Drawer";
import { ColorModeContext } from "../../constants/theme";
import { logout } from "../../redux/auth/auth-operations";

export default function AppBarMobile() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static" sx={{ backgroundColor: "background.add" }}>
        <Toolbar>
          <MobileDrawer />
          <Link
            component={NavLink}
            sx={{ width: "30px", height: "30px" }}
            to="/"
          >
            <ContactPhone fontSize="large" color="secondary" />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
