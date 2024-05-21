import Checkout from "../components/checkout/Checkout";
import Footer from "../components/home/Footer";

export default function CheckoutPage({ isFirefox }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "50vh", marginBottom: "12.8rem" }}>
        <Checkout isFirefox={isFirefox} />
      </div>
      <Footer />
    </>
  );
}
