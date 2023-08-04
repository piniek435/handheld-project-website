import { useState } from "react";
import styles from "./BuyNow.module.css";
import render from "../../assets/renderBuy.png";
import { useNavigate } from "react-router-dom";
export default function BuyNow({ isFirefox }) {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const clickHandler = function () {
    navigate("/store");
  };
  return (
    <div className={styles.buyNow}>
      <p>
        Zamów swój model
        <br />
        już od <strong>1999zł</strong>
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
      <img alt="Gaming console" src={render} />
      <svg xmlns="http://www.w3.org/2000/svg" width="784" height="1543" viewBox="0 0 784 1543" fill="none">
        <g filter="url(#filter0_f_87_407)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M814.464 556.206C883.467 562.485 954.096 519.993 1014.4 554.105C1089.76 596.73 1155.02 667.957 1164.24 754.045C1174.12 846.385 1135.7 944.978 1062.33 1001.91C994.172 1054.81 897.748 1048.03 814.464 1025.49C750.188 1008.09 721.968 940.549 672.194 896.315C616.121 846.483 527.601 826.725 509.025 754.045C487.68 670.536 502.152 560.935 574.496 514.076C645.356 468.179 730.386 548.556 814.464 556.206Z"
            fill="#9D85F2"
            fillOpacity="1"
          />
        </g>
        <defs></defs>
      </svg>
    </div>
  );
}
