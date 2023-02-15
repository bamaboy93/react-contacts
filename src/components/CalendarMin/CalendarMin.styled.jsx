import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: 350,
  "& .MuiPickerStaticWrapper-content": {
    backgroundColor: theme.palette.background.add,
    color: theme.palette.secondary.main,
  },
  "& .MuiDialogActions-root": {
    display: "none",
  },
  "& .MuiTypography-overline": {
    display: "none",
  },
  "& .MuiPickersToolbar-penIconButton": {
    display: "none",
  },
  "& .MuiButtonBase-root": {
    backgroundColor: "transparent",
  },
}));
