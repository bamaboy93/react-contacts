import Section from "../../components/Section";
import FaqList from "../../components/FaqList";
import Header from "../../components/Header";

export default function Faq() {
  return (
    <Section>
      <Header title="FAQ" subtitle="List of questions you may ask" />
      <FaqList />
    </Section>
  );
}
