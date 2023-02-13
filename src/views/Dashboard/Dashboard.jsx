import { Box } from "@mui/material";
import Section from "../../components/Section";
import Banner from "../../components/Banner";
import CalendarMin from "../../components/CalendarMin";
import Header from "../../components/Header";
import Total from "../../components/Total";

export default function Dashboard() {
  return (
    <Section>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      <Box
        sx={{
          display: { md: "flex" },
          justifyContent: { md: "space-around" },
        }}
      >
        <Banner />
        <Box>
          <Total />
          <CalendarMin />
        </Box>
      </Box>
    </Section>
  );
}
