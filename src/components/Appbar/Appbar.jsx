import { useDispatch } from "react-redux";
import { Box, IconButton, Badge, Button } from "@mui/material";
import {
  NotificationsOutlined,
  SettingsOutlined,
  ContactPhone,
} from "@mui/icons-material";
import { logout } from "../../redux/auth/auth-operations";

export default function Appbar() {
  const dispatch = useDispatch();
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
      <ContactPhone fontSize="large" color="secondary" />
      <Box display="flex">
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
    </Box>
  );
}
