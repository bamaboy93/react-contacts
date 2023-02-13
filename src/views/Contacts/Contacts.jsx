import Section from "../../components/Section";
import ContactsGrid from "../../components/ContactsGrid";
import Header from "../../components/Header";

export default function Contacts() {
  return (
    <Section>
      <Header title="CONTACTS" subtitle="List of your Contacts" />
      <ContactsGrid />
    </Section>
  );
}
