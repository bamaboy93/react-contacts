import { Box } from "@mui/material";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";

export default function AddContact() {
  return (
    <Box m="0 30px 20px 30px">
      <Header title="Add Contact" subtitle="Add new contact " />
      <ContactForm />
    </Box>
  );
}
