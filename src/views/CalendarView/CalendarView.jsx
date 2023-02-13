import { useMediaQuery } from "@mui/material";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Calendar from "../../components/Calendar";
import CalendarMobile from "../../components/CalendarMobile";

export default function CalendarView() {
  const isDesktop = useMediaQuery("(min-width:767px)");

  return (
    <Section>
      <Header title="Calendar" />
      {isDesktop ? <Calendar /> : <CalendarMobile />}
    </Section>
  );
}
