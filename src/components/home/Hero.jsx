import styles from "./Hero.module.css";
import render from "../../assets/render-header.webp";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Header({ isFirefox }) {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const clickHandler = function () {
    navigate("/store");
  };
  return (
    <section className={styles.header}>
      <img className={styles.console} src={render} alt="console render" />
      <div className={styles.column}>
        <h1 className={styles.header1}>PlayJet One</h1>
        <p className={styles.text}>
          Niesamowite gry, zawsze
          <br /> w zasięgu ręki - Odkryj naszą
          <br />
          mobilną konsolę do gier!
        </p>
        {!isFirefox ? (
          <button onClick={clickHandler} className={isHovering ? styles.btn : styles["btn--hover"]} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <span>KUP TERAZ</span>
          </button>
        ) : (
          <button onClick={clickHandler} className={isHovering ? styles.btnFirefox : styles["btn--hoverFirefox"]} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <span>KUP TERAZ</span>
          </button>
        )}
      </div>
    </section>
  );
}
