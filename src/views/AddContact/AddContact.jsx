import Section from "../../components/Section";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";

export default function AddContact() {
  return (
    <Section>
      <Header title="Add Contact" subtitle="Add new contact " />
      <ContactForm />
    </Section>
  );
}
