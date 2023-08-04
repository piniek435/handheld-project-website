import Hero from "../components/home/Hero";
import Header from "../components/home/Header";
import Features from "../components/home/Features";
import Reviews from "../components/home/Reviews";
import Feature from "../components/home/Feature";
import FeatureMobile from "../components/home/FeatureMobile";
import Games from "../components/home/Games";
import BuyNow from "../components/home/BuyNow";
import Social from "../components/home/Social";
import Footer from "../components/home/Footer";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

export default function Home({ isChromium, isFirefox }) {
  // const [mobile, setMobile] = useState(false);

  // const handleResize = () => {
  //   if (window.innerWidth >= 1280) {
  //     setMobile(false);
  //   } else {
  //     setMobile(true);
  //   }
  // };

  // window.addEventListener("resize", handleResize);
  // useEffect(() => {
  //   handleResize();
  // }, []);

  return (
    <>
      <Hero isFirefox={isFirefox} />
      <Features />
      <Header text="Recenzje" />
      <Reviews />
      <div className={styles.desktop}>
        <Feature isChromium={isChromium} />
      </div>
      <div className={styles.mobile}>
        <FeatureMobile isChromium={isChromium} />
      </div>
      <Header text="Gry" />
      <Games />
      <BuyNow isFirefox={isFirefox} />
      <Social />
      <Footer />
    </>
  );
}
