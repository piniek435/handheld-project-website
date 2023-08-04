import styles from "./Store.module.css";
import check from "../../assets/check.svg";
import shield from "../../assets/shield.svg";
import returnIco from "../../assets/returnIco.svg";
import coins from "../../assets/coins.svg";
import parcel from "../../assets/parcel.svg";
import { useState } from "react";
import Renders from "./Renders";
import { useNavigate } from "react-router-dom";

export default function Store({ isFirefox }) {
  const [color, setColor] = useState("Czarny");
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const clickHandler = function () {
    navigate(`/checkout?color=${color}`);
  };

  return (
    <section className={styles.store}>
      <Renders color={color} className={styles.productImg} />
      <div className={styles.details}>
        <h1 className={styles.storeHeader}>PlayJet One - {color}</h1>
        <h1 className={styles.storeHeaderSmall}>
          PlayJet One
          <br />
          {color}
        </h1>
        <h2 className={styles.price}>1999zł</h2>
        <p className={styles.select}>Dostępne warianty:</p>
        <div className={styles.colors}>
          {color === "Czarny" && <img src={check} className={styles.checkMark} style={{ left: "13px" }} />}
          {color === "Biały" && <img src={check} className={styles.checkMark} style={{ left: "111px" }} />}
          {color === "Niebieski" && <img src={check} className={styles.checkMark} style={{ left: "209px" }} />}
          <svg onClick={() => setColor("Czarny")} xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
            <circle cx="31" cy="31" r="30.5" fill="url(#paint0_linear_204_46)" stroke="#7E5EF2" />
            <defs>
              <linearGradient id="paint0_linear_204_46" x1="31" y1="0" x2="31" y2="62" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A1A1A" />
                <stop offset="1" stopColor="#383838" />
              </linearGradient>
            </defs>
          </svg>
          <svg onClick={() => setColor("Biały")} xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
            <circle cx="31" cy="31" r="30.5" fill="url(#paint0_linear_204_48)" stroke="#7E5EF2" />
            <defs>
              <linearGradient id="paint0_linear_204_48" x1="31" y1="0" x2="31" y2="62" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EDEDED" />
                <stop offset="1" stopColor="#C2C2C2" />
              </linearGradient>
            </defs>
          </svg>
          <svg onClick={() => setColor("Niebieski")} xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
            <circle cx="31" cy="31" r="30.5" fill="url(#paint0_linear_204_47)" stroke="#7E5EF2" />
            <defs>
              <linearGradient id="paint0_linear_204_47" x1="31" y1="0" x2="31" y2="62" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1D3B74" />
                <stop offset="1" stopColor="#15294F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className={styles.specs}>
        <div>
          <h4>OS</h4>
          <p>Windows 11 Home</p>
          <br />
          <h4>CPU</h4>
          <p>AMD Ryzen™ Z1 Extreme</p>
          <br />
          <h4>GPU</h4>
          <p>AMD RDNA™ 3</p>
          <br />
          <h4>Wyświetlacz</h4>
          <p>
            7 cali FHD (1920 x 1080)
            <br />
            sRGB: 100%
            <br />
            Gorilla® Glass DXC
            <br />
            120Hz
            <br />
            500 nitów
          </p>
          <br />
          <h4>RAM</h4>
          <p>16GB LPDDR5</p>
          <br />
          <h4>Pamięć</h4>
          <p>512GB NVMe™ M.2 SSD</p>
          <br />
          <h4>Bezpieczństwo</h4>
          <p>
            Czujnik linii papilarnych
            <br />
            Microsoft Pluton Security
          </p>
        </div>
        <div>
          <h4>Porty</h4>
          <p>3.5mm Combo Audio Jack</p>
          <p>USB Type-C</p>
          <p>Czytnik kart microSD</p>
          <br />
          <h4>Audio</h4>
          <p>Wbudowany mikrofon</p>
          <p>2-głośnikowy system stereo</p>
          <br />
          <h4>Sieć</h4>
          <p>Wi-Fi 6E</p>
          <p>Bluetooth® 5.2</p>
          <br />
          <h4>Bateria</h4>
          <p>5600mAh</p>
          <br />
          <h4>Zasilacz</h4>
          <p>65W AC Adapter</p>
          <br />
          <h4>Waga</h4>
          <p>608 g</p>
          <br />
          <h4>Wymiary (Sze. x Wys. x Gru.)</h4>
          <p>28.0 x 11.1 x 2.12 ~ 3.24 cm</p>
          <p>(11.02" x 4.37" x 0.83" ~ 1.28")</p>
        </div>
      </div>
      <div className={styles.ToCartContainer}>
        {!isFirefox ? (
          <button onClick={clickHandler} className={isHovering ? styles.btn : styles["btn--hover"]} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <span>KUP TERAZ</span>
          </button>
        ) : (
          <button onClick={clickHandler} className={isHovering ? styles.btnFirefox : styles["btn--hoverFirefox"]} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <span>KUP TERAZ</span>
          </button>
        )}
        <div className={styles.features}>
          <div>
            <img src={shield} />
            <p>2 lata gwaranci</p>
          </div>
          <div>
            <img src={coins} />
            <p>Darmowa dostawa</p>
          </div>
          <div style={{ position: "relative", top: "7px" }}>
            <img src={returnIco} />
            <p>14 dni na zwrot</p>
          </div>
          <div>
            <img src={parcel} />
            <p>Ubezpieczona paczka</p>
          </div>
        </div>
      </div>
    </section>
  );
}
