import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  "& .pro-sidebar-inner": {
    background: theme.palette.background.add,
    height: "100vh",
  },
  "& .pro-icon-wrapper": {
    backgroundColor: "transparent !important",
  },
  "& .pro-menu-item": {
    margin: "0 0 10px 0 !important",
  },
  "& .pro-inner-item:hover": {
    color: "#868dfb !important",
  },
  "& .pro-menu-item.active": {
    color: `${theme.palette.secondary.main} !important`,
  },
}));
