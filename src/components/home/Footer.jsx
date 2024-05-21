import React, { useRef, useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  // Create a ref for the tooltip
  const tooltipRef = useRef(null);
  const [tooltipState, setTooltipState] = useState(false);

  // Function to show tooltip
  const showTooltip = () => {
    setTooltipState(!tooltipState);
    if (tooltipState === true) {
      tooltipRef.current.style.visibility = "visible";
      tooltipRef.current.style.opacity = 1;
    } else {
      tooltipRef.current.style.visibility = "hidden";
      tooltipRef.current.style.opacity = 0;
    }
  };

  // Function to hide tooltip
  const hideTooltip = () => {};

  return (
    <>
      <footer className={styles.bgDarkest} />
      <div className={styles.footer}>
        <div>
          <h2>PlayJet</h2>
          <h3>Unlock the Power of Fun</h3>
        </div>
        <p>
          PlayJet SA
          <br />
          ul. Ćwiartki 3/4
          <br /> Warszawa, Polska
          <br /> 00-215
        </p>
      </div>
      <p className={styles.copyright}>© 2024 PlayJet SA. Wszelkie prawa zastrzeżone.</p>
      <div style={{ textAlign: "center", cursor: "pointer", textDecoration: "underline" }} onClick={showTooltip}>
        Copyright
      </div>
      <p ref={tooltipRef} className={styles.tooltip}>
        Manuel W. <a href="https://skfb.ly/6Tx6u">https://skfb.ly/6Tx6u</a> (Modified colors)
        <br />
        <a href="https://www.vecteezy.com/free-vector/techno">Techno Vectors by Vecteezy</a>
        <br />
        <a href="https://www.freepik.com/free-photo/challenger-stands-front-spooky-castle-illustration_14402210.htm#query=game&position=4&from_view=search&track=sph">Image by liuzishan</a> on Freepik
        <br />
        MIT © Phosphor Icons <a href="https://github.com/phosphor-icons">https://github.com/phosphor-icons</a>
      </p>
    </>
  );
}
