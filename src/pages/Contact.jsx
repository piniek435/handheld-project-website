import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/home/Footer";

export default function Contact({ isFirefox }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "50vh", marginBottom: "12.8rem" }}>
        <ContactForm isFirefox={isFirefox} />
      </div>
      <Footer />
    </>
  );
}
