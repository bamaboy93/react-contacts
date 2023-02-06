import { Box, IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

export default function Appbar() {
  return (
    <Box display="flex" justifyContent="space-between" p={2} pl={4}>
      <ContactPhoneIcon fontSize="large" color="secondary" />
      <Box display="flex">
        <IconButton size="large" color="secondary">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton size="large" color="secondary">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton size="large" color="secondary">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
