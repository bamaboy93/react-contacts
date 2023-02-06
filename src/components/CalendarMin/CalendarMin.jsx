import { useState } from "react";
import { Box, TextField, useTheme } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function CalendarMin() {
  const [value, setValue] = useState(new Date());
  const theme = useTheme();
  return (
    <Box
      width="350px"
      sx={{
        "& .MuiPickerStaticWrapper-content": {
          backgroundColor: `${theme.palette.background.add} !important`,
          color: `${theme.palette.primary.main} !important`,
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
        "& .Mui-selected": {
          backgroundColor: `${theme.palette.secondary.main} !important`,
        },
        "& .MuiButtonBase-root ": {
          backgroundColor: "transparent",
        },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          orientation="portrait"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}
