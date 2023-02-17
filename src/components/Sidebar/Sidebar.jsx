import { useState } from "react";
import { useSelector } from "react-redux";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import {
  HomeOutlined,
  ContactsOutlined,
  AddBoxOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  MenuOutlined,
  CalendarTodayOutlined,
} from "@mui/icons-material";
import "react-pro-sidebar/dist/css/styles.css";
import Item from "./SidebarItem";
import { getUser } from "../../redux/auth/auth-selectors";
import { Wrapper } from "./Sidebar.styled";

export default function Sidebar() {
  const username = useSelector(getUser);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Wrapper>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color="primary.dark">
                  Contacts
                </Typography>
                <IconButton
                  color="secondary"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="50px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar>U</Avatar>
              </Box>
              <Box textAlign="center">
                {username ? (
                  <Typography variant="h2" color="primary.main" sx={{ mt: 3 }}>
                    {username}
                  </Typography>
                ) : (
                  <Typography variant="h2" color="primary.main" sx={{ mt: 3 }}>
                    Username
                  </Typography>
                )}
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              sx={{ color: "primary.light" }}
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="primary.main"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Contacts"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Contact"
              to="/add"
              icon={<AddBoxOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="primary.main"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="primary.main"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Charts"
              to="/charts"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Wrapper>
  );
}
