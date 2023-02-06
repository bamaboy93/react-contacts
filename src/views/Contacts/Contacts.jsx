import { Box } from "@mui/material";
import ContactsGrid from "../../components/ContactsGrid";
import Header from "../../components/Header";

export default function Contacts() {
  return (
    <Box m="0 30px 20px 30px">
      <Header title="CONTACTS" subtitle="List of your Contacts" />
      <ContactsGrid />
    </Box>
  );
}
