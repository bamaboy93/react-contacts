import { Box } from "@mui/material";
import FaqList from "../../components/FaqList";
import Header from "../../components/Header";

export default function Faq() {
  return (
    <Box m="0 30px 20px 30px">
      <Header title="FAQ" subtitle="List of questions you may ask" />
      <FaqList />
    </Box>
  );
}
