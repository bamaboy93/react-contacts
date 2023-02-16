import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import {
  HomeOutlined,
  ContactsOutlined,
  AddBoxOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  MenuOutlined,
  CalendarTodayOutlined,
} from "@mui/icons-material";

export default function MobileDrawer() {
  const [state, setState] = useState({
    left: false,
  });
  const anchor = "left";
  const navItems = [
    { href: "/", icon: <HomeOutlined /> },
    { href: "/contacts", icon: <ContactsOutlined /> },
    { href: "/add", icon: <AddBoxOutlined /> },
    { href: "/calendar", icon: <CalendarTodayOutlined /> },
    { href: "/faq", icon: <HelpOutlineOutlined /> },
    { href: "/bar", icon: <BarChartOutlined /> },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(anchor, true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuOutlined />
      </IconButton>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Box
          sx={{ width: 65 }}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem disablePadding sx={{ mb: 6 }}>
              <ListItemButton sx={{ justifyContent: "center" }}>
                <ListItemIcon sx={{ color: "secondary.light", minWidth: 0 }}>
                  <MenuOutlined />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            {navItems.map(({ href, icon }) => (
              <ListItem key={href} disablePadding sx={{ mb: 4 }}>
                <ListItemButton
                  sx={{ justifyContent: "center" }}
                  component={Link}
                  to={href}
                >
                  <ListItemIcon sx={{ color: "secondary.dark", minWidth: 0 }}>
                    {icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
