import { useState } from "react";
import { TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { Wrapper } from "./CalendarMin.styled";

export default function CalendarMin() {
  const [value, setValue] = useState(new Date());
  const isNotMobile = useMediaQuery("(min-width:600px)");

  return (
    <>
      {isNotMobile && (
        <Wrapper>
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
        </Wrapper>
      )}
    </>
  );
}
