import { Box } from "@mui/material";
import Banner from "../../components/Banner";
import CalendarMin from "../../components/CalendarMin";
import Header from "../../components/Header";
import Total from "../../components/Total";

export default function Dashboard() {
  return (
    <Box m="0 30px 20px 30px">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      <Box sx={{ display: "flex" }}>
        <Banner />
        <Box>
          <Total />
          <CalendarMin />
        </Box>
      </Box>
    </Box>
  );
}
