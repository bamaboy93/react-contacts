import { useDispatch } from "react-redux";
import { AppBar, Box, Badge, Toolbar, Button, IconButton } from "@mui/material";
import {
  ContactPhone,
  NotificationsOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import MobileDrawer from "../Drawer/Drawer";
import { logout } from "../../redux/auth/auth-operations";

export default function AppBarMobile() {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <MobileDrawer />
          <ContactPhone fontSize="large" color="secondary" />
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton size="large" color="secondary">
              <Badge badgeContent={1} color="error">
                <NotificationsOutlined />
              </Badge>
            </IconButton>
            <IconButton size="large" color="secondary">
              <SettingsOutlined />
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
