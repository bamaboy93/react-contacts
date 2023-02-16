import { Box, useMediaQuery } from "@mui/material";
import Section from "../../components/Section";
import Banner from "../../components/Banner";
import CalendarMin from "../../components/CalendarMin";
import Header from "../../components/Header";
import Total from "../../components/Total";
import Quote from "../../components/Quote";

export default function Dashboard() {
  const isMobile = useMediaQuery("(max-width:600px)");
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
          {isMobile && <Quote />}
          <CalendarMin />
        </Box>
      </Box>
    </Section>
  );
}
