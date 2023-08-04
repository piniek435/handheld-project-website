import "./App.css";
import Home from "./pages/Home";
import Sticky from "./components/Sticky";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import GradientBg from "./components/home/GradientBg";
import GradientBgLite from "./components/home/GradientBgLite";
import NotFound from "./pages/NotFound";
import FormSuccess from "./pages/FormSuccess";
import StorePage from "./pages/StorePage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const isChromium = !!window.chrome;
  let isFirefox = false;
  if (navigator.userAgent.match(/firefox|fxios/i)) isFirefox = true;
  return (
    <>
      <Sticky />
      {isChromium || isFirefox ? <GradientBg isFirefox={isFirefox} /> : <GradientBgLite />}
      <Routes>
        <Route path="/" element={<Home isChromium={isChromium} isFirefox={isFirefox} />} />
        <Route path="/contact" element={<Contact isFirefox={isFirefox} />} />
        <Route path="/success" element={<FormSuccess />} />
        <Route path="/store" element={<StorePage isFirefox={isFirefox} />} />
        <Route path="/checkout" element={<CheckoutPage isFirefox={isFirefox} />} />
        <Route path="/paymentOK" element={<DetailsPage />} />
        <Route path="/paymentCancel" element={<DetailsPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
