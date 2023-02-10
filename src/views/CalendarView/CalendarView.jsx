import { Box } from "@mui/material";

import Header from "../../components/Header";
import Calendar from "../../components/Calendar";

export default function CalendarView() {
  return (
    <Box m="0 30px 20px 30px">
      <Header title="Calendar" />
      <Calendar />
    </Box>
  );
}
