import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contacts-operations";

import ContactsGrid from "../../components/ContactsGrid";
import Header from "../../components/Header";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box m="0 30px 20px 30px">
      <Header title="CONTACTS" subtitle="List of your Contacts" />
      <ContactsGrid />
    </Box>
  );
}
