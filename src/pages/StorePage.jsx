import Store from "../components/cart/Store";
import Footer from "../components/home/Footer";

export default function StorePage({ isFirefox }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "50vh", marginBottom: "12.8rem" }}>
        <Store isFirefox={isFirefox} />
      </div>
      <Footer />
    </>
  );
}
