import ContactForm from "../components/contact/ContactForm";

export default function Contact({ isFirefox }) {
  return (
    <>
      <ContactForm isFirefox={isFirefox} />
    </>
  );
}
