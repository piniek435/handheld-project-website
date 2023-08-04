import styles from "./Reviews.module.css";
import ign from "../../assets/ign.png";
import gryOnline from "../../assets/gryOnline.png";
import eurogamer from "../../assets/eurogamer.png";
import gamespot from "../../assets/gamespot.png";
import fiveStars from "../../assets/fiveStars.svg";
import fourDotFiveStars from "../../assets/fourDotFiveStars.svg";
export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.review}>
        <img src={ign} alt="IGN Logo" />
        <h3>IGN</h3>
        <img src={fiveStars} alt="Five stars" />
        <blockquote>"Jego wydajność i szybkość działania zapewniają niezawodność i płynne działanie, co przekłada się na efektywność w codziennych zadaniach."</blockquote>
      </div>
      <div className={styles.review}>
        <img className={styles.logo} src={gryOnline} alt="Gry online logo" />
        <h3>Gry-Online</h3>
        <img src={fiveStars} alt="Five stars" />
        <blockquote>"Ten produkt oferuje innowacyjne rozwiązania, które sprawiają, że korzystanie z niego jest przyjemnością podczas rozrywki."</blockquote>
      </div>
      <div className={styles.review}>
        <img className={styles.logo} src={eurogamer} alt="Eurogamer logo" />
        <h3>Eurogamer</h3>
        <img src={fourDotFiveStars} alt="4.5 stars" />
        <blockquote>“Jakość obrazu, jaką dostarcza, jest imponująca, co sprawia, że oglądanie treści multimedialnych staje się wspaniałym doświadczeniem."</blockquote>
      </div>
      <div className={styles.review}>
        <img className={styles.logo} src={gamespot} alt="Gamespot logo" />
        <h3>Gamespot</h3>
        <img src={fiveStars} alt="Five stars" />
        <blockquote>"Bateria tego produktu trzyma długo, co pozwala na długie korzystanie z niego bez konieczności częstego ładowania, co jest szczególnie wygodne w podróży."</blockquote>
      </div>
    </section>
  );
}
