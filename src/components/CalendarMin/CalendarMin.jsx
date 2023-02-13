import { useState } from "react";
import { Box, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers";

export default function CalendarMin() {
  const [value, setValue] = useState(new Date());
  const isNotMobile = useMediaQuery("(min-width:600px)");

  return (
    <>
      {isNotMobile && (
        <Box
          sx={{
            width: 350,
            "& .MuiPickerStaticWrapper-content": {
              backgroundColor: "background.add",
              color: "primary.main",
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
      )}
    </>
  );
}
