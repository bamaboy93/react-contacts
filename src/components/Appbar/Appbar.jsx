import { useDispatch } from "react-redux";
import { Box, IconButton, Badge, Button } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
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
      <ContactPhoneIcon fontSize="large" color="secondary" />
      <Box display="flex">
        <IconButton size="large" color="secondary">
          <Badge badgeContent={1} color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" color="secondary">
          <SettingsOutlinedIcon />
        </IconButton>
        <Button size="large" color="secondary" onClick={onLogOut}>
          LOGOUT
        </Button>
      </Box>
    </Box>
  );
}
