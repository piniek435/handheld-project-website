import styles from "./Games.module.css";
import Counter from "../../utils/Counter";
import { useRef, useState } from "react";
export default function Games() {
  const [activeTab, setActiveTab] = useState("0");
  const [numObj, setNumObj] = useState({ l1: 45, l2: 70, m1: 39, m2: 55, h1: 32, h2: 41, u1: 16, u2: 31 });
  const prevNumObj = useRef(activeTab);
  const onClickHandler = function (e) {
    setActiveTab(e.target.id);
    if (e.target.id === "0") {
      setNumObj({ l1: 45, l2: 70, m1: 39, m2: 55, h1: 32, h2: 41, u1: 16, u2: 31 });
    }
    if (e.target.id === "1") {
      setNumObj({
        l1: 61,
        l2: 80,
        m1: 49,
        m2: 66,
        h1: 42,
        h2: 51,
        u1: 22,
        u2: 33,
      });
    }
    if (e.target.id === "2") {
      setNumObj({
        l1: 66,
        l2: 72,
        m1: 50,
        m2: 60,
        h1: 45,
        h2: 51,
        u1: 24,
        u2: 34,
      });
    }
    if (e.target.id === "3") {
      setNumObj({
        l1: 59,
        l2: 64,
        m1: 52,
        m2: 59,
        h1: 39,
        h2: 45,
        u1: 20,
        u2: 31,
      });
    }
    if (e.target.id === "4") {
      setNumObj({
        l1: 62,
        l2: 77,
        m1: 51,
        m2: 64,
        h1: 41,
        h2: 49,
        u1: 18,
        u2: 30,
      });
    }
    prevNumObj.current = numObj;
  };

  return (
    <>
      <div className={styles.tabs}>
        <button id="0" onClick={onClickHandler} style={activeTab === "0" ? { background: `#caadf9` } : { background: `none` }} className={activeTab === "0" ? styles.tabActive : styles.tab}>
          Cyberpunk 2077
        </button>
        <button id="1" onClick={onClickHandler} style={activeTab === "1" ? { background: `#b99cf8` } : { background: `none` }} className={activeTab === "1" ? styles.tabActive : styles.tab}>
          Control
        </button>
        <button id="2" onClick={onClickHandler} style={activeTab === "2" ? { background: `#a88af6` } : { background: `none` }} className={activeTab === "2" ? styles.tabActive : styles.tab}>
          Deathloop
        </button>
        <button id="3" onClick={onClickHandler} style={activeTab === "3" ? { background: `#9778f4` } : { background: `none` }} className={activeTab === "3" ? styles.tabActive : styles.tab}>
          {" "}
          Resident Evil 4
        </button>
        <button id="4" onClick={onClickHandler} className={activeTab === "4" ? styles.tabActive : styles.tab} style={activeTab === "4" ? { background: `#8667f3` } : { background: `none` }}>
          Far Cry 6
        </button>
      </div>
      <div className={styles.line} />
      <div className={styles.bg}>
        <div className={styles.info}>
          <p>FPS</p>
          <h5>Więcej = Lepiej</h5>
        </div>
        <div className={styles.legend}>
          <div className={styles.box1}>
            <p>PlayJet One</p>
          </div>
          <div className={styles.box2}>
            <p>Steam Deck</p>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.columnContainer}>
            <div className={styles.columnLower} style={{ height: `${(numObj.l1 / 80) * 50}rem` }}>
              <Counter from={prevNumObj.current.l1} to={numObj.l1} />
            </div>
            <div className={styles.column} style={{ height: `${(numObj.l2 / 80) * 50}rem` }}>
              <Counter from={prevNumObj.current.l2} to={numObj.l2} />
            </div>
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.columnLower} style={{ height: `${(numObj.m1 / 80) * 50}rem` }}>
              <Counter from={prevNumObj.current.m1} to={numObj.m1} />
            </div>
            <div className={styles.column} style={{ height: `${(numObj.m2 / 80) * 50}rem` }}>
              <Counter from={prevNumObj.current.m2} to={numObj.m2} />
            </div>
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.columnLower} style={{ height: `${(numObj.h1 / 80) * 50}rem` }}>
              <Counter from={prevNumObj.current.h1} to={numObj.h1} />
            </div>
            <div className={styles.column} style={{ height: `${(numObj.h2 / 80) * 50}rem` }}>
              <Counter from={prevNumObj.current.h2} to={numObj.h2} />
            </div>
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.columnLower} style={{ height: `${(numObj.u1 / 80) * 50}rem` }}>
              <Counter from={prevNumObj.current.u1} to={numObj.u1} />
            </div>
            <div className={styles.column} style={{ height: `${(numObj.u2 / 80) * 50}rem` }}>
              <Counter from={prevNumObj.current.u2} to={numObj.u2} />
            </div>
          </div>
        </div>
        <div className={styles.columnsMobile}>
          <div className={styles.columnContainer}>
            <div className={styles.columnLower} style={{ height: `${(numObj.l1 / 110) * 50}rem` }}>
              <Counter from={prevNumObj.current.l1} to={numObj.l1} />
            </div>
            <div className={styles.column} style={{ height: `${(numObj.l2 / 110) * 50}rem` }}>
              <Counter from={prevNumObj.current.l2} to={numObj.l2} />
            </div>
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.columnLower} style={{ height: `${(numObj.m1 / 110) * 50}rem` }}>
              <Counter from={prevNumObj.current.m1} to={numObj.m1} />
            </div>
            <div className={styles.column} style={{ height: `${(numObj.m2 / 110) * 50}rem` }}>
              <Counter from={prevNumObj.current.m2} to={numObj.m2} />
            </div>
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.columnLower} style={{ height: `${(numObj.h1 / 110) * 50}rem` }}>
              <Counter from={prevNumObj.current.h1} to={numObj.h1} />
            </div>
            <div className={styles.column} style={{ height: `${(numObj.h2 / 110) * 50}rem` }}>
              <Counter from={prevNumObj.current.h2} to={numObj.h2} />
            </div>
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.columnLower} style={{ height: `${(numObj.u1 / 110) * 50}rem` }}>
              <Counter from={prevNumObj.current.u1} to={numObj.u1} />
            </div>
            <div className={styles.column} style={{ height: `${(numObj.u2 / 110) * 50}rem` }}>
              <Counter from={prevNumObj.current.u2} to={numObj.u2} />
            </div>
          </div>
        </div>
        <div className={styles.lineBottom} />
        <div className={styles.settings}>
          <p>Niskie</p>
          <p style={{ position: "relative", left: `2rem` }}>Średnie</p>
          <p style={{ position: "relative", left: `3rem` }}>Wysokie</p>
          <p>Wysokie + RT</p>
        </div>
        <div className={styles.settingsSmall}>
          <p>Niskie</p>
          <p>Średnie</p>
          <p>Wysokie</p>
          <p>
            Wysokie
            <br />
            +RT
          </p>
        </div>
      </div>
      <svg className={styles.gradient} xmlns="http://www.w3.org/2000/svg" width="784" height="1543" viewBox="0 0 784 1543" fill="none">
        <g filter="url(#filter0_f_87_407)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M814.464 556.206C883.467 562.485 954.096 519.993 1014.4 554.105C1089.76 596.73 1155.02 667.957 1164.24 754.045C1174.12 846.385 1135.7 944.978 1062.33 1001.91C994.172 1054.81 897.748 1048.03 814.464 1025.49C750.188 1008.09 721.968 940.549 672.194 896.315C616.121 846.483 527.601 826.725 509.025 754.045C487.68 670.536 502.152 560.935 574.496 514.076C645.356 468.179 730.386 548.556 814.464 556.206Z"
            fill="#9D85F2"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <filter id="filter0_f_87_407" x="0" y="0" width="1665.77" height="1542.35" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_87_407" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
